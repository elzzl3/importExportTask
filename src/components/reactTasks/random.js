import React from 'react'

const CurrentRandom = props => <p>{props.random}</p>

class RandomGenerator extends React.Component {
  constructor() {
    super()
    this.state = { random: Math.random() }
  }

  render() {
    return (
      <div>
        <CurrentRandom random={this.state.random} />
        <button onClick={() => this.setState({ random: Math.random() })}>Generate</button>
      </div>
    )
  }
}

export default RandomGenerator
