"use client";

import React, { useEffect } from "react";
import "./people.css";
import { GrClose } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Image from "next/image";

const ShowDetail = ({ person, setOpenModal, handleClose }) => {
    useEffect(() => {
        const body = document.querySelector("body");
    }, [person]);

    return (
        <div onClick={handleClose} className='show_details'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='show_details_container'
            >
                <div className='details_heading'>
                    <GrClose onClick={handleClose} />
                    <span>Group Info</span>
                </div>

                <div className='profile'>
                    <div className='profile_image'>
                        <Image src={person.image} fill alt='' />
                    </div>
                    <div className='profile_detail'>
                        <h2>{person?.name}</h2>
                        <p>
                            <span>Photos</span> <span>.</span>{" "}
                            <span>{person.photos.length} items</span>
                        </p>
                    </div>
                </div>

                <div className='description'>
                    <h5>Descriptions</h5>
                    <p>{person.description}</p>
                </div>

                <div className='mute'>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                    >
                        <MdOutlineNotificationsNone />
                        <span>Mute notifications</span>
                    </div>
                    <div className='switch'>
                        <span className='dot'></span>
                        <GrClose style={{ color: "wheat" }} size={10} />
                    </div>
                </div>

                <div className='photos_section'>
                    <div className='photos_container'>
                        <p>
                            <span>Photos</span> <span>.</span>
                            <span>{person.photos.length} items</span>
                        </p>
                        <div className='photos'>
                            {person?.photos?.map((photo, key) => (
                                <div
                                    key={key}
                                    style={{
                                        backgroundImage: `url("${photo}")`,
                                    }}
                                    className='img'
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='delete'>
                    <RiDeleteBin6Line />
                    <span>Delete Person</span>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;
