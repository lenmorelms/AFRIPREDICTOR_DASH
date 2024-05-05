import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AddZimpslMain from "../components/Zimpsl/AddZimpslMain";

const AddZimpslScreen = () => {
  return (
    <>
    <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddZimpslMain />
      </main>
    </>
  );
};

export default AddZimpslScreen;