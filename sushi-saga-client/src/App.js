import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    balanceRemaining: 100,
    sushiList: [],
    displayedSushi: []
  }

  addMoneyToBalance = (num) => {
    const newBalanceRemaining = this.state.balanceRemaining + num;
    this.setState({
      balanceRemaining: newBalanceRemaining
    })
  }

  markSushiEaten = (id, price) => {
    if (this.state.balanceRemaining - price >= 0) {
      // Update sushiObject in sushiList to eaten(state)
      let newSushiList = this.state.sushiList.map(sushi => {
        if (sushi.id === id) {
          const newSushi = {...sushi, eaten: true}
          return newSushi
        } else {
          return sushi
        }
      })
      // Update sushiObject in displayedSushi to eaten(state)
      let newDisplayedSushi = this.state.displayedSushi.map(sushi => {
        if (sushi.id === id) {
          const newSushi = {...sushi, eaten: true}
          return newSushi
        } else{
          return sushi
        }
      })
      // Decrease the remainingBalance
      const newBalanceRemaining = this.state.balanceRemaining - price
      this.setState({
        sushiList: newSushiList,
        displayedSushi: newDisplayedSushi,
        balanceRemaining: newBalanceRemaining
      })
    }
  }
  
  getNewDisplaySushi = () => {
    let i = this.state.displayedSushi.slice(-1)[0].id + 1;
    this.addSushiToDisplayedSushi(i);
  }

  addSushiToDisplayedSushi = (num) => {
    let newDisplayedSushiArray = []
    let i = num
    while (newDisplayedSushiArray.length < 4) {
      if (!this.state.sushiList[i]) {
        i = 0
      }
      if (this.state.sushiList[i].eaten) {
        i++;
      } else {
        newDisplayedSushiArray.push(this.state.sushiList[i])
        i++;
      }
    }
    this.setState({
      displayedSushi: newDisplayedSushiArray
    })
  }

  componentDidMount() {
    // Fetch SushiList
    fetch(API)
      .then(res => res.json())
      .then(sushiListArray => {
        // Add sushi to the sushiList array (state)
        let newSushiList = []
        sushiListArray.forEach(sushiObj => {
          const newSushiObj = {...sushiObj, eaten: false};
          newSushiList.push(newSushiObj)
        })
        this.setState({
          sushiList: newSushiList
        })
        // Add 4 sushi items to the displayedSushi array (state)
        let i = 0
        this.addSushiToDisplayedSushi(i)
      })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer displayedSushi={this.state.displayedSushi} getNewDisplaySushi={this.getNewDisplaySushi} markSushiEaten={this.markSushiEaten}/>
        <Table balanceRemaining={this.state.balanceRemaining} sushiList={this.state.sushiList}/>
        <SushiWallet addMoneyToBalance={this.addMoneyToBalance}/>
      </div>
    );
  }
}

export default App;