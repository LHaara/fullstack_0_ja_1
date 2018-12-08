import React from 'react'
import ReactDOM from 'react-dom'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = (props) => {
  if (isNaN(props.keskiarvo)){
    return (
      <p>ei palautteita</p>
    )
  }
  return (
    <div>  
        <table>
          <tbody>
            <tr>
              <td>hyvä</td>
              <td>{props.hyva}</td>
            </tr>
            <tr>          
              <td>neutraali</td>
              <td>{props.neutraali}</td>
            </tr>
            <tr>
              <td>huono</td>
              <td>{props.huono}</td>
            </tr>
            <Statistic keskiarvo = {props.keskiarvo}/>
            <tr>          
              <td>positiivisia</td>
              <td>{props.prosentti}%</td>
            </tr>
          </tbody>
        </table>

    </div>
  )
}

const Statistic = (props) => {
  return (
    <tr>          
      <td>keskiarvo</td>
      <td>{props.keskiarvo}</td>
    </tr>


  )
}

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
        kaikki: [],
      }
    }
    muutaTila = (uusi) => {  

      if (uusi === 1)
      {
        return () => {
          this.setState({
            hyva: this.state.hyva + 1,
            kaikki: this.state.kaikki.concat(uusi)
            })
        }
      }
      else if (uusi === 0)
      {
        return () => {
          this.setState({
            neutraali: this.state.neutraali + 1,
            kaikki: this.state.kaikki.concat(uusi)
            })
        }
      }
      if (uusi === -1)
      {
        return () => {
          this.setState({
            huono: this.state.huono + 1,
            kaikki: this.state.kaikki.concat(uusi)
            })
        }
      }

    }      
    render() {
      const average = () => this.state.kaikki.reduce((a,b) => a + b, 0) / this.state.kaikki.length
      const KA = average().toFixed(1)
      const hyvapros = (this.state.hyva / this.state.kaikki.length * 100).toFixed(1)
      // const test = () => this.state.kaikki.join(' ')
      // console.log(test())

      return (
          <div>
          <h1>anna palautetta</h1>
              <div>            
              <Button
              handleClick={this.muutaTila(1)}
              text="hyvä"
              />
              <Button
              handleClick={this.muutaTila(0)}
              text="neutraali"
              />
              <Button
              handleClick={this.muutaTila(-1)}
              text="huono"
              />            
              </div>
            <h1>statistiikka</h1> 
            <Statistics hyva = {this.state.hyva} neutraali = {this.state.neutraali} huono = {this.state.huono} prosentti = {hyvapros} keskiarvo ={KA} />
                  
        </div>
      )

    }
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)