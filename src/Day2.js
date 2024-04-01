import {useRef, useState} from "react";

function Son(props) {
    return (
        <div>this is son, {props.name}</div>
    )
}

function Day2() {
    const [value, setValue] = useState('')
    const inputRef = useRef(null)
    const name = 'test push data'
    const showDOM = () => {
        console.dir(inputRef.current)
    }
    return (
        <div className="App">
            {/*受控表单绑定*/}
            <input type="text"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}/>

            {/*获取DOM*/}
            <input type="text" ref={inputRef}/>
            <button onClick={showDOM}>获取DOM</button>

            {/*组件之间传递数据*/}
            <Son name={name}/>
        </div>
    )
}

export default Day2;