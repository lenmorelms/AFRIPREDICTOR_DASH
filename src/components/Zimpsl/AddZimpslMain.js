import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ZIMPSL_CREATE_RESET } from "../../Redux/Constants/ZimpslConstants";
import { createZimpslFixture } from "../../Redux/Actions/ZimpslActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Teams from "../Teams";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddZimpslMain = () => {
  const [newData, setNewData] = useState({
    date: '',
    gameweek: '',
    kickoff: '',
    team1: '',
    team2: ''
  });
  const dispatch = useDispatch();

  const zimpslFixturesCreate = useSelector((state) => state.zimpslFixturesCreate);
  const { loading, error, zimpslfixture } = zimpslFixturesCreate;

  useEffect(() => {
    if(zimpslfixture) {
      toast.success("Fixture Created", ToastObjects);
      dispatch({ type: ZIMPSL_CREATE_RESET });
      setNewData({
        date: '',
        gameweek: '',
        kickoff: '',
        team1: '',
        team2: ''
      });
    }
  }, [zimpslfixture, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('date', newData.date);
    formData.append('gameweek', newData.gameweek);
    formData.append('kickoff', newData.kickoff);
    formData.append('team1', newData.team1);
    formData.append('team2', newData.team2);
    const date = new Date();
    if(newData.date < date.toISOString().split('T')[0] || newData.date === date.toISOString().split('T')[0]) {
      alert("Fixture date should be in the future");
    } else if(newData.team1 === newData.team2) {
      alert("Teams should be different");
    } else {
      dispatch(createZimpslFixture(newData));
    }
  }
  const handleChange = (e) => {
    setNewData({...newData, [e.target.name]: e.target.value});
  }
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>    
      <form enctype="multipart/form-data" onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/zimpsl" className="btn btn-black text-white">
              Go to fixtures
            </Link>
            <h2 className="content-title">Create Fixture</h2>
            <div>
              <button type="submit" className="btn btn-gold">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      placeholder="Type here"
                      className="form-control"
                      id="date"
                      required
                      name="date"
                      value={newData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="gameweek" className="form-label">
                      Gameweek
                    </label>
                    <input
                      type="number"
                      placeholder="Type here"
                      className="form-control"
                      id="gameweek"
                      required
                      name="gameweek"
                      min="1"
                      max="34"
                      value={newData.gameweek}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="kickoff" className="form-label">
                      Kickoff
                    </label>
                    <input
                      type="time"
                      placeholder=""
                      className="form-control"
                      id="kickoff"
                      required
                      name="kickoff"
                      value={newData.kickoff}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="team1" className="form-label">
                      Team1
                    </label>
                    <select
                      className="form-control"
                      id="team1"
                      required
                      name="team1"
                      value={newData.team1}
                      onChange={handleChange}
                    >
                        <option value="" selected></option>
                        {Teams.map(e => <option value={e.name}>{e.name}</option>)}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="team2" className="form-label">
                      Team2
                    </label>
                    <select
                      className="form-control"
                      id="team2"
                      required
                      name="team2"
                      value={newData.team2}
                      onChange={handleChange}
                    >
                        <option value="" selected></option>
                        {Teams.map(e => <option value={e.name}>{e.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddZimpslMain;