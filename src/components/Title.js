import React from "react";

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "klaj"
    };
  }
  componentDidMount() {
    this.props.item("fghjk");
  }

  render() {
    return <h1>jkjkl</h1>;
  }
}
