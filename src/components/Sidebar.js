import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { listTournaments } from "../Redux/Actions/TournamentActions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const tournamentList = useSelector((state) => state.tournamentList);
  const { tournaments } = tournamentList;

  useEffect(()=> {
    dispatch(listTournaments());
  }, [dispatch]);
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            {/* <img
              src="images/logo.png"
              style={{ height: "46" }}
              className="logo"
              alt="Afripredictor Dashboard"
            /> */}
            <h4>AFRIPREDICTOR</h4>
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/"
                exact={true}
              >
                <i className="icon fas fa-home"></i>
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            {tournaments.map((tournament) => (
              <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to={`/add`+tournament.name}
                exact={true}
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">{tournament.name}</span>
              </NavLink>
            </li>
            ))}
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/tournaments"
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Tournaments</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/users"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Users</span>
              </NavLink>
            </li>
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;