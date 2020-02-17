import React from "react";

class ContactList extends React.Component {
  state = {
    isShowing: false
  };
  handleShowHide = () => {
    console.log("Click");
    this.setState({ isShowing: !this.state.isShowing });
  };
  handleDelete = () => {
    console.log("delete");
    this.props.delete(this.props.contact.id);
  };
  render() {
    console.log(this.props);
    let cls = this.state.isShowing ? "fas fa-sort-up" : "fas fa-sort-down";
    console.log(cls);
    return (
      <div className="card w-50 my-5 mx-auto">
        <div className="card-header">
          <h1>
            <i onClick={this.handleShowHide} className={cls}></i>{" "}
            {this.props.contact.name}
            <div className="float-right">
              <i
                onClick={this.handleDelete}
                className="fas fa-trash mr-3  "
              ></i>
              <i className="fas fa-edit"></i>
            </div>
          </h1>
        </div>
        {this.state.isShowing ? (
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">{this.props.contact.email}</li>
              <li className="list-group-item">{this.props.contact.phone}</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ContactList;
