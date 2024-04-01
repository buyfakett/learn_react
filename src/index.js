import React from 'react';
import ReactDOM from 'react-dom/client';
import Day1 from './Day1';
import Day2 from './Day2';

function LearnVideoUrl() {
    return (
        <div>
            <a href="https://www.bilibili.com/video/BV1ZB4y1Z7o8">视频地址</a>
            <br/>
            <a href="https://www.bilibili.com/account/history">历史观看地址</a>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <LearnVideoUrl />
        <Day2/>
    </div>
);
