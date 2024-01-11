"use client"
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Image from "next/image";

export default function Members() {
    const [membersData, setMembersData] = useState(null);
    const URL = "https://llcctoastmasterclub.vercel.app/api/members"
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

    return (
        membersData === null ? <Loading /> :
        <>
            <div className="mt-10 grid grid-cols-12 md:grid-cols-3 gap-0 content-center">
                <hr className="relative top-[12px] border" />
                <p className="text-center font-bold col-span-10 md:col-auto border-l-2 border-r-2 rounded-full">
                    Club&apos;s Structure
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
                        src={membersData.Leadership.Leader.img}
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
                        <div className="w-32 mx-auto" key={member.name}>
                            <p className="text-center font-bold">Vice Leader</p>
                            <Image
                                src={member.img}
                                alt={member.name}
                                width={1000}
                                height={1000}
                                className="w-auto h-auto mt-5 rounded-md"
                            />
                            <p className="mt-4 text-center">{member.name}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 grid grid-cols-6 md:grid-cols-3 gap-0 content-center">
                    <hr className="relative top-[12px] border" />
                    <p className="text-center font-bold col-span-4 md:col-auto border-l-2 border-r-2 rounded-full">
                        Activity Department
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
                            src={membersData.Activity.Leader.img}
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
                            <div className="w-32 mx-auto" key={member.name}>
                                <Image
                                    src={member.img}
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
                    <p className="text-center font-bold col-span-10 md:col-auto border-l-2 border-r-2 rounded-full">
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
                            src={membersData.EnglishSpeaking.Leader.img}
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
                            <div className="w-32 mx-auto" key={member.name}>
                                <Image
                                    src={member.img}
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
                    <p className="text-center font-bold col-span-10 md:col-auto border-l-2 border-r-2 rounded-full">
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
                            src={membersData.EnglishTeaching.Leader.img}
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
                            <div className="w-32 mx-auto" key={member.name}>
                                <Image
                                    src={member.img}
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
                    <p className="text-center font-bold col-span-10 md:col-auto border-l-2 border-r-2 rounded-full">
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
                            src={membersData.ExternalRelations.Leader.img}
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
                                    src={member.img}
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
        </>
    );
}
