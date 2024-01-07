import { NextResponse } from "next/server";
import personImg from "../../../public/person.png";
import MrTonkar from "../../../public/members/MrTonkar.jpg"
import MissManida from "../../../public/members/MissManida.jpg"
import MissNamwarn from "../../../public/members/MissNamwarn.jpg"
import MissNouphaluck from "../../../public/members/MissNouphaluck.jpg"
import MissNuttaly from "../../../public/members/MissNuttaly.jpg"
import MissPanda from "../../../public/members/MissPanda.jpg"
import MrKhamxay from "../../../public/members/MrKhamxay.jpg"
import MrSayson from "../../../public/members/MrSayson.jpg"
// import MrJohnny from "../../../public/members/MrJohnny.jpg"
import MrKhammoun from "../../../public/members/MrKhammoun.jpg"
import MrKhamthong from "../../../public/members/MrKhamthong.jpg"
const members = {
    Leadership: {
        Leader: { name: "Mr Johnny", img: "/members/MrJohnny.jpg" },
        ViceLeaders: [
            { name: "Mr Khamthong", img: MrKhamthong },
            { name: "Miss Manida", img: MissManida },
        ],
    },
    Activity: {
        Leader: { name: "Mr Khammoun", img: MrKhammoun },
        Members: [
            { name: "Mr Tonkar", img: MrTonkar },
            { name: "Mr Khamxay", img: MrKhamxay },
            { name: "Miss Nouphaluck", img: MissNouphaluck },
        ],
    },
    EnglishSpeaking: {
        Leader: { name: "Miss Anna", img: personImg },
        Members: [
            { name: "Miss Panda", img: MissPanda },
            { name: "Mr Lidsamai", img: personImg },
            { name: "Miss Pinky", img: personImg },
        ],
    },
    EnglishTeaching: {
        Leader: { name: "Mr Sonsay", img: personImg },
        Members: [
            { name: "Mr Saysamone", img: personImg },
            { name: "Mr Yang Kong" , img: personImg },
            { name: "Mr Dala", img: personImg },
            { name: "Mr Ded", img: personImg },
            { name: "Mr Sayson", img: MrSayson },
        ],
    },
    ExternalRelations: {
        Leader: { name: "Miss Nuttaly", img: MissNuttaly },
        Members: [
            { name: "Miss Namwarn", img: MissNamwarn },
            { name: "Miss Ulin", img: personImg },
            { name: "Mr Alino", img: personImg },
        ],
    },
};
export async function GET(request) {
    return NextResponse.json(members);
}
