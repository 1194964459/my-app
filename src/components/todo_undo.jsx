import { useState } from 'react';
// import FutureStackViewer from './zi'
/***
 * 撤销与重做：
 * 
 * 撤销（Undo）：取消最近一次操作，恢复系统至先前状态!
 * 
 * 重做（Redo）：恢复“被撤销”的操作，使系统回到撤销前的状态！是“反悔的后悔药”
 */


const UndoRedoDemo = () => {
    // 当前状态（示例：文本内容）
    const [currentText, setCurrentText] = useState('');
    // 历史栈（存储撤销前的状态）
    const [historyStack, setHistoryStack] = useState([]);
    // 未来栈（存储撤销后可重做的状态）
    const [futureStack, setFutureStack] = useState([]);

    // 保存当前状态到历史栈
    const saveState = () => {
        // 深拷贝当前状态
        setHistoryStack(prev => {
            const arr = [...prev, JSON.parse(JSON.stringify(currentText))]
            // console.log(arr)
            return arr
        });
        // 清空未来栈
        setFutureStack([]);
    };

    // 撤销
    const undo = () => {
        if (historyStack.length === 0) return;
        // console.log('historyStack:', historyStack)
        // 当前状态存入未来栈
        setFutureStack(prev => [...prev, currentText]);
        // 取出上一历史状态并更新当前状态
        if (historyStack.length >= 2) {
            const lastState = historyStack[historyStack.length - 2];
            setCurrentText(lastState);
        } else {
            setCurrentText('')
        }

        // 更新历史栈（移除最后一个元素）
        setHistoryStack(prev => prev.slice(0, -1));
    };

    // 重做
    const redo = () => {
        if (futureStack.length === 0) return;
        // 当前状态存入历史栈
        let last = futureStack[futureStack.length - 1]
        console.log('future中最后一项：', last)
        setHistoryStack(prev => {
            console.log('his:', prev, last)
            return [...prev, last]
        });
        // 取出下一未来状态并更新当前状态
        const nextState = futureStack[futureStack.length - 1];
        setCurrentText(nextState);

        // 更新未来栈（移除最后一个元素）
        setFutureStack(prev => prev.slice(0, -1));
    };

    function HistoryList({ data }) {
        // console.log('??', data) 
        const listItems = data.map((ele, idx) => {
            // console.log(idx, ele)
            return <li key={idx}>{ele}</li>
        });
        return <ul style={{ width: '100px' }}>{listItems}</ul>;
    }

    return (
        <div>
            <input
                value={currentText}
                onChange={(e) => setCurrentText(e.target.value)}
            />
            <button onClick={saveState}>保存当前状态</button>
            <button onClick={undo} disabled={!historyStack.length}>撤销</button>
            <button onClick={redo} disabled={!futureStack.length}>重做</button>

            <div style={{ width: '200px' }}>
                <span>历史栈：</span>
                <HistoryList data={historyStack} />

                <span>重做栈：</span>
                <HistoryList data={futureStack} />
            </div>
        </div>
    );
};

export default UndoRedoDemo;