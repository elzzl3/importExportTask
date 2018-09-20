import React from 'react'

const CurrentBox = props => <div style={{ border: '5px solid', height: props.height }}>{props.height}</div>

class BoxGrower extends React.Component {
  constructor(props) {
    super()
    this.state = { height: props.height }
  }

  render() {
    return (
      <div>
        <CurrentBox height={this.state.height} />
        <button onClick={() => this.setState({ height: this.state.height + 20 })}>Grow</button>
      </div>
    )
  }
}

export default BoxGrower
