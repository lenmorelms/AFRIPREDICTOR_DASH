import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./../LoadingError/Toast";
import { deleteZimpslFixture, updateZimpslFixture } from "../../Redux/Actions/ZimpslActions";
import {  ZIMPSL_UPDATE_RESET } from "../../Redux/Constants/ZimpslConstants";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const ZimpslFixture = (props) => {
  const { zimpslfixture } = props;
  const [score1, setScore1] = useState(zimpslfixture.score1);
  const [score2, setScore2] = useState(zimpslfixture.score2);

  const dispatch = useDispatch();

  const zimpslFixtureUpdate = useSelector((state) => state.zimpslFixtureUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = zimpslFixtureUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ZIMPSL_UPDATE_RESET });
      toast.success("Fixture Updated", ToastObjects);
    } 
  }, [dispatch, zimpslfixture._id, successUpdate]);

 const addResultHandler = (id) => {
  if(score1 < 0 || score2 < 0) {
    alert("Select a score of 0 or more");
  } else if (window.confirm("Is the result correct??")) {
    const formData = {
      'fixtureId': zimpslfixture._id,
      'score1': score1,
      'score2': score2,
    };
    dispatch(updateZimpslFixture(formData))
  }

 }
  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteZimpslFixture(id));
    }
  };

  return (
    <>
    {/* <Toast /> */}
      <div className="col-md-12 col-sm-12 col-lg-6 mb-5">
        <div className="card card-product-grid shadow-sm">
                  <Toast />
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
            <div className="fixture">
                <div className="fixture-content fixture-content-img">
                    <img src="https://images-platform.99static.com//3z4_3qiTmQ6vRUjzAgZ1yulMZLM=/0x1001:1000x2001/fit-in/590x590/99designs-contests-attachments/106/106795/attachment_106795625" alt="Team logo" />
                    <h5>{zimpslfixture.team1}</h5>
                </div>
                <div className="fixture-content center-vertically">
                    <input
                        type="number"
                        className="form-control"
                        id="score1"
                        name="score1"
                        value={score1}
                        onChange={(e) => setScore1(e.target.value)}
                        // disabled
                    />
                </div>
                <div className="fixture-content center-vertically">
                    <div>
                        <p>{zimpslfixture.date}</p>
                        <h6>{zimpslfixture.kickoff}</h6>
                    </div>
                </div>
                <div className="fixture-content center-vertically">
                    <input
                        type="number"
                        className="form-control"
                        id="score2"
                        name="score2"
                        value={score2}
                        onChange={(e) => setScore2(e.target.value)}
                        // disabled
                    />
                </div>
                <div className="fixture-content fixture-content-img">
                    <img src="https://images-platform.99static.com//3z4_3qiTmQ6vRUjzAgZ1yulMZLM=/0x1001:1000x2001/fit-in/590x590/99designs-contests-attachments/106/106795/attachment_106795625" alt="Team logo" />
                    <h5>{zimpslfixture.team2}</h5>
                </div>
            </div>
          <div className="info-wrap">
            <div className="row">
              <button
                onClick={() => addResultHandler(zimpslfixture._id)}
                className="btn btn-sm btn-outline-gold p-2 pb-3 col-md-4"
                id="add_result"
                // disabled
              >
                <i className="fas fa-pen"></i>
              </button>
              <button
                onClick={() => deletehandler(zimpslfixture._id)}
                className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-4"
                id="delete_fixture"
                // disabled
              >
                <i className="fas fa-trash-alt"></i>
              </button>
              <button
                className="btn btn-sm btn-outline-gold p-2 pb-3 col-md-4"
                disabled
              >
                <b>{zimpslfixture.result === true ? "Result" : "No Result"}</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZimpslFixture;