'use client'

import { Image, Tooltip } from "@nextui-org/react"
import NextImage from "next/image"

const Skills = () => {

    const skills = [
        {
            name: "HTML",
            image: "/html.png"
        },
        {
            name: "CSS",
            image: "/css.png"
        },
        {
            name: "JavaScript",
            image: "/js.png"
        },
        {
            name: "TypeScript",
            image: "/ts.png"
        },
        {
            name: "NextJS",
            image: "/nextjs.png"
        },
        {
            name: "Firebase",
            image: "/firebase.png"
        },
        {
            name: "PostgreSQL",
            image: "/postgresql.png"
        },
        {
            name: "ReduxToolkit",
            image: "/redux.png"
        },
        {
            name: "GitHub",
            image: "/github.png"
        },
        {
            name: "NodeJS",
            image: "/nodejs.png"
        },
        {
            name: "Tailwind",
            image: "/tailwind.svg"
        },
        {
            name: "MongoDB",
            image: "/mongodb.svg"
        },
        {
            name: "Python",
            image: "/python.svg"
        },
        {
            name: "Sequelize",
            image: "/sequelize.svg"
        }
    ]
    
    return(
        <div className="w-full flex flex-col justify-center items-center h-3/4 p-5">
            <h1 className="text-3xl font-mono p-16">Skills</h1>
            <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap justify-center gap-10 
             bg-gray-800 bg-opacity-50 rounded-3xl p-10 md:w-2/3">
                {
                    skills.map(skill => (
                        <div className=" cursor-pointer hover:scale-110" key={skill.name}>
                            <Tooltip content={skill.name} color="secondary" className="capitalize" >
                                <Image as={NextImage} src={skill.image} alt="skill" width={100} height={100}></Image>
                            </Tooltip>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Skills