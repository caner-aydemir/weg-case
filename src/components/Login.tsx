"use client"
import React, {useState} from 'react';
import {RiLockPasswordFill} from "react-icons/ri";
import {useRouter} from "next/navigation"
import AvatarWithIcon from "../icons/avatar"
import EyeSlashFilledIcon from "../icons/EyeSlashFilledIcon"
import EyeFilledIcon from "../icons/EyeFilledIcon"

import {
    Input,
    Avatar,
    Button,
} from "@nextui-org/react";
import ForgatPasswordModal from "@/components/forgatPasswordModal";
import ClueModal from "@/components/clueModal";


const passwordContent = <div className="flex justify-center text-amber-500 items-center  text-white  ">
    <Avatar
        size={"sm"}
        icon={<RiLockPasswordFill className="w-5 h-5 text-green-500"/>}
        classNames={{
            base: "bg-transparent ",
            icon: "text-white",
        }}
    />
    <span>password</span>
</div>

function Login() {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [goDashboard, setGoDashboard] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = async (event) => {
        console.log("Bu fonksiyonumda kullanıcıdan aldığım user ve password değerlerini api/login apime POST request olarak atıyorum" +
            "eğer username ve password değeri vercelde olumlu dönerse JWT tokenimi alıyorum ve authentication işlemimi gerçekleştiriyorum" +
            "login olmayan kullanıclar dashboarda erişemez. Middleware da güvenlik önlemlerini alıyorum.")
        event.preventDefault()
        setGoDashboard(true)
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const {success,data} = await res.json();

            if (success)
            {
                router.push("/dashboard")
            }
            else {
                setGoDashboard(false)
                setErrorMessage(data.message)

            }
        } catch (error) {
            console.log(error.message)
        }
    };
    const [openForgatPasswordModal, setOpenForgatPasswordModal] = useState(false);
    const [clue, setClue] = useState(true);

    const usernameEventToggle = (event)=>{
        setUsername(event.target.value) //Kullanıcıdan username datasını alıyorum
    }

    const passwordEventToggle = (event)=>{
        setPassword(event.target.value) //Kullanıcıdan password datasını alıyorum

    }

    //Burada eğer kullanıcının username değeri yok ise passworde değer girmesine izin vermiyorum.
    const isDisabledPasswordInput = username.trim() !== "" && username.length > 0 ? false : true
    return (
        <div className={"h-screen bg-gray-950 flex justify-center xs:p-2 items-center  text-white"}>
            <form onSubmit={handleSubmit} className="w-full flex justify-center">
                <div
                    className={" gap-y-5 px-5 border-8 border-slate-800 bg-gray-900 rounded-2xl  py-5  " +
                        "w-1/4 xs:w-full  h-auto flex justify-center items-center flex-col shadow-xl shadow-black"}>
                    <div className={"flex items-center gap-x-3 "}>
                        <p className="font-semibold xs:text-xl text-2xl text-center text-green-500 font-black ">Wingie En Uygun <br/> Employee Panel</p>

                    </div>
                    <p className="font-bold text-lg xs:text-medium text-center">Sign in to your account</p>
                    <Input size={"sm"}
                           onChange={(event) => usernameEventToggle(event)}
                           variant={"underlined"}
                           color={"success"}
                           type="text"
                           label={<AvatarWithIcon/>}/>
                    <Input
                        label={passwordContent}
                        variant="underlined"
                        size={"sm"}
                        color={"success"}
                        onChange={(event) => passwordEventToggle(event)}
                        disabled={isDisabledPasswordInput}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                )}
                            </button>
                        }
                        type={isVisible ? password : "password"}
                    />
                    <p className="text-sm text-red-600 font-semibold text-center">{errorMessage}</p>
                    <p onClick={()=>setOpenForgatPasswordModal(!openForgatPasswordModal)} className="hover:cursor-pointer w-full text-end text-xs underline">Forgot password ?</p>
                    <Button type={"submit"}
                            isLoading={goDashboard ? true : false}
                            className="bg-green-500 w-full text-white font-bold  text-lg">
                        Login
                    </Button>

                </div>
            </form>

            {
                openForgatPasswordModal && <ForgatPasswordModal show={openForgatPasswordModal} close={()=>setOpenForgatPasswordModal(!openForgatPasswordModal)}/>
            }
            {
                clue && <ClueModal show={clue} close={()=>setClue(!clue)}/>
            }

        </div>
    );
}
export default Login;