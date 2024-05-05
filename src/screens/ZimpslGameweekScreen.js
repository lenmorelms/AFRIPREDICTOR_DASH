import React from "react";
import { useParams } from 'react-router-dom';
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import ZimpslGameweekMain from "../components/Zimpsl/ZimpslGameweekMain";

const ZimpslGameweekScreen = () => {
  // const keyword = match.params.keyword;
  // const pagenumber = match.params.pagenumber;
  const { gameweek } = useParams();
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <ZimpslGameweekMain gameweek={gameweek} />
      </main>
    </>
  );
};

export default ZimpslGameweekScreen;