import React from "react";
import CreateTournament from "./CreateTournament";
import TournamentsTable from "./TournamentsTable";

const MainTournaments = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Tournaments</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create tournament */}
            <CreateTournament />
            {/* Tournaments table */}
            <TournamentsTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTournaments;