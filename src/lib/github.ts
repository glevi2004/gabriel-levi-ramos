interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export async function fetchGitHubProfile(): Promise<GitHubUser> {
  const response = await fetch("https://api.github.com/users/glevi2004");
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }
  const data = await response.json();
  console.log("GitHub Profile Data:", {
    name: data.name,
    login: data.login,
    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    bio: data.bio,
    location: data.location,
    blog: data.blog,
    createdAt: data.created_at,
  });
  return data;
}
