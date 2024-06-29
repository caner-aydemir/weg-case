
import React from 'react';
import { Avatar, AvatarIcon } from '@nextui-org/react';

const AvatarWithIcon = ({ username }) => (
    <div className="flex justify-center text-green-500 items-center text-white">
        <Avatar
            size="sm"
            icon={<AvatarIcon />}
            classNames={{
                base: 'bg-transparent',
                icon: 'text-green-500',
            }}
        />
        <span>{username}</span>
    </div>
);

export default AvatarWithIcon;