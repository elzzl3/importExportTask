import React from 'react'

const ColouredBox = props => (
  <div style={{ background: props.colour }}>
    <p>This is a Box</p>
  </div>
)

let i
const colours = ['orange', 'pink', 'black', 'green', 'blue', 'red']
const len = colours.length

class ColourBox extends React.Component {
  constructor() {
    super()
    i = 0
    this.state = { colour: colours[i] }
  }

  render() {
    return (
      <div>
        <ColouredBox colour={this.state.colour} />
        <button
          onClick={() => {
            i = (i + 1) % len
            this.setState({ colour: colours[i] })
          }}
        >
          Change Colour
        </button>
      </div>
    )
  }
}

export default ColourBox
