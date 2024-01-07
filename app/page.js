"use client";
import Image from "next/image";
import logollcctc from "../public/logollcctc.jpg";
import personImg from "../public/person.png";
import { useState, useEffect } from "react";

export default function Home() {
    const [membersData, setMembersData] = useState(null);
    const URL = "http://localhost:3000/api/members" || "https://llcctc.vercel.app/api/members"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(URL);
                const data = await res.json();
                setMembersData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!membersData) {
        return <p>Loading...</p>;
    }

    console.log(membersData["Department of Leadership"]["Vice Leaders"]);

    // Render your component using clubData
    return (
        <main className="xl:max-w-screen-lg md:max-w-screen-sm md:mx-auto mx-10">
            <div>
                <Image
                    src={logollcctc}
                    width={140}
                    height={140}
                    className="mx-auto"
                />
                <p className="text-center mt-5 font-bold text-xl">
                    LLCC Toastmaster Club
                </p>
            </div>
            <div className="mt-2">
                <p className="text-center text-gray-300">
                    LLCC Toastmaster Club was established on 12/1/2023, led by
                    Mr Peter, with a total of 21 members.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-10 md:grid-cols-3 gap-0 content-center">
                <hr className="relative top-[12px] border" />
                <p className="text-center col-span-8 md:col-auto border-l-2 border-r-2 rounded-md">
                    LLCC Toastmaster Club Structure
                </p>
                <hr className="relative top-[12px] border" />
            </div>
            <div className="mt-10">
                <div className="w-32 mx-auto">
                    <p className="text-center font-bold">Leader</p>
                    <Image src={membersData["Department of Leadership"]["Leader"][1]["img"]["src"]} width={1000} height={1000} className="w-32 mt-5" />
                    <p className="mt-4 text-center">
                        {membersData["Department of Leadership"]["Leader"][0]["name"]}
                    </p>
                </div>
                <div className="grid grid-cols-2">
                    {membersData["Department of Leadership"][
                        "Vice Leaders"
                    ].map((member) => (
                        <div className="w-auto mx-auto" key={member}>
                            <p className="text-center font-bold">Vice Leader</p>
                            <Image src={personImg} alt={member} className="w-32 mt-5" />
                            <p className="mt-4 text-center">{member}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 grid grid-cols-5 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center col-span-3 md:col-auto border-l-2 border-r-2 rounded-md">
                        Department of Activity
                    </p>
                    <hr className="relative top-[12px] border" />
                </div>
                <div className="mt-10">
                    <div className="w-32 mx-auto">
                        <p className="text-center font-bold">Leader</p>
                        <Image src={personImg} className="w-32 mt-5" />
                        <p className="mt-4 text-center">Mr Khammoun</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Tonkar</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Khamxay</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Miss Nouphaluck</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-5 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center col-span-3 md:col-auto border-l-2 border-r-2 rounded-md">
                        Department of English Speaking
                    </p>
                    <hr className="relative top-[12px] border" />
                </div>
                <div className="mt-10">
                    <div className="w-32 mx-auto">
                        <p className="text-center font-bold">Leader</p>
                        <Image src={personImg} className="w-32 mt-5" />
                        <p className="mt-4 text-center">Miss Anna</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Miss Panda</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Lidsamai</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Miss Pinky</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-5 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center col-span-3 md:col-auto border-l-2 border-r-2 rounded-md">
                        Department of English Teaching
                    </p>
                    <hr className="relative top-[12px] border" />
                </div>
                <div className="mt-10">
                    <div className="w-32 mx-auto">
                        <p className="text-center font-bold">Leader</p>
                        <Image src={personImg} className="w-32 mt-5" />
                        <p className="mt-4 text-center">Mr Sonsay</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Saysamone</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Yang Kong</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Dala</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Ded</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Sayson</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-5 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center col-span-3 md:col-auto border-l-2 border-r-2 rounded-md">
                        Department of External relations
                    </p>
                    <hr className="relative top-[12px] border" />
                </div>
                <div className="mt-10">
                    <div className="w-32 mx-auto">
                        <p className="text-center font-bold">Leader</p>
                        <Image src={personImg} className="w-32 mt-5" />
                        <p className="mt-4 text-center">Miss Nuttaly</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Miss Namwarn</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Miss Ulin</p>
                        </div>
                        <div className="w-auto mx-auto">
                            <Image src={personImg} className="w-32 mt-5" />
                            <p className="mt-4 text-center">Mr Alino</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

// export default function Home() {
//     return (
//         <main className="xl:max-w-screen-lg md:max-w-screen-sm md:mx-auto mx-10">
//             <div>
//                 <Image
//                     src={logollcctc}
//                     width={140}
//                     height={140}
//                     className="mx-auto"
//                 />
//                 <p className="text-center mt-5 font-bold text-xl">
//                     LLCC Toastmaster Club
//                 </p>
//             </div>
//             <div className="mt-2">
//                 <p className="text-center text-gray-300">
//                     LLCC Toastmaster Club was established on 12/1/2023, led by
//                     Mr Peter, with a total of 21 members.
//                 </p>
//             </div>
//             <div className="mt-10 grid grid-cols-10 md:grid-cols-3 gap-0 content-center">
//                 <hr className="relative top-[12px] border" />
//                 <p className="text-center col-span-8 md:col-auto border-l-2 border-r-2 rounded-md">
//                     LLCC Toastmaster Club Structure
//                 </p>
//                 <hr className="relative top-[12px] border" />
//             </div>
//             <div className="mt-10">
//                 <div className="w-32 mx-auto">
//                     <p className="text-center font-bold">Leader</p>
//                     <Image src={personImg} className="w-32 mt-5" />
//                     <p className="mt-4 text-center">Mr Johnny</p>
//                 </div>
//                 <div className="grid grid-cols-2">
//                     <div className="w-auto mx-auto">
//                         <p className="text-center font-bold">Vice Leader</p>
//                         <Image src={personImg} className="w-32 mt-5" />
//                         <p className="mt-4 text-center">Mr Khamthong</p>
//                     </div>
//                     <div className="w-auto mx-auto">
//                         <p className="text-center font-bold">Vice Leader</p>
//                         <Image src={personImg} className="w-32 mt-5" />
//                         <p className="mt-4 text-center">Miss Manida</p>
//                     </div>
//                 </div>
//                 <div className="mt-10 grid grid-cols-5 md:grid-cols-3 gap-0 content-center">
//                     <hr className="relative top-[12px] border" />
//                     <p className="text-center col-span-3 md:col-auto border-l-2 border-r-2 rounded-md">
//                         Department of Activity
//                     </p>
//                     <hr className="relative top-[12px] border" />
//                 </div>
//                 <div className="mt-10">
//                     <div className="w-32 mx-auto">
//                         <p className="text-center font-bold">Leader</p>
//                         <Image src={personImg} className="w-32 mt-5" />
//                         <p className="mt-4 text-center">Mr Khammoun</p>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Tonkar</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Khamxay</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Miss Nouphaluck</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-10 grid grid-cols-5 md:grid-cols-3 gap-0 content-center">
//                     <hr className="relative top-[12px] border" />
//                     <p className="text-center col-span-3 md:col-auto border-l-2 border-r-2 rounded-md">
//                         Department of English Speaking
//                     </p>
//                     <hr className="relative top-[12px] border" />
//                 </div>
//                 <div className="mt-10">
//                     <div className="w-32 mx-auto">
//                         <p className="text-center font-bold">Leader</p>
//                         <Image src={personImg} className="w-32 mt-5" />
//                         <p className="mt-4 text-center">Miss Anna</p>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Miss Panda</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Lidsamai</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Miss Pinky</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-10 grid grid-cols-5 md:grid-cols-3 gap-0 content-center">
//                     <hr className="relative top-[12px] border" />
//                     <p className="text-center col-span-3 md:col-auto border-l-2 border-r-2 rounded-md">
//                         Department of English Teaching
//                     </p>
//                     <hr className="relative top-[12px] border" />
//                 </div>
//                 <div className="mt-10">
//                     <div className="w-32 mx-auto">
//                         <p className="text-center font-bold">Leader</p>
//                         <Image src={personImg} className="w-32 mt-5" />
//                         <p className="mt-4 text-center">Mr Sonsay</p>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Saysamone</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Yang Kong</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Dala</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Ded</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Sayson</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-10 grid grid-cols-5 md:grid-cols-3 gap-0 content-center">
//                     <hr className="relative top-[12px] border" />
//                     <p className="text-center col-span-3 md:col-auto border-l-2 border-r-2 rounded-md">
//                         Department of External relations
//                     </p>
//                     <hr className="relative top-[12px] border" />
//                 </div>
//                 <div className="mt-10">
//                     <div className="w-32 mx-auto">
//                         <p className="text-center font-bold">Leader</p>
//                         <Image src={personImg} className="w-32 mt-5" />
//                         <p className="mt-4 text-center">Miss Nuttaly</p>
//                     </div>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Miss Namwarn</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Miss Ulin</p>
//                         </div>
//                         <div className="w-auto mx-auto">
//                             <Image src={personImg} className="w-32 mt-5" />
//                             <p className="mt-4 text-center">Mr Alino</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }
