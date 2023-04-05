import React, { Component } from 'react';

interface MyProps {}

interface MyState {
  leagues: Array<any>;
}

class Leagues extends Component<MyProps, MyState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      leagues: [],
    };
  }

  componentDidMount() {
    fetch('https://api.football-data.org/v4/competitions/', {
      method: 'GET',
      // mode: 'no-cors',
      headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': `${process.env.REACT_APP_FOOTBALL_DATA_API_KEY}`,
        'Access-Control-Allow-Origin': 'origin',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      },
    })
      .then(response => response.json())
      .then(data => this.setState({ leagues: data }));
  }

  render() {
    console.log(this.state.leagues);
    return (
      <div>
        <h1>League</h1>
      </div>
    );
  }

  // componentWillUnmount() {
  //   this.setState = (state, callback) => {
  //     return;
  //   };
  // }
}

export default Leagues;
