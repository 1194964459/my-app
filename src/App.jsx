import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/game.css'
// import Game from './components/game'
import SSS from './hooks/setState'
import TodoUndo from './components/todo_undo'
import React from 'react'
import Shallow from './code/浅比较'
import ClassCmt from './code/类组件'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//       <Game></Game>
//     </>
//   )
// }

// function App() {
//   const [name, setName] = useState('App')

//   return (
//     <div className="App">
//       {/* <SSS /> */}
//       <TodoUndo />
//       {/* <Foo />
//       <button onClick={() => setName("aaa")}>
//         {name}
//       </button> */}
//     </div>
//   )
// }

// function Foo() {
//   console.log("Foo render");

//   return (
//     <div>
//       <h1> Foo </h1>
//     </div>
//   );
// }


// 1. 创建Context
// const ThemeContext = React.createContext('dark');

// // 2. 上层组件提供数据
// function App() {
//   return (
//     // <ThemeContext.Provider value="a">
//     //   <ThemedButton />
//     // </ThemeContext.Provider>
//     <ThemedButton />
//   );
// }

// // 3. 子组件通过useContext获取数据
// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   console.log("theme:", theme)
//   return <button style={{ background: theme === 'dark' ? 'black' : 'white' }}>Click me</button>;
// }
class AA extends React.Component {
  // 法1：state位于 constructor 内
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  // 法2：
  // state = { count: 0 };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 }); // 类组件专用
  };
  render() {
    console.log('重新渲染')
    return <button onClick={this.handleClick}>按钮</button>
  }
}

function App() {
  // return <AA />
  // return <ClassCmt />
  return <SSS />
  // return <Shallow />
}

export default App
