import React from "react";
import { Avatar, AvatarIcon } from "@nextui-org/react";

interface AvatarWithIconProps {
  username: string;
}

const AvatarWithIcon = ({ username }: AvatarWithIconProps) => (
  <div className="flex justify-center  items-center ">
    <Avatar
      size="sm"
      icon={<AvatarIcon />}
      classNames={{
        base: "bg-transparent",
        icon: "text-green-500",
      }}
    />
    <span className="text-white">{username}</span>
  </div>
);

export default AvatarWithIcon;
