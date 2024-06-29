import React from 'react';
import DashBoardUtils from "@/components/DashboardUtils";

function Page() {
    return (
        <div className={" xs:w-screen bg-[#F7FAFC] flex w-full  h-auto"}>
            <div className="w-full ">
                <DashBoardUtils/>
            </div>
        </div>
    );
}

export default Page;