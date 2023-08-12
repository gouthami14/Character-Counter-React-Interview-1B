import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    wordsList: [],
  }

  one = event => {
    this.setState({searchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addedItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state

    return (
      <div>
        <div>
          <h1>Count the characters like a Boss</h1>
          <div>
            {wordsList.length > 0 ? (
              <ul>
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p key={each.id}>
                      {each.item} : {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="container-2">
          <h1>Character Counter</h1>
          <div>
            <form onSubmit={this.start}>
              <div>
                <input
                  type="text"
                  placeholder="Enter the characters here"
                  onChange={this.one}
                  value={searchInput}
                />
                <button type="submit" onClick={this.start}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
