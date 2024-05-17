import { HomeNavbarProvider } from "@/components/contexts/HomeNavBarContext";
import HomeNavbar from "@/components/home/HomeNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <main>
        <HomeNavbarProvider>
            <HomeNavbar />
            {children}
        </HomeNavbarProvider>
    </main>
}