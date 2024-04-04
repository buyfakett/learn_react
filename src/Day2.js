import {useRef, useState} from "react";
import Day22 from "./Day2.2";
import Day23 from "./Day2.3";

function Son(props) {
    // 不能再子组件中修改父组件的值，只能读取
    // props.name = '111'
    console.log(props)
    return (
        <div>this is son, {props.name}, child: {props.child}</div>
    )
}

function Son2(props) {
    // 默认插槽会自动变为{props.children}
    console.log(props)
    return (
        <div>this is son2, {props.children}</div>
    )
}

function Son3({getMsg}) {
    const sonMsg = 'this is son msg'
    return (
        <div>
            <button onClick={() => getMsg(sonMsg)}>son</button>
        </div>
    )
}

// 组件之间的信息传递
// 1、 A -> faster
// 2、 faster -> B
function A({onGetAname}) {
    const name = 'this is A name'
    return (
        <div>
            this is A component,
            <button onClick={() => onGetAname(name)}>sedMsg</button>
        </div>
    )
}

function B(props) {
    return (
        <div>
            this is B component, {props.name}
        </div>
    )
}

function Day2() {
    const [value, setValue] = useState('')
    const inputRef = useRef(null)
    const name = 'test push data'
    const showDOM = () => {
        console.dir(inputRef.current)
    }
    const [stringMsg, setMsg] = useState('')
    const getMsg = (msg) => {
        console.log(msg)
        setMsg(msg)
    }
    const [aName, setAName] = useState('')
    const getAname = (name) => {
        console.log(name)
        setAName(name)
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
            <Son
                name={name}
                age={20}
                isDelete={false}
                list={[1, '1']}
                object={{name: 'name'}}
                callback={() => {
                    console.log('111')
                }}
                child={<span>this is child</span>}
            />

            {/*默认插槽*/}
            <Son2>
                <span>this is faster</span>
            </Son2>

            {/*子组件向父组件传递数据*/}
            <div>
                this is app, {stringMsg}
                <Son3 getMsg={getMsg}/>
            </div>

            <A onGetAname={getAname}/>
            <B name={aName}/>

            <Day22/>
            <Day23/>

        </div>

    );
}

export default Day2;