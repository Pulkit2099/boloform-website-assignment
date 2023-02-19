import React from 'react'
import "../src/Styles/Nav.css"
import logo from "./Styles/logo.svg"
const Nav = () => {
    return (
        <>


            
            <div className="NavBar_navbar_container__BjO6p w-full h-full flex flex-row items-center"><div className="NavBar_navbar_item_logo__LXssY "><a className="flex flex-row items-center text-2xl font-bold" href="/"><img alt="" src={logo} width={500} height={500} decoding="async" data-nimg={1} className="h-32 w-32" loading="lazy" style={{ color: 'transparent' }} /></a></div><div className="NavBar_navbar_items__kEcOH text-sm flex"><span className="mr-8 font-semibold cursor-pointer flex flex-row items-center">Products <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="text-xl ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg></span><span target="_blank" rel="noreferrer" className="mr-10 font-semibold cursor-pointer ">Pricing</span><a href="http://approval-docs.boloforms.com/" target="_blank" rel="noreferrer" className="mr-8 font-semibold cursor-pointer">Guides</a><span target="_blank" rel="noreferrer" className="mr-10 font-semibold cursor-pointer ">Templates</span></div><div className="NavBar_navbar_item_buttons__2PBR6 ml-auto flex justify-center items-center"><button className="NavBar_navbar_item_primary_button__bBWl2 mr-4 text-[#915bff] hover:bg-[#a97dff] hover:text-white"><span>Install Now</span></button><button className="NavBar_navbar_item_primary_button__bBWl2 bg-[#915bff] text-white hover:opacity-90 "><span>BoloForms Premium</span></button></div><div className="NavBar_navbar_toggle_icon__XHgcE"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" style={{ fontSize: '24px' }} className="cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" /></svg></div></div>


        </>


    )
}

export default Nav
