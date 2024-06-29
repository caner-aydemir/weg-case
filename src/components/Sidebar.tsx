"use client"
import React,{useState} from 'react';
import { IoHome } from "react-icons/io5";
import { IoCard } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import {Button} from "@nextui-org/react";
import Cookies from "universal-cookie"
import {useRouter} from "next/navigation"
import { usePathname } from 'next/navigation'
import SignOutModal from "@/components/signOutModal";
import MobileNavbar from "@/components/mobileNavbar";

function Sidebar() {
    const pathname = usePathname()
    const cookies =  new Cookies()
    const token = cookies.get("token")
    const router = useRouter()

    const [isSelected, setIsSelected] = useState(0);
    const sidebarItems = [
        {name:"home" ,icons : IoHome , href:"/dashboard"},
        {name:"my-wallet" ,icons : IoCard, href:null},
        {name:"my-profile" ,icons : FaUser, href:null},
        {name:"logout" ,icons : TbLogout, href:"/"},
    ]

    function goRoute(index,href){
        setIsSelected(index)
        router.push(href)
    }

    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    return (
        <>
            {typeof window !== "undefined" && window?.matchMedia('(max-width: 897px)').matches ? <MobileNavbar/> :
                <div className={`${!token && "hidden"} xs:hidden w-24  border-r-2 h-screen border-[#E6E8EB]`}>
                    <div className={`  w-full h-full flex justify-center py-10`}>
                        <div className={"w-1/2 gap-y-5 text-2xl text-gray-500 items-center flex flex-col "}>
                            {sidebarItems.map((items , index)=>(
                                <Button isIconOnly
                                        key={index}
                                        disableRipple={true}
                                        onPress={()=>items.name === "logout" ? setOpenLogoutModal(!openLogoutModal) : (items.href !== null && goRoute(index,items.href))}
                                        size={"lg"}
                                        variant={pathname === items.href ? "solid"  : "light"}
                                        className={`${pathname === items.href ? "bg-blue-100" : ""}`}  >
                                    <items.icons size={25}  className={` ${ pathname === items.href ? "text-blue-600 " : "text-gray-500"}`}/>
                                </Button>
                            ))}
                        </div>
                        <SignOutModal show={openLogoutModal} close={() => setOpenLogoutModal(!openLogoutModal)} />
                    </div>
                </div>
            }
        </>
    );
}
export default Sidebar;