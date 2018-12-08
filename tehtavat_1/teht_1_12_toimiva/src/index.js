import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0]
    }

  }

  laskePisteet = (anekdootti) => {
    const p = this.state.pisteet.slice()
    p[anekdootti]++
    return () => {
      this.setState({pisteet: p})
    }
  }
  
  render() {
      const test = () => this.state.pisteet.join(' ')
      console.log(test())
      const mostVotes = this.state.pisteet.reduce((bestIndex, current, currentIndex, array) => 
        current > array[bestIndex] ? currentIndex : bestIndex, 0)
      console.log(this.props.anecdotes[mostVotes])
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br></br>
        has {this.state.pisteet[this.state.selected]} votes
        <br></br>
        <button onClick={this.laskePisteet(this.state.selected)}>
            vote
        </button>
        <button onClick={() => this.setState({ selected: Math.floor(Math.random() * 6) })}>
            next
        </button>
        <h2>anecdote with most votes:</h2>
          {this.props.anecdotes[mostVotes]}
          <br></br>
          has {this.state.pisteet[mostVotes]} votes
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)