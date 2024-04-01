import {useState} from "react";
import './index.css'

const listData = [
    {'id': '1', 'name': 'John'},
    {'id': '2', 'name': 'Jane'},
    {'id': '3', 'name': 'Bob'}
];

const isLogin = true;

const type = 1;


function createType() {
    if (type === 1) {
        return <div>Type 1</div>
    } else if (type === 2) {
        return <div>Type 2</div>
    } else {
        return <div>Type 3</div>
    }
}

function Button() {
    const onClick = () => {
        console.log('111')
    }
    return (
        <div onClick={onClick}>
            <button>Click me</button>
        </div>
    )
}

const style = {
    color: 'red',
}

function Day1() {
    const onClick = (name, e) => {
        console.log(name, 'clicked', e);
    }
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    const [from, setFrom] = useState({
        'name': '111',
        'age': 22
    })
    const editFrom = () => {
        if (from.name === '111') {
            setFrom({
                ...from,
                'name': '222'
            })
        }else if(from.name === '222') {
            setFrom({
                ...from,
                'name': '111'
            })
        }

    }
    return (
        <div className="App">
            {/* 渲染列表 */}
            {/* 注意事项：需要在各个子项里加上key，一般都用id，这样可以提高react的性能 */}
            <ul>
                {listData.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>

            {/* 条件渲染 */}
            {isLogin ? <div>Welcome back!</div> : <div>Please login.</div>}

            {/* 多条件函数 */}
            {createType()}

            {/* 事件处理 */}
            <button onClick={(e) => onClick('111', e)}>Click me</button>

            {/* 渲染组件 */}
            <Button/>
            <Button></Button>

            {/*useState*/}
            <div>
                <button onClick={addCount}>add count</button>
                <br/>
                <span>
                    {count}
                </span>
            </div>
            <div>
                <button onClick={editFrom}>edit from</button>
                <span>名字：{from.name}</span>
                <span>年龄：{from.age}</span>
            </div>

            {/*样式*/}
            <div style={{color: 'red'}}>red</div>
            <div style={style}>red</div>
            <div className="red">red</div>
        </div>
    );
}

export default Day1;
