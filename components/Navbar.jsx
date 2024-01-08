"use client";
import React, { useState } from "react";
import Image from "next/image";
import logollcctc from '../public/logollcctc.jpg'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";

export default function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItem = ["Home", "Announcement", "TCTalk", "Activity"];
    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" className="font-bold text-white">LLCC Toastmaster Club</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end" className="hidden md:inline-flex">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/Announcement">
                        Announcement
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="TCTalk">
                        TCTalk
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="Activity">
                        Activity
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItem.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-white"
                            href={item === "Home" ? "/" : item}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
