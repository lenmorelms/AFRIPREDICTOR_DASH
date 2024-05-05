import React, { useEffect } from "react";
import Tournament from "./Tournament";
import { useDispatch, useSelector } from "react-redux";
import { listTournaments } from "../../Redux/Actions/TournamentActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const TournamentsTable = () => {
  const dispatch = useDispatch();

  const tournamentList = useSelector((state) => state.tournamentList);
  const { loading, error, tournaments } = tournamentList;

  const tournamentDelete = useSelector((state) => state.tournamentDelete);
  const { error: errorDelete, success: successDelete } = tournamentDelete;

  useEffect(() => {
    dispatch(listTournaments());
  }, [dispatch, successDelete]);
  return (
    <div className="col-md-12 col-lg-8">
      {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
      )}
      {loading ? (
            <Loading />
      ) : error ? (
            <Message variant="alert-danger">{error}</Message>
      ) : (
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Country</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Table Data */}
          {tournaments.map((tournament) => (
            <Tournament tournament={tournament} key={tournament._id} />
          ))}
        </tbody>
      </table>
   )}
    </div>
  );
};

export default TournamentsTable;