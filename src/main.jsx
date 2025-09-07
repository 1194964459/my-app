import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import SetStateInitial from './hooks/setState_初始化的值是函数'
import ForwardRefImper from './code/forwardRef_useImperativeHandle'
import ForwardRef from './code/forwardRef'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SetStateInitial /> */}
    <ForwardRef />
  </StrictMode>,
)
