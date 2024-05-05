import React, { useState, useEffect } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editUser,
  updateUser,
} from "./../../Redux/Actions/UserActions";
import { USER_UPDATE_RESET } from "../../Redux/Constants/UserConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditUserMain = (props) => {
  const { userId } = props;
  const [editedUser, setEditedUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const dispatch = useDispatch();

  const userEdit = useSelector((state) => state.userEdit);
  const { loading, error, user } = userEdit;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      toast.success("User Updated", ToastObjects);
    } else {
      if (!user.username || user._id !== userId) {
        dispatch(editUser(userId));
      } else {
        setEditedUser({
          username: user.username,
          email: user.email,
          password: '',
          confirmPassword: ''
        });
      }
    }
  }, [user, dispatch, userId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(editedUser.password !== editedUser.confirmPassword ) {
        alert("The two passwords don't match");
    } else {
        const formData = {
            '_id': userId,
            'username': editedUser.username,
            'email': editedUser.email,
            'password': editedUser.password,
        };
        dispatch(updateUser(formData));
    }
  };
  // onChange events
  const handleChange = (e) => {
    setEditedUser({...editedUser, [e.target.name]: e.target.value});
  }

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form enctype="multipart/form-data" onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/users" className="btn btn-black text-white">
              Go to users
            </Link>
            <h2 className="content-title">Update Administrator</h2>
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
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="first_name" className="form-label">
                          User Name
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="username"
                          name="username"
                          required
                          value={editedUser.username}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="first_name" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Type here"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                          value={editedUser.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="first_name" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Type here"
                          className="form-control"
                          id="password"
                          name="password"
                          required
                          value={editedUser.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="first_name" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          placeholder="Type here"
                          className="form-control"
                          id="confirm_password"
                          name="confirmPassword"
                          required
                          value={editedUser.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditUserMain;