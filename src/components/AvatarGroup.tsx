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
  },
  {
    src: "/socials/linkedin.png",
    fallback: "CN",
    tooltip: "Linkedin",
  },
  {
    src: "/socials/insta.png",
    fallback: "AW",
    tooltip: "Instagram",
  },
];

export const AvatarGroupDemo = () => {
  return (
    <AvatarGroup className="h-12 -space-x-3">
      {AVATARS.map((avatar, index) => (
        <Avatar key={index} className="size-12 border-3 border-background">
          <AvatarImage src={avatar.src} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
          <AvatarGroupTooltip>
            <p>{avatar.tooltip}</p>
          </AvatarGroupTooltip>
        </Avatar>
      ))}
    </AvatarGroup>
  );
};
