import { NextResponse } from "next/server";
import personImg from "../../../public/person.png";

const members = {
    Leadership: {
        Leader: { name: "Mr Johnny", img: "/members/MrJohnny.jpg" },
        ViceLeaders: [
            { name: "Mr Khamthong", img: "/members/MrKhamthong.jpg" },
            { name: "Miss Manida", img: "/members/MissManida.jpg" },
        ],
    },
    Activity: {
        Leader: { name: "Mr Khammoun", img: "/members/MrKhammoun.jpg" },
        Members: [
            { name: "Mr Tonkar", img: "/members/MrTonkar.jpg" },
            { name: "Mr Khamxay", img: "/members/MrKhamxay.jpg" },
            { name: "Miss Nouphaluck", img: "/members/MissNouphaluck.jpg" },
        ],
    },
    EnglishSpeaking: {
        Leader: { name: "Miss Anna", img: personImg },
        Members: [
            { name: "Miss Panda", img: "/members/MissPanda.jpg" },
            { name: "Mr Lidsamai", img: personImg },
            { name: "Miss Pinky", img: personImg },
            { name: "Miss Souvanhny", img: "/members/MissSouvanhny.jpg" },
        ],
    },
    EnglishTeaching: {
        Leader: { name: "Mr Sonsay", img: personImg },
        Members: [
            { name: "Mr Saysamone", img: personImg },
            { name: "Mr Yang Kong" , img: personImg },
            { name: "Mr Dala", img: personImg },
            { name: "Mr Ded", img: personImg },
            { name: "Mr Sayson", img: "/members/MrSayson.jpg" },
        ],
    },
    ExternalRelations: {
        Leader: { name: "Miss Nuttaly", img: "/members/MissNuttaly.jpg" },
        Members: [
            { name: "Miss Namwarn", img: "/members/MissNamwarn.jpg" },
            { name: "Miss Ulin", img: personImg },
            { name: "Mr Alino", img: personImg },
        ],
    },
};
export async function GET(request) {
    return NextResponse.json(members);
}
