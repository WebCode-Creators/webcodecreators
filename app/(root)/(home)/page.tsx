import HomeNavbar from "@/components/home/HomeNavbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return <main>
        <HomeNavbar />
        {/* <div className="min-h-[100vh] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-center h-full mt-[9rem]">
                <h2 className="text-[45px] max-w-[800px] text-center font-extrabold title">Crafting Digital Excellence through WebCodeCreators</h2>
                <p className="text-primary font-medium">Where Vision Meets Innovation</p>
                <div className="flex gap-3 mt-5">
                    <Link className='flex px-4 py-3 rounded-full text-muted border-[0.02rem] border-muted hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Our Works</Link>
                    <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-primary to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Get a Quote</Link>
                </div>
            </div>
            <Image src={'/assets/headerimg.png'} width={500} className="h-[200px] object-top object-cover overflow-hidden" height={200} alt="" />
        </div> */}
        <BackgroundGradientAnimation className="min-h-[100vh] bg-black/90 flex flex-col items-center justify-between" >
            <div className="flex flex-col items-center justify-center h-full mt-[9rem]">
                <h2 className="text-[45px] max-w-[800px] text-center font-extrabold title">Crafting Digital Excellence through WebCodeCreators</h2>
                <p className="text-primary font-medium">Where Vision Meets Innovation</p>
                <div className="flex gap-3 mt-5">
                    <Link className='flex px-4 py-3 rounded-full text-muted border-[0.02rem] border-muted hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Our Works</Link>
                    <Link className='flex px-4 py-3 rounded-full bg-gradient-to-t from-primary to-violet-800 hover:scale-105 transition-all shining-button overflow-hidden relative ' href={'/'}>Get a Quote</Link>
                </div>
            </div>
            <Image src={'/assets/headerimg.png'} width={500} className="h-[200px] object-top object-cover overflow-hidden" height={200} alt="" />
        </BackgroundGradientAnimation>
    </main>
}