import React from "react";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import MainTournaments from "./../components/Tournaments/MainTournaments";

const TournamentsScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainTournaments />
      </main>
    </>
  );
};

export default TournamentsScreen;