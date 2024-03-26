import {useRef, useState} from "react";

function Day2(){
    const [value,setValue] = useState('')
    const inputRef = useRef(null)
    const showDOM = ()=>{
        console.dir(inputRef.current)
    }
    return (
        <div className="App">
            {/*受控表单绑定*/}
            <input type="text"
                   value={value}
                   onChange={(e)=>setValue(e.target.value)}/>

            {/*获取DOM*/}
            <input type="text" ref={inputRef}/>
            <button onClick={showDOM}>获取DOM</button>
        </div>
    )
}

export default Day2;