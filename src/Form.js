// import { useForm, ValidationError } from "@formspree/react";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  //   const [state, handleSubmit] = useForm("xeqnnwzy");
  const [state, setState] = useState({
    fullName: "",
    email: "",
    number: null,
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await localStorage.setItem("data", JSON.stringify(state));
    alert("Thanks for submitting!!");
    navigate("/data");
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  required
                  placeholder="Enter your name"
                  value={state.name}
                  onChange={(e) =>
                    setState((prev) => ({ ...prev, fullName: e.target.value }))
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Phone{" "}
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="number"
                  required
                  placeholder="mobile number"
                  value={state.number}
                  onChange={(e) =>
                    setState((prev) => ({ ...prev, number: e.target.value }))
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={state.email}
                  onChange={(e) =>
                    setState((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                {/* <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                /> */}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  required
                  rows="3"
                  name="message"
                  onChange={(e) =>
                    setState((prev) => ({ ...prev, message: e.target.value }))
                  }
                ></textarea>
                {/* <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                /> */}
              </div>
              <div className="col-12">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
