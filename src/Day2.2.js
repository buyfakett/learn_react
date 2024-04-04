import {createContext, useContext, useEffect, useState} from "react";

const MsgContext = createContext()

// 跳组件传递数据， app -> B
function A() {
    return (
        <div>
            this is A component
            <B/>
        </div>
    )
}

function B() {
    const msg = useContext(MsgContext)
    return (
        <div>
            this is B component, {msg}
        </div>
    )
}


function Day22() {
    const msg = 'this is msg'
    const [count, addCount] = useState(0)
    // useEffect(() => {
    //     // 渲染完成后的一个hook钩子
    //     console.log('渲染完成了！！！')
    // }, []);
    // useEffect(() => {
    //     // 在渲染完成后或者组件更新的时候
    //     console.log('渲染完成或者组件更新了！！！')
    // });
    useEffect(() => {
        // 在渲染完成后或者指定组件更新的时候
        console.log('渲染完成或者指定组件更新了！！！')
    }, [count]);
    return (
        <div className="App">
            <MsgContext.Provider value={msg}>
                this is app
                <A/>
            </MsgContext.Provider>

            <div>
                <button onClick={() => addCount(count + 1)}>+</button>
                {count}
            </div>
        </div>

    )
}

export default Day22;