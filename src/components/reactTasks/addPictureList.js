import React from 'react'
import PictureAndWordList from './pictureAndWordList'

class AddPictureList extends React.Component {
  constructor(props) {
    super()
    this.state = { imageNames: props.imageNames }
  }

  render() {
    return (
      <div>
        <PictureAndWordList imageNames={this.state.imageNames} dir={'cats/'} ext={'.jpeg'} />
        <input id="textInput" />
        <button
          onClick={() => {
            this.state.imageNames.push(document.getElementById('textInput').value)
            this.setState({ imageNames: this.state.imageNames })
            document.getElementById('textInput').value = ''
          }}
        >
          Add Name
        </button>
      </div>
    )
  }
}

export default AddPictureList
