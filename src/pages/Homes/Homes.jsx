import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//temporary
const mockUser = { name: "jim" };
const mockHouse = { name: "the la casa house" };

const tempHomeList = [
    {id: 1, label: "house 1", memberlist: "name of people", photo: "image here"},
    {id: 2, label: "house 2", memberlist: "name of lads", photo: "image here"},
    {id: 3, label: "house 3", memberlist: "name of buds", photo: "image here"},
];

const Homes = () => {
    const navigate = useNavigate();

    const homes = ['la casa', 'the shed', 'the pit'];

    return (
        <div className="min-h-screen bg-[#f5ede3] px-8 py-8">
            <h1 className="text-3xl font-bold text-[#4e3728]">
                test display for {mockUser.name}
            </h1>
            <p>
                <ul>
                    {homes.map((home) => <li>i am a {home}</li>)}
                </ul>
            </p>
        </div>
    );
};

export default Homes;