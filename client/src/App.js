import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    results: {},
  }
  componentDidMount() {
    this.fetchApi()
  }
  fetchApi = async () => {
    const response = await fetch(`/api`)
    const results = await response.json()
    this.setState({ results })
  }
  render() {
    return (
      <div className="App">
        <h3>Api call results:</h3>
        <pre><code>{JSON.stringify(this.state.results, null, 4)}</code></pre>
      </div>
    )
  }
}

export default App
