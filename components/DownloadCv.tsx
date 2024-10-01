import { Image, Link } from "@nextui-org/react"

const DownloadCv = () => {


    return (
        <div className="flex justify-center p-4" >
            <div className="flex flex-col bg-gray-800 bg-opacity-50 rounded-3xl p-4 gap-6">
                <Link target="_blank" href="/Resume.pdf" >
                    <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full">
                        My resume
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default DownloadCv