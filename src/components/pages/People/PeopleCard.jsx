import Image from "next/image";
import React from "react";
import ShowDetail from "./ShowDetail";
import Modal from "@/components/layout/Modal";

const PeopleCard = ({ person, setOpenModal, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{ backgroundImage: `url("${person.image}")` }}
            className='people_card'
        >
            <p>{person.title}</p>
        </div>
    );
};

export default PeopleCard;
