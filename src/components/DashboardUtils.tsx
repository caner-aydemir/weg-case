import Note from "../components/Note"
import EmplooyesToBeVoted from "@/components/EmplooyesToBeVoted";


function DashBoardUtils() {
    return (
       <div className="w-full h-full items-center gap-y-20 xs:gap-y-2 flex flex-col ">
           <Note/>
           <p className="text-xl text-green-500 font-bold xs:text-lg">Ayın elemanını seçmek için oylama yapınız.</p>
           <EmplooyesToBeVoted/>
       </div>
    );
}

export default DashBoardUtils;