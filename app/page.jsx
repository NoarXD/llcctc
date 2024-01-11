import Members from "@/components/Members";
import Image from "next/image";

export const metadata = {
    title: 'Home | LLCCTC',
}

export default function Home() {
    return (
        <main className="xl:max-w-screen-lg md:max-w-screen-sm md:mx-auto mx-10">
            <div>
                <Image
                    src="/logollcctc.jpg"
                    width={1000}
                    height={1000}
                    className="mx-auto w-36 h-auto mix-blend-screen"
                    alt="llcctc"
                />
                <p className="text-center mt-5 font-bold text-xl">
                    LLCC Toastmaster Club
                </p>
            </div>
            <div className="mt-2">
                <p className="text-center text-gray-300">
                    LLCC Toastmaster Club was established on 12/1/2023, led by
                    Mr Peter, with a total of 24 members.
                </p>
            </div>
            <br />
            <div>
                <p className="font-bold">Club&apos;s role:</p>
                <p>
                    LLCC Toastmaster Club serves as a space for youth to develop
                    speaking, presentation, teamwork,leadership skills, and
                    English language proficiency.
                </p>
                <br />
                <p className="font-bold">Goal:</p>
                <p>
                    We believe that LLCC Toastmasters Club will be a crucial
                    platform for developing youth potential and contributing to
                    the creation of a better society.
                </p>
                <br />
                <p className="font-bold">Future objectives:</p>
                <p>
                    The club is dedicated to assisting education in rural areas
                    through teaching and donating educational materials.
                </p>
            </div>
            {/* Club's Structure */}
            <Members />
        </main>
    );
}
