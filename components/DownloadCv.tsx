import { Button, Image, Link } from "@nextui-org/react"

const DownloadCv = () => {


    return (
        <div className="flex justify-center p-4" >
            <div className="flex flex-col bg-card border rounded-3xl p-4 gap-6">
                <Link target="_blank" href="/Resume.pdf" >
                    <Button className="bg-primary hover:bg-opacity-90 text-primary-foreground font-bold py-2 px-4 rounded-">
                        My resume
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default DownloadCv