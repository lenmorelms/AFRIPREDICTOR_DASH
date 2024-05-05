import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTournament } from "../../Redux/Actions/TournamentActions";

const Tournament = (props) => {
  const { tournament } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteTournament(id));
    }
  };

  return (
    <>
      <tr>
            <td>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </td>
            <td>#</td>
            <td>
              <b>{tournament.name}</b>
            </td>
            <td>{tournament.category}</td>
            <td>{tournament.country}</td>
            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item text-danger" to="#" onClick={() => deletehandler(tournament._id)}>
                    Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
    </>
  );
};

export default Tournament;