import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="card w-50 mx-auto my-5 ">
        <div className="card-header">
          <h1>Contact Form</h1>
        </div>
        <div className="card-body">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                placeholder="Phone"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary btn-sm" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
