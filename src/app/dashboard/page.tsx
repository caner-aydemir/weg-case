"use client"
import React, {useState, useEffect} from 'react';
import DashboardContent from "@/components/DashboardContent";
import {Spinner} from "@nextui-org/react";

function Page() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
    }, []);

    return (
        !isLoading
            ?
                <div className="flex h-screen w-full  items-center justify-center">
                    <Spinner label="EN UYGUN"
                             size={"lg"}
                             color="success"
                             labelColor="success"/>
                </div>
            :
                <DashboardContent/>

    );
}

export default Page;