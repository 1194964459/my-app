import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import SetStateInitial from './hooks/setState_初始化的值是函数'
import ForwardRefImper from './code/forwardRef_useImperativeHandle'
import ForwardRef from './code/forwardRef'
import GetDerivedStateFromProps from './code/getDerivedStateFromProps'
import FuncFirst from './code/函数组件/首次渲染'
import ClassFirst from './code/类组件/首次渲染'
import EleIsObj from './code/渲染元素属性为对象'
import Event22 from './code/React事件'
import UnControl from './code/_非受控组件'
import ControlCom from './code/_受控组件'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SetStateInitial /> */}
    {/* <ForwardRef /> */}

    {/* <GetDerivedStateFromProps /> */}
    {/* <ClassFirst /> */}
    {/* <FuncFirst /> */}
    {/* <EleIsObj /> */}
    {/* <Event22 /> */}
    <UnControl />
    <ControlCom />

  </StrictMode>,
)
