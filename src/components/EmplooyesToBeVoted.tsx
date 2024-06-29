"use client"
import React, {useContext, useState} from 'react';
import {Card, CardHeader, Image} from "@nextui-org/react";
import {HeartIcon} from '../icons/HeartIcon';
import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {EmployeeContext} from "@/Provider/context";

function EmplooyesToBeVoted() {
    const {users,setUsers,setEmployeeDetails} = useContext(EmployeeContext)
    const router = useRouter()

    const handleVote = (userID) => {
        console.log("Bu fonksiyonumda kullanıcların oy sayılarını arttırıp, azalana doğru bir sıralama gerçekleştiriyorum.")
        const updatedUsers = users.map(user => {
            if (user.userID === userID) {
                return { ...user, vote: user.vote + 1 };
            }
            return user;
        });
        updatedUsers.sort((a, b) => b.vote - a.vote);
        setUsers(updatedUsers);
    };

    function goUserDetail(user){
        console.log("Bu fonksiyonumda detay sayfasına gidilecek kullanıcının datalarını context hooks state management yöntemi ile tutuyorum")
        setEmployeeDetails(user)
        router.push(`/employee/${user.userID}`)
    }
    return (
        <div className=" xs:w-full xs:px-4 w-1/4 flex flex-col gap-y-8 h-screen h-full">

            {users.map((user,index)=>(
                <div className={"hover:cursor-pointer"} key={index} onClick={()=>goUserDetail(user)}>
                    <Card
                    className="flex hover:cursor-pointer  hover:scale-105 border-2 hover:border-2 hover:border-green-500" >
                    <CardHeader className="justify-between">
                        <div className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{user.firstName}</p>
                                <p className="text-small text-default-500">{user.jobTitle}</p>
                            </div>
                        </div>
                        <div className="flex items-center font-bold text-green-500
                     gap-x-2">
                            <p>Oy : {user.vote}</p>
                            <Button isIconOnly color="danger" aria-label="Like" onClick={() => handleVote(user.userID)}>
                                <HeartIcon />
                            </Button>
                        </div>
                    </CardHeader>
                </Card></div>
            ))}
        </div>
    );
}

export default EmplooyesToBeVoted;