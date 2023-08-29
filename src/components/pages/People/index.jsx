"use client";
import React, { useState } from "react";
import "./people.css";
import { people } from "@/lib/dummyData";
import PeopleCard from "./PeopleCard";
import ShowDetail from "./ShowDetail";
import Modal from "@/components/layout/Modal";
const People = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentPerson, setCurrentPerson] = useState(0);

    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div className='people'>
            <div className='section_heading'>
                <div className='section_heading_left'>
                    <h2>Staff HeadShots</h2>
                    <span>12 results</span>
                </div>
                <div className='section_heading_right'>
                    <select name='' id=''>
                        <option className='option' value=''>
                            sorted by{" "}
                            <span className='option_span'>Date Added</span>
                        </option>
                    </select>
                </div>
            </div>
            <div className='people_box'>
                {people.map((person, key) => (
                    <PeopleCard
                        onClick={() => {
                            setCurrentPerson(key);
                            setOpenModal(true);
                        }}
                        setOpenModal={setOpenModal}
                        handleClose={handleClose}
                        openModal={openModal}
                        key={key}
                        person={person}
                    />
                ))}
            </div>
            {openModal && (
                <Modal>
                    <ShowDetail
                        handleClose={handleClose}
                        setOpenModal={setOpenModal}
                        person={people[currentPerson]}
                    />
                </Modal>
            )}
        </div>
    );
};

export default People;
