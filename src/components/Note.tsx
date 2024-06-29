"use client"
import React,{useState} from 'react';
import closeIcon from "../icons/close.svg"
import Image from "next/image"
import {Button} from "@nextui-org/react";

function Note() {

    const [hiddenBar, setHiddenBar] = useState(false);
    return (
        <div className={"flex xs:w-screen xs:my-12 xs:px-3  flex-col items-center gap-y-10 justify-center w-full h-auto py-7"}>
            <div className={` ${hiddenBar && "invisible" } xs:text-center xs:w-full w-1/2 flex px-5 py-1 items-center justify-between rounded-md bg-[#78B6FF4D] text-sm font-semibold`}>
                <p>Wingie En Uygun çalışanları olarak ayın elemanını seçiyoruz. Aşağıdan oy verebilirsiniz.  </p>
                <Button isIconOnly={true} onPress={()=>setHiddenBar(true)} className="flex text-end bg-transparent"><Image src={closeIcon} alt={"close"}/></Button>
            </div>
        </div>
    );
}

export default Note;