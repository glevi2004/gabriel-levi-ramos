import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

export async function GET(request: NextRequest) {
  try {
    // Check if GitHub token is available
    if (!process.env.GITHUB_TOKEN) {
      return NextResponse.json(
        { error: "GitHub token not configured" },
        { status: 500 }
      );
    }

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const username = "glevi2004";

    // Get user profile
    const { data: user } = await octokit.users.getByUsername({
      username: username,
    });

    // Get comprehensive stats using search API (includes both public and private repos)
    let totalCommits = 0;
    let totalIssues = 0;
    let totalPullRequests = 0;
    let totalContributions = 0;

    try {
      // Get total commits (includes private repos when authenticated)
      const { data: commitsSearch } = await octokit.search.commits({
        q: `author:${username}`,
        per_page: 1,
      });
      totalCommits = commitsSearch.total_count || 0;

      // Get total issues (includes private repos when authenticated)
      const { data: issuesSearch } = await octokit.search.issuesAndPullRequests(
        {
          q: `author:${username} is:issue`,
          per_page: 1,
        }
      );
      totalIssues = issuesSearch.total_count || 0;

      // Get total pull requests (includes private repos when authenticated)
      const { data: prsSearch } = await octokit.search.issuesAndPullRequests({
        q: `author:${username} is:pr`,
        per_page: 1,
      });
      totalPullRequests = prsSearch.total_count || 0;

      // Calculate total contributions from search results
      totalContributions = totalCommits + totalIssues + totalPullRequests;

      console.log("Stats:", {
        totalCommits,
        totalIssues,
        totalPullRequests,
        totalContributions,
        source: "Calculated from Octokit search results",
      });
    } catch (error) {
      console.error("Error fetching total contributions:", error);
      totalContributions = 0;
    }

    console.log("=== GitHub API Route Called ===");
    console.log("User Profile Data:", user);
    console.log("Stats:", {
      totalCommits,
      totalIssues,
      totalPullRequests,
      totalContributions,
      source: "Calculated from Octokit search results",
    });
    console.log("================================");

    return NextResponse.json({
      success: true,
      data: {
        profile: {
          username: user.login,
          name: user.name,
          bio: user.bio,
          public_repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          avatar_url: user.avatar_url,
          created_at: user.created_at,
        },
        stats: {
          totalCommits,
          totalIssues,
          totalPullRequests,
          totalContributions,
        },
      },
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
