import React from "react";
import "./layout.css";
import Header from "./Header";
import Categories from "./Categories";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='container main '>
                <Categories />
                {children}
            </main>
        </>
    );
};

export default Layout;
