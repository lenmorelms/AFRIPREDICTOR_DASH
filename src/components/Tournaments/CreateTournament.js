import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TOURNAMENT_CREATE_RESET } from "../../Redux/Constants/TournamentConstants";
import { createTournamentItem } from "../../Redux/Actions/TournamentActions";
import { listTournaments } from "../../Redux/Actions/TournamentActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const CreateTournament = () => {
  const [newTournament, setNewTournament] = useState({
    name: '',
    category: '',
    country: ''
  });
  const dispatch = useDispatch();

  const tournamentCreate = useSelector((state) => state.tournamentCreate);
  const { loading, error, tournament } = tournamentCreate;

  useEffect(() => {
    if(tournament) {
      toast.success("Tournament Added", ToastObjects);
      dispatch({ type: TOURNAMENT_CREATE_RESET });
      setNewTournament({
        name: '',
        category: '',
        country: ''
      });
      // Re-render category list
      dispatch(listTournaments());
    }
  }, [tournament, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(createTournamentItem(newTournament.name, newTournament.category, newTournament.country));

  }

  const handleChange = (e) => {
    setNewTournament({...newTournament, [e.target.name]: e.target.value});
  }

  return (
    <div className="col-md-12 col-lg-4">
      <Toast />
      <form enctype="multipart/form-data" onSubmit={submitHandler}>
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <div className="mb-4">
          <label htmlFor="tournament_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="tournament_name"
            name="name"
            required
            value={newTournament.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
            <label htmlFor="tournament_category" className="form-label">
                Category
            </label>
            <select 
                className="form-control py-3"
                id="tournament_category"
                name="category"
                required
                value={newTournament.category}
                onChange={handleChange}
            >
                <option value="Football">Football</option>
                <option value="Cricket">Cricket</option>
                <option value="Rugby">Rugby</option>
            </select>
        </div>
        <div className="mb-4">
          <label htmlFor="tournament_country" className="form-label">
            Country
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="tournament_country"
            name="country"
            required
            value={newTournament.country}
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-gold py-3">Create Tournament</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTournament;