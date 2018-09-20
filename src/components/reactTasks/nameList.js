import React from 'react'
import _ from 'lodash'

const Names = props => (
  <ul>
    {_.map(props.names, name => (
      <li>{name}</li>
    ))}
  </ul>
)

class NamesList extends React.Component {
  constructor(props) {
    super()
    this.state = { names: props.names }
  }

  render() {
    return (
      <div>
        <Names names={this.state.names} />
        <input id="textInput" />
        <button
          onClick={() => {
            this.state.names.push(document.getElementById('textInput').value)
            this.setState({ names: this.state.names })
            document.getElementById('textInput').value = ''
          }}
        >
          Add Name
        </button>
      </div>
    )
  }
}

export default NamesList
