import React from "react";

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
  return (
    <div className="text-center">
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
      <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProfileInfo;
