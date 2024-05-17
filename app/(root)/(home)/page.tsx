import HomeNavbar from "@/components/home/HomeNavbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";
import HomePage from "./HomePage";

export default function Page() {
    return <main className="w-full flex flex-col overflow-hidden">
        <HomePage />
    </main>
}