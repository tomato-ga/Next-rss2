import { useState } from "react"
import React from 'react'


const Comment = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(videoTime, comment, hours, minutes, seconds);
        //TODO: APIにポストするのを後で実装する
        // TODO : おすすめするをコメントしたら再レンダリングして、投稿を取得して表示する
    }

    return (
        <form>
            <label>
                抜ける時間：
                <select value={hours} onChange={e => setHours(e.target.value)}>
                    {Array.from({ length: 12 }, (_, i) => i).map(value => <option key={value} value={value}>{value}</option>)}
                </select>時間
                <select value={minutes} onChange={e => setMinutes(e.target.value)}>
                    {Array.from({ length: 60 }, (_, i) => i).map(value => <option key={value} value={value}>{value}</option>)}
                </select>分
                <select value={seconds} onChange={e => setSeconds(e.target.value)}>
                    {Array.from({ length: 60 }, (_, i) => i).map(value => <option key={value} value={value}>{value}</option>)}
                </select>秒
            </label>
            <br />
            <label>
                コメント：
                <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            </label>
            <button type="submit">おすすめする</button>
        </form>
    )
}

export default Comment;