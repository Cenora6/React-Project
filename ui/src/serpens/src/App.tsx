import './App.css';
import React, {useEffect, useState} from "react";

type MyState = {
  count: number
}

// class App extends React.Component<{}, MyState> {
//   constructor(props = {}) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }
//
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//
//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }
//
//   changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({
//       count: Number(e.target.value)
//     })
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.increment}>Up</button>
//         <button onClick={this.decrement}>Down</button>
//         <label>
//           Our number: <input value={this.state.count} onChange={this.changeNumber}/>
//         </label>
//       </div>
//     )
//   }
// }

function getYears () {
  const yearsArray = []
  let baseYear = 1920
  for (let i = 0; i < 100; i++) {
    yearsArray.push(baseYear + i)
  }

  return yearsArray
}

function getDays (monthDays: number) {
  const daysArray = []

  for (let i = 1; i <= monthDays; i++) {
    daysArray.push(i)
  }
  return daysArray
}

function App() {

  const months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec','lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const years = getYears()

  const [days, setDays] = useState<number[]>([])
  const [ day, setDay ] = useState<number>(1)
  const [ month, setMonth ] = useState<number>(3)
  const [ year, setYear ] = useState<number>(2000)


  useEffect(() => {
    const currentDays = getDays(monthDays[month - 1])
    setDays(currentDays)

    if(day > currentDays[currentDays.length - 1]) {
      setDay(currentDays[currentDays.length - 1])
    }
  }, [month])

  function incrementDay() {
    if(day < days[days.length - 1]) {
      setDay(day + 1)
    }
  }

  function decrementDay() {
    if (day > days[0]) {
      setDay(day - 1)
    }
  }

  function incrementMonth() {
    const newMonth = month + 1
    if(month < months.length) {
      setMonth(newMonth)
    }
  }

  function decrementMonth() {
    const newMonth = month - 1
    if (month > 1) {
      setMonth(newMonth)
    }
  }

  function incrementYear() {
    if(year < years[years.length - 1]) {
      setYear(year + 1)
    }
  }

  function decrementYear() {
    if (year > years[0]) {
      setYear(year - 1)
    }
  }

  function handleDayChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setDay(Number(e.target.value))
  }

  function handleMonthChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setMonth(Number(e.target.value))
  }

  function handleYearChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setYear(Number(e.target.value))
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => decrementDay()}>Previous day</button>
        <select value={day} onChange={handleDayChange}>
          {days.map((d) => {
              return <option key={d} value={d}>{d}</option>
            }
          )}
        </select>
        <button onClick={() => incrementDay()}>Next day</button>
      </div>

      <div>
        <button onClick={() => decrementMonth()}>Previous month</button>
        <select value={month} onChange={handleMonthChange}>
          {months.map((m, index) =>  <option key={index + 1} value={index + 1}>{m}</option>)}
        </select>
        <button onClick={() => incrementMonth()}>Next month</button>
      </div>

      <div>
        <button onClick={() => decrementYear()}>Previous year</button>
        <select value={year} onChange={handleYearChange}>
          {years.map((y) => <option key={y} value={y}>{y}</option>
          )}
        </select>
        <button onClick={() => incrementYear()}>Next year</button>
      </div>
    </div>
  );
}

export default App;
