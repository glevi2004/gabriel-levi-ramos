import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AvatarGroup,
  AvatarGroupTooltip,
} from "@/components/animate-ui/components/avatar-group";

const AVATARS = [
  {
    src: "/socials/github.png",
    fallback: "SK",
    tooltip: "Github",
    href: "https://github.com/glevi2004",
  },
  {
    src: "/socials/linkedin.png",
    fallback: "CN",
    tooltip: "Linkedin",
    href: "https://linkedin.com/in/gabrielleviramos",
  },
  {
    src: "/socials/insta.png",
    fallback: "AW",
    tooltip: "Instagram",
    href: "#", // Add your Instagram URL here
  },
  {
    src: "/socials/x.png",
    fallback: "X",
    tooltip: "X",
    href: "#", // Add your X/Twitter URL here
  },
];

export const AvatarGroupDemo = () => {
  return (
    <AvatarGroup
      className="h-12 -space-x-3"
      tooltipProps={{ side: "top", sideOffset: 8 }}
    >
      {AVATARS.map((avatar, index) => (
        <a
          key={index}
          href={avatar.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <Avatar className="size-12 border-3 border-background cursor-pointer">
            <AvatarImage src={avatar.src} />
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
            <AvatarGroupTooltip>
              <p>{avatar.tooltip}</p>
            </AvatarGroupTooltip>
          </Avatar>
        </a>
      ))}
    </AvatarGroup>
  );
};
