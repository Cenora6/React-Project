import './App.css';
import React, {useState} from "react";

type MyState = {
  count: number
}

class App extends React.Component<{}, MyState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      count: Number(e.target.value)
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>Up</button>
        <button onClick={this.decrement}>Down</button>
        <label>
          Our number: <input value={this.state.count} onChange={this.changeNumber}/>
        </label>
      </div>
    )
  }
}

// function App() {
//     const [ count, setCount ] = useState<number>(0)
//
//   function increment() {
//     setCount(count + 1)
//   }
//
//   function decrement() {
//       setCount(count - 1)
//   }
//
//   return (
//     <div className="App">
//       <button onClick={() => increment()}>Up</button>
//       <button onClick={() => decrement()}>Down</button>
//       <p>
//         Our number: {count} </p>
//     </div>
//   );
// }

export default App;
