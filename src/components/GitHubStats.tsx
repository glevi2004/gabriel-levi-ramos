"use client";

import { useState, useEffect } from "react";

interface GitHubProfile {
  username: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  created_at: string;
}

interface GitHubStatsProps {
  data: {
    profile: GitHubProfile;
    recentContributions: number;
    totalContributions: number;
    repositories: number;
  };
}

export default function GitHubStats({ data }: GitHubStatsProps) {
  if (!data || !data.profile) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-16 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const { profile, recentContributions, totalContributions, repositories } =
    data;

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profile.avatar_url}
          alt={`${profile.name}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-blue-500"
        />
        <div>
          <h3 className="text-xl font-bold text-foreground">{profile.name}</h3>
          <p className="text-muted-foreground">@{profile.username}</p>
          {profile.bio && (
            <p className="text-sm text-muted-foreground mt-1">{profile.bio}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-foreground">
            {profile.public_repos}
          </div>
          <div className="text-sm text-muted-foreground">Repositories</div>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-foreground">
            {profile.followers}
          </div>
          <div className="text-sm text-muted-foreground">Followers</div>
        </div>
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-foreground">
            {profile.following}
          </div>
          <div className="text-sm text-muted-foreground">Following</div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              {totalContributions}
            </div>
            <div className="text-sm text-muted-foreground">
              Total Contributions
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              {recentContributions}
            </div>
            <div className="text-sm text-muted-foreground">Recent Commits</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">
              {new Date(profile.created_at).getFullYear()}
            </div>
            <div className="text-sm text-muted-foreground">Member Since</div>
          </div>
        </div>
      </div>
    </div>
  );
}
