import { NextResponse } from "next/server";
import personImg from "../../../public/person.png";
const members = {
    "Department of Leadership": {
        Leader: [{ name: "Mr johnny" }, { img: personImg }],
        "Vice Leaders": ["Mr Khamthong", "Miss Manida"],
    },
    "Department of Activity": {
        Leader: "Mr Khammoun",
        Members: ["Mr Tonkar", "Mr Khamxay", "Miss Nouphaluck"],
    },
    "Department of English Speaking": {
        Leader: "Miss Anna",
        Members: ["Miss Panda", "Mr Lidsamai", "Miss Pinky"],
    },
    "Department of English Teaching": {
        Leader: "Mr Sonsay",
        Members: [
            "Mr Saysamone",
            "Mr Yang Kong",
            "Mr Dala",
            "Mr Ded",
            "Mr Sayson",
        ],
    },
    "Department of External Relations": {
        Leader: "Miss Nuttaly",
        Members: ["Miss Namwarn", "Miss Ulin", "Mr Alino"],
    },
};
export async function GET(request) {
    return NextResponse.json(members);
}
