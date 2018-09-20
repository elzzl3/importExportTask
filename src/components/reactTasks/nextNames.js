import React from 'react'

let i = 0
const CurrentName = props => <p>{props.name}</p>
let len

class NextName extends React.Component {
  constructor(props) {
    super()
    this.state = { names: props.names }
    i = 0
  }

  render() {
    len = this.state.names.length
    return (
      <div>
        <CurrentName name={this.state.names[i]} />
        <button
          onClick={() => {
            i = (i + 1) % len
            console.log(len)
            this.setState({ name: this.state.names[i] })
          }}
        >
          Generate
        </button>
      </div>
    )
  }
}

export default NextName
