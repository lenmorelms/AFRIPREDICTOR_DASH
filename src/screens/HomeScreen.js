import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if(!userInfo) {
            navigate("/login");
        } else { setShow(true); }
    }, [userInfo, navigate]);
    return (
        <>
        {show && (
            <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
            </main>
            </>
        )}
        </>
    );
};

export default HomeScreen;