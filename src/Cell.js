import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colour: this.props.colour
    }
  }

  changeCellColour = () => {
    const c = this.props.getColour()
    this.setState({ colour: c})
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.colour}}
        onClick={this.changeCellColour}>
      </div>
    )
  }

}
