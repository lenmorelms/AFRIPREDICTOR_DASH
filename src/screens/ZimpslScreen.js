import React from "react";
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import ZimpslMain from "../components/Zimpsl/ZimpslMain";

const ZimpslScreen = () => {
  // const keyword = match.params.keyword;
  // const pagenumber = match.params.pagenumber;
//   const { keyword, pagenumber } = useParams();
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <ZimpslMain />
      </main>
    </>
  );
};

export default ZimpslScreen;