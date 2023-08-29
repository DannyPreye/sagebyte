import React from "react";

import { VscCloudUpload } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import SearchFilter from "./SearchFilter";
const Header = () => {
    return (
        <>
            <header className='container header-container'>
                <div className={"header"}>
                    <h3 className={"logo_text"}>Vault</h3>
                    <div className='header_icon_container'>
                        <HeaderIcon Icon={HiOutlineMail} />
                        <HeaderIcon Icon={VscCloudUpload} />
                        <div className='user_icon'>{/* <Image /> */}</div>
                    </div>
                </div>
            </header>
            <div className='container'>
                <SearchFilter />
            </div>
        </>
    );
};

const HeaderIcon = ({ Icon }) => {
    return (
        <div className={"header_icon"}>
            <Icon />
        </div>
    );
};

export default Header;
