"use client";
import {
  Navbar as NavbarNext,
  Link,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  Button,
} from "@nextui-org/react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledSections = document.querySelectorAll(
        '[data-spy="section"]'
      );
      let current = null;

      scrolledSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
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

  return (
    <NavbarNext maxWidth="full" className="border-b-2 rounded-sm">
      <NavbarBrand className="hidden md:flex">
        <p className="font-bold text-inherit hidden md:block font-mono">
          Uriel Campos
        </p>
      </NavbarBrand>
      <NavbarContent className="flex gap-6 text-lg" justify="center">
        <NavbarItem>
          <Link
            as={ScrollLink}
            to="#about"
            smooth={true}
            duration={600}
            color="foreground"
            href="#"
          >
            About me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={ScrollLink}
            id="projects"
            to="#projects"
            smooth={true}
            duration={600}
            color="foreground"
            className={
              currentSection === "projects"
                ? "text-blue-400"
                : "text-foreground"
            }
            href="#projects"
          >
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={ScrollLink}
            to="#skills"
            smooth={true}
            duration={600}
            href="#"
            aria-current="page"
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={ScrollLink}
            to="#contact"
            smooth={true}
            duration={600}
            color="foreground"
            href="#"
          >
            Contact me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="text-foreground justify-end">
        <Button isIconOnly onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </>
          )}
        </Button>
      </NavbarContent>
    </NavbarNext>
  );
};

export default Navbar;
