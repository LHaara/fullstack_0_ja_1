import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>  
      <Osa1 osat={props.osat}/> 
      <Osa2 osat={props.osat}/>
      <Osa3 osat={props.osat}/>
    </div>
  )
}

const Yhteensa = (props) => {
    return (
      <div>
        <p>Yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
      </div>
      
  )
}

const Osa1 = (props) => {
  return (
    <div>  
      <p>{props.osat[0].nimi} {props.osat[0].tehtavia}</p>
    </div>
  )
}

const Osa2 = (props) => {
    return (
      <div>  
        <p>{props.osat[1].nimi} {props.osat[1].tehtavia}</p>
      </div>
  )
}

const Osa3 = (props) => {
    return (
      <div>  
        <p>{props.osat[2].nimi} {props.osat[2].tehtavia}</p>
      </div>
  )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }

  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>


  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)