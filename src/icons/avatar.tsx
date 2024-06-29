import React from "react";
import { Avatar, AvatarIcon } from "@nextui-org/react";

interface AvatarWithIconProps {
  username: string;
}

const AvatarWithIcon = ({ username }: AvatarWithIconProps) => (
  <div className="flex justify-center text-green-500 items-center ">
    <Avatar
      size="sm"
      icon={<AvatarIcon />}
      classNames={{
        base: "bg-transparent",
        icon: "text-green-500",
      }}
    />
    <span>{username}</span>
  </div>
);

export default AvatarWithIcon;
