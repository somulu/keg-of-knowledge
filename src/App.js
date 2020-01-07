import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        breweries: [],
        searchField: ''
      };
    }

    componentDidMount(){
  fetch('https://sandbox-api.brewerydb.com/v2/brewery/HaPdSL/beers/?key=e8afe73843413e14dc6a7218b469a279')
  .then(response => response.json())
  .then(breweries => this.setState({breweries: breweries.data}))
  }


    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Keg of Knowledge
          <span role="img" aria-label="beer glasses"> 🍻</span>
          </h1>
        </header>
        <body className="App-body">
        
        </body>
      </div>
    );
  }
}


export default App;
