'use client'
import {Navbar as NavbarNext, Link, NavbarContent, NavbarItem, NavbarBrand } from "@nextui-org/react"
import {Link as ScrollLink} from 'react-scroll'
import Image from "next/image"
import { useEffect, useState } from "react";

const Navbar = () => {
    
    const [currentSection, setCurrentSection] = useState<string | null>(null);

    useEffect(() => {
      const handleScroll = () => {
        const scrolledSections = document.querySelectorAll('[data-spy="section"]');
        let current = null;
  
        scrolledSections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
          }
        });
  
        setCurrentSection(current);
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    return(
        <NavbarNext maxWidth="full"  className="border-b-2 border-blue-500 border-opacity-20 rounded-sm bg- ">
            <NavbarBrand className="hidden md:flex">
                <p className="font-bold text-inherit hidden md:block font-mono">Uriel Campos</p>
            </NavbarBrand>
            <NavbarContent className="flex gap-6 text-lg" justify="center">
            <NavbarItem>
                <Link as={ScrollLink}  to="#about" smooth={true} duration={600} color="foreground" className="text-white " href="#">
                About me
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link as={ScrollLink} id="projects" to="#projects" smooth={true} duration={600} color="foreground" className={currentSection === "projects" ? "text-blue-400" : "text-white"} href="#projects">
                    Works
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link as={ScrollLink}  to="#skills" smooth={true} duration={600} href="#" className="text-white" aria-current="page">
                    Skills
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link as={ScrollLink}  to="#contact" smooth={true} duration={600} color="foreground" className="text-white" href="#">
                    Contact me
                </Link>
            </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden md:block justify-end"/>
      </NavbarNext>
    )
}

export default Navbar