'use client'
import { Image, Spacer } from "@nextui-org/react"
import NextImage from "next/image"

const Profile = () => {

    return (
            <div className="w-full flex justify-center items-center h-full">
                <div className="flex flex-col justify-center items-center p-3 rounded-lg w-2/3">
                        <span className="flex justify-center">
                            <h3 className="relative mt-10 md:mt-0 py-1 w-[max-content] text-center font-mono text-4xl
                                before:absolute before:inset-0 before:animate-typewriter
                                before:bg-black
                                after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
                                after:bg-white">Hello there 👋</h3>
                        </span>
                    <div className="flex flex-col justify-center items-center  gap-10">
                            <Image as={NextImage} alt="profile" src="/me.png" className="rounded-full shadow-sm mt-4 size-4/4 " width={300} height={300}></Image>
                        <div className="flex flex-col justify-center text-center">
                            <h1 className="text-2xl font-mono">Uriel Campos</h1>
                            <h2 className=" font-mono text-blue-400">FullStack Developer</h2>
                            <Spacer y={6}></Spacer>
                            <h4 className="text-xl font-mono">Creating scalable, fast, and secure web applications.
                                I am a dedicated Fullstack Developer, specializing in backend.
                            </h4>
                            <Spacer y={3}></Spacer>
                            <p className="text-blue-400"> 
                                Proficient in technologies like Node.js, Python, SQL and MongoDB.
                                Experienced using Firebase services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Profile