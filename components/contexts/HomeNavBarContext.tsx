'use client'
import React, { useState } from "react";

const HomeNavbarContext = React.createContext({
    isDisplayed: false,
    light:false,
    togglelight: (main:boolean) => {},
    openNavbar: () => {},
    onClose: ()=>{}
});
const HomeNavbarProvider = ({children}:{children:React.ReactNode}) =>{

    const [open, setopen] = useState(false)
    const [lights, setlight] = useState(true)
    return <HomeNavbarContext.Provider value={{
        isDisplayed :open,
        light: lights,
        togglelight: (light:boolean) => setlight(light),
        openNavbar: () => setopen((prev)=>!prev),
        onClose: ()=> setopen(false)
    }}>
        {children}
    </HomeNavbarContext.Provider>
}
export { HomeNavbarContext , HomeNavbarProvider };

