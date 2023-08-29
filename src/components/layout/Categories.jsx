"use client";
import { categories } from "@/lib/dummyData";
import Link from "next/link";
import React, { useState } from "react";

const Categories = () => {
    const [currentCategory, setCurrentCategory] = useState("People");
    return (
        <div className='category_container'>
            <h5>Categories</h5>
            <div className='categories'>
                {categories.map((category, key) => (
                    <Link
                        key={key}
                        className={`${
                            currentCategory === category.title ? "active" : ""
                        }`}
                        href={category.link}
                    >
                        {category.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
