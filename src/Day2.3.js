import {useEffect, useState} from "react";

function Son() {
    // 定时器
    const [count, setCount] = useState(1)
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1)
            console.log("定时器正在执行", {count})
        }, 1000)
        return () => {
            // 清除定时器
            clearInterval(timer)
        }
    }, []);

    return (
        <div>
            this is son
        </div>
    )
}


function Day23() {
    const [state, setState] = useState(true)

    return (
        <div className="App">
            { state && <Son/>}
            <button onClick={() => setState(false)}>卸载组件</button>
        </div>

    )
}

export default Day23;