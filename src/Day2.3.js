import {useEffect, useState} from "react";
import axios from "axios";
import listData from "./data/listData.json"

function Son() {
    // 定时器
    const [count, setCount] = useState(1)
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1)
            // console.log("定时器正在执行", {count})
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
// 封装自定义hooks
function useTaggle(){
    const [value, setValue] = useState(true)

    const toggle = () => setValue(!value)

    return {
        value,
        toggle
    }
}


function Day23() {
    const [state, setState] = useState(true)

    const {value, toggle} = useTaggle()

    const [testData, setTestData] = useState([])

     useEffect(() => {
        async function getList() {
            // const response = await axios.get('https://xxx')
            const response = await listData
            setTestData(listData.data.items)
        }
        getList()
    }, []);

    return (
        <div className="App">
            { state && <Son/>}
            <button onClick={() => setState(false)}>卸载组件</button>

            <div>
                {value && <div>this is div</div> || <div>edit</div>}
                <button onClick={toggle}>toggle</button>
            </div>

            <div>
                <ul>
                    {testData.map(item => <li key={item.id}>{item.hostname}</li>)}
                </ul>
            </div>
        </div>

    )
}

export default Day23;