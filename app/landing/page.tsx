import Image from "next/image";
import ldg from "@/public/landing.jpeg"
import Link from "next/link";

export default async function Landing() {
    return (
        <div className="flex-col md:flex md:w-[100%]">
            <Image src={ldg} alt="landingPageImage" width={1000} height={1000} className=" h-[80vh] w-[100%] md:h-[78vh] md:w-[50%] object-cover"/>
            <div className="hidden md:flex md:h-[78vh] md:w-[50%] items-center justify-center">
                <h1>Update your style</h1>
            </div>
            <Link href={"/"}><button className="md:hidden absolute top-1/2 right-1/3 py-2 w-1/3 bg-white text-black shadow-[rgba(0,_0,_0,_0.5)_0px_30px_90px]">Shop Now</button></Link>
        </div>
    )
}