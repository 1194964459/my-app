import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'; // 提供store
import { store } from './code/redux/toolkit/index';
import ReduxCounter from './code/redux/toolkit/jsx/函数_Counter'
import ClassReduxCounter from './code/redux/toolkit/jsx/类_Counter'

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
import ThisOfClassMethod from './code/类组件/方法中的this'
// import VarClosure from './code/变量闭包'
import SetTimeoutClosure from './code/闭包陷阱/1_setTimeout'
import SetTimeoutClosureRev from './code/闭包陷阱/1_setTimeout_解决'
import SetTimeoutClosureRev2 from './code/闭包陷阱/1_setTimeout_解决2'
import AddEventLis from './code/闭包陷阱/2_addEventListener'
// import VirtualScroll from './虚拟滚动/VariableSizeList'
import VirtualScroll from './虚拟滚动/row'

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
    {/* <UnControl />
    <ControlCom /> */}

    {/* 所有子组件可访问store */}
    {/* <Provider store={store}>
      <ReduxCounter />
      <ClassReduxCounter />
    </Provider> */}

    {/* <ThisOfClassMethod /> */}

    {/* <VarClosure initialValue="0" /> */}
    {/* <SetTimeoutClosure /> */}
    {/* <SetTimeoutClosureRev /> */}
    {/* <SetTimeoutClosureRev2 /> */}
    {/* <AddEventLis /> */}

    <VirtualScroll />

  </StrictMode>,
)
