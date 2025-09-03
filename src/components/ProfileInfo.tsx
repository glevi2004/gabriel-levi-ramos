import React, { useEffect, useState } from "react";
import { fetchGitHubProfile } from "@/lib/github";

interface ProfileInfoProps {
  name: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    website: string;
  };
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  description,
  contact,
}) => {
  const [githubStats, setGithubStats] = useState<{
    repos: number;
    followers: number;
    following: number;
  } | null>(null);

  useEffect(() => {
    const loadGithubStats = async () => {
      try {
        const profile = await fetchGitHubProfile();
        setGithubStats({
          repos: profile.public_repos,
          followers: profile.followers,
          following: profile.following,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      }
    };

    loadGithubStats();
  }, []);
  return (
    <div className="text-left max-w-3xl">
      <h1 className="text-3xl font-bold text-foreground mb-6">{name}</h1>

      {/* Contact Info with Emojis */}
      <div className="flex flex-row gap-6 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-lg">📧</span>
          <a
            href={`mailto:${contact.email}`}
            className="text-primary hover:underline"
          >
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">📱</span>
          <span className="text-foreground">{contact.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">🔗</span>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {contact.linkedin}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">🌐</span>
          <a
            href={`https://${contact.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {contact.website}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg">💻</span>
          <a
            href={`https://github.com/${contact.github.split("/")[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @{contact.github.split("/")[1]}
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed mb-6">
        {description}
      </p>

      {/* GitHub Stats */}
      {githubStats && (
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold">{githubStats.repos}</div>
            <div className="text-sm text-muted-foreground">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{githubStats.followers}</div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{githubStats.following}</div>
            <div className="text-sm text-muted-foreground">Following</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
