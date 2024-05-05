import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Toast from "../LoadingError/Toast";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { listZimpsl, listZimpslGameweeks } from "../../Redux/Actions/ZimpslActions";
import ZimpslFixture from "./ZimpslFixture";
import ZimpslGameweek from "./ZimpslGameweek";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const ZimpslMain = () => {
    const dispatch = useDispatch();
    const zimpslFixturesList = useSelector((state) => state.zimpslFixturesList);
    const { loading, error, zimpslfixtures } = zimpslFixturesList;

    const zimpslGameweeks = useSelector((state) => state.zimpslGameweeks);
    const { error: errorGameweek, zimpslgameweeks } = zimpslGameweeks;

    const zimpslFixtureDelete = useSelector((state) => state.zimpslFixtureDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = zimpslFixtureDelete;

    useEffect(() => {
        if(successDelete) {
          toast.success("Fixture Deleted", ToastObjects);
        }
        dispatch(listZimpsl());
        dispatch(listZimpslGameweeks());
    }, [dispatch, successDelete]);

    return (
    <>
    <Toast />
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">ZIMPSL</h2>
        <div>
          <Link to="/addzimpsl" className="btn btn-gold">
            Create Fixture
          </Link>
        </div>
      </div>
      <div className="card-body fixtures-section">
        <div className="fixture">
          <b className="center-vertically">GAMEWEEKS:</b>
          {errorGameweek ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            zimpslgameweeks && zimpslgameweeks.map((zimpslgameweek) => (
              <ZimpslGameweek zimpslgameweek={zimpslgameweek} />
            ))
          )}
        </div>
      { loadingDelete ? (
        <Loading />
        ) : errorDelete && (
        <Message variant="alert-danger">{errorDelete}</Message>
      )}
      {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Fixtures */}
              {zimpslfixtures && zimpslfixtures.map((zimpslfixture) => (
                <ZimpslFixture zimpslfixture={zimpslfixture} key={zimpslfixture._id} />
              ))}
            </div>
          )}
      </div>
    </section>
    </>
    );
};

export default ZimpslMain;