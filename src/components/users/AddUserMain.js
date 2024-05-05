import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { USER_CREATE_RESET } from "../../Redux/Constants/UserConstants";
import { createUser } from "./../../Redux/Actions/UserActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const AddUserMain = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    isAdmin: true
  });
  const dispatch = useDispatch();

  const userCreate = useSelector((state) => state.userCreate);
  const { loading, error, user } = userCreate;

  useEffect(() => {
    if(user) {
      toast.success("User Created", ToastObjects);
      dispatch({ type: USER_CREATE_RESET });
      setNewUser({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAdmin: true
      });
    }
  }, [user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(newUser.password !== newUser.confirmPassword) {
        alert("The two passwords don't match");
    } else {
        const formData = new FormData();
        formData.append('username', newUser.username);
        formData.append('email', newUser.email);
        formData.append('password', newUser.password);
        formData.append('isAdmin', newUser.isAdmin);
        dispatch(createUser(newUser));
    }
  }
  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
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
            <h2 className="content-title">Create Administrator</h2>
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
                    <label htmlFor="product_title" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="username"
                      required
                      name="username"
                      value={newUser.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Type here"
                      className="form-control"
                      id="email"
                      required
                      name="email"
                      value={newUser.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder=""
                      className="form-control"
                      id="password"
                      required
                      name="password"
                      value={newUser.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder=""
                      className="form-control"
                      id="confirm_password"
                      required
                      name="confirmPassword"
                      value={newUser.confirmPassword}
                      onChange={handleChange}
                    />
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

export default AddUserMain;