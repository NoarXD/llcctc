"use client";
import Image from "next/image";
import logollcctc from "../public/logollcctc.jpg";
import personImg from "../public/person.png";
import { useState, useEffect } from "react";

export default function Home() {
    const [membersData, setMembersData] = useState(null);
    const URL = "https://llcctc.vercel.app/api/members"
    // const URL = "http://localhost:3000/api/members";

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

    // Render your component using clubData
    return (
        <main className="xl:max-w-screen-lg md:max-w-screen-sm md:mx-auto mx-10">
            <div>
                <Image
                    src={logollcctc}
                    width={1000}
                    height={1000}
                    className="mx-auto w-auto h-auto"
                    alt="llcctc"
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
            <div className="mt-10 grid grid-cols-12 md:grid-cols-3 gap-0 content-center">
                <hr className="relative top-[12px] border" />
                <p className="text-center col-span-10 md:col-auto border-l-2 border-r-2 rounded-md">
                    LLCC Toastmaster Club Structure
                </p>
                <hr className="relative top-[12px] border" />
            </div>
            <div className="mt-10">
                <div
                    className="w-32 mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <p className="text-center font-bold">Leader</p>
                    <Image
                        src={membersData.Leadership.Leader.img.src}
                        width={1000}
                        height={1000}
                        className="w-auto h-auto mt-5 rounded-md"
                        alt={membersData.Leadership.Leader.name}
                    />
                    <p className="mt-4 text-center">
                        {membersData.Leadership.Leader.name}
                    </p>
                </div>
                <div
                    className="grid grid-cols-2"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {membersData.Leadership.ViceLeaders.map((member) => (
                        <div className="w-auto mx-auto" key={member.name}>
                            <p className="text-center font-bold">Vice Leader</p>
                            <Image
                                src={member.img.src}
                                alt={member.name}
                                width={1000}
                                height={1000}
                                className="w-auto h-auto mt-5 rounded-md"
                            />
                            <p className="mt-4 text-center">{member.name}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 grid grid-cols-12 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center col-span-10 md:col-auto border-l-2 border-r-2 rounded-md">
                        Department of Activity
                    </p>
                    <hr className="relative top-[12px] border" />
                </div>
                <div className="mt-10">
                    <div
                        className="w-32 mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <p className="text-center font-bold">Leader</p>
                        <Image
                            src={membersData.Activity.Leader.img.src}
                            width={1000}
                            height={1000}
                            className="w-auto h-auto mt-5 rounded-md"
                            alt={membersData.Activity.Leader.name}
                        />
                        <p className="mt-4 text-center">
                            {membersData.Activity.Leader.name}
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {membersData.Activity.Members.map((member) => (
                            <div className="w-auto mx-auto" key={member.name}>
                                <Image
                                    src={member.img.src}
                                    width={1000}
                                    height={1000}
                                    className="w-auto h-auto mt-5 rounded-md"
                                    alt={member.name}
                                />
                                <p className="mt-4 text-center">
                                    {member.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-12 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center col-span-10 md:col-auto border-l-2 border-r-2 rounded-md">
                        English Speaking Department
                    </p>
                    <hr className="relative top-[12px] border" />
                </div>
                <div className="mt-10">
                    <div
                        className="w-32 mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <p className="text-center font-bold">Leader</p>
                        <Image
                            src={membersData.EnglishSpeaking.Leader.img.src}
                            width={1000}
                            height={1000}
                            className="w-auto h-auto mt-5 rounded-md"
                            alt={membersData.EnglishSpeaking.Leader.name}
                        />
                        <p className="mt-4 text-center">
                            {membersData.EnglishSpeaking.Leader.name}
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {membersData.EnglishSpeaking.Members.map((member) => (
                            <div className="w-auto mx-auto" key={member.name}>
                                <Image
                                    src={member.img.src}
                                    width={1000}
                                    height={1000}
                                    className="w-auto h-auto mt-5 rounded-md"
                                    alt={member.name}
                                />
                                <p className="mt-4 text-center">
                                    {member.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-12 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center col-span-10 md:col-auto border-l-2 border-r-2 rounded-md">
                        English Teaching Department
                    </p>
                    <hr className="relative top-[12px] border" />
                </div>
                <div className="mt-10">
                    <div
                        className="w-32 mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <p className="text-center font-bold">Leader</p>
                        <Image
                            src={membersData.EnglishTeaching.Leader.img.src}
                            width={1000}
                            height={1000}
                            className="w-auto h-auto rounded-md"
                            alt={membersData.EnglishTeaching.Leader.name}
                        />
                        <p className="mt-4 text-center">
                            {membersData.EnglishTeaching.Leader.name}
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {membersData.EnglishTeaching.Members.map((member) => (
                            <div className="w-auto mx-auto" key={member.name}>
                                <Image
                                    src={member.img.src}
                                    width={1000}
                                    height={1000}
                                    className="w-auto h-auto mt-5 rounded-md"
                                    alt={member.name}
                                />
                                <p className="mt-4 text-center">
                                    {member.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-12 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center col-span-10 md:col-auto border-l-2 border-r-2 rounded-md">
                        External relations Department
                    </p>
                    <hr className="relative top-[12px] border" />
                </div>
                <div className="mt-10">
                    <div
                        className="w-32 mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <p className="text-center font-bold">Leader</p>
                        <Image
                            src={membersData.ExternalRelations.Leader.img.src}
                            width={1000}
                            height={1000}
                            className="w-32 mt-5 rounded-md"
                            alt={membersData.ExternalRelations.Leader.name}
                        />
                        <p className="mt-4 text-center">
                            {membersData.ExternalRelations.Leader.name}
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {membersData.ExternalRelations.Members.map((member) => (
                            <div className="w-auto mx-auto" key={member.name}>
                                <Image
                                    src={member.img.src}
                                    width={1000}
                                    height={1000}
                                    className="w-32 mt-5 rounded-md"
                                    alt={member.name}
                                />
                                <p className="mt-4 text-center">
                                    {member.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
