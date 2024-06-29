"use client"
import React, {useContext, useState, useEffect} from 'react';
import {EmployeeContext} from "@/Provider/context";
import {Spinner} from "@nextui-org/react";
import {IoIosArrowBack} from "react-icons/io";
import {useRouter} from "next/navigation";

function Page() {
    const router = useRouter()
    const {employeeDetails} = useContext(EmployeeContext);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        if (employeeDetails.firstName === undefined) {
            router.push("/")
        }
    }, []);

    return (
        !isLoading ?
            <div className="flex h-screen w-full  items-center justify-center"><Spinner label="EN UYGUN" size={"lg"}
                                                                                        color="success"
                                                                                        labelColor="success"/></div>
            :
            <section className="w-full overflow-hidden dark:bg-gray-900">
                {window.matchMedia('(max-width: 897px)').matches &&
                    <div className=" p-3  bg-white w-full h-12 z-10 fixed">
                        <button className=" flex text-xl font-bold  items-center" onClick={() => router.back()}>
                            <IoIosArrowBack/> back
                        </button>

                    </div>}
                <div className="flex flex-col">
                    <img
                        src="https://cdn2.enuygun.com/media/lib/uploads/image/logo-kaynagi-33816.jpeg"
                        alt="User Cover"
                        className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"/>

                    <div className="sm:w-[80%] xs:w-[90%] gap-x-3 mx-auto flex ">
                        <img
                            src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
                            alt="User Profile"
                            className="rounded-full object-cover lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2  relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"/>

                        <div className="flex flex-col ">
                            <h1
                                className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                                {employeeDetails.firstName} {employeeDetails.lastName}</h1>
                            <h2
                                className=" xs:hidden w-full text-left  my-4 sm:mx-4 xs:pl-4 text-gray-600 dark:text-white lg:text-xl md:text-xl sm:text-xl xs:text-xl font-serif">

                                {employeeDetails.jobTitle}
                            </h2>
                        </div>

                    </div>

                    <div
                        className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
                        <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                            <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                                <div className="w-full">
                                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                        <div className="flex flex-col pb-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First
                                                Name
                                            </dt>
                                            <dd className="text-lg font-semibold">{employeeDetails.firstName}</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name
                                            </dt>
                                            <dd className="text-lg font-semibold">{employeeDetails.lastName}</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date Of
                                                Start
                                            </dt>
                                            <dd className="text-lg font-semibold">{employeeDetails.hireDate}</dd>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone</dt>
                                            <dd className="text-lg font-semibold">{employeeDetails.phone}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="w-full">
                                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                        <div className="flex flex-col pb-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Address</dt>
                                            <dd className="text-lg font-semibold">{employeeDetails.address}</dd>
                                        </div>

                                        <div className="flex flex-col pt-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Department
                                            </dt>
                                            <dd className="text-lg font-semibold">{employeeDetails.department}</dd>
                                        </div>
                                        <div className="flex flex-col pt-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                            <dd className="text-lg font-semibold">{employeeDetails.email}</dd>
                                        </div>

                                        <div className="flex flex-col pt-3">
                                            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Job Title
                                            </dt>
                                            <dd className="text-lg font-semibold">{employeeDetails.jobTitle}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Page;