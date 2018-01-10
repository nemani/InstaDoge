import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  }
  render() {
    return (
      <form className={this.props.className}>
        <label className="upText">Image Upload</label>
        <p className="small">
          <span className="capText">Enter Caption: </span>
          <input
            className="capIn"
            onChange={this.handleChange}
            value={this.state.text}
            type="text"
          />
        </p>
        <button onClick={this.handleSubmit}>Upload</button>
      </form>
    );
  }
}
