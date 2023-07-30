import { useState } from "react"
import React from 'react'


const Comment = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO pydanticのmainがエラー出してるよ！！！！！！！！！！！！！！！！！！
        
        //TODO: APIにポストするのを後で実装する
        // TODO : おすすめするをコメントしたら再レンダリングして、投稿を取得して表示する
        // TODO : ログインしていないとコメントは見られないようにする

        // 選択された時間を"HH:MM:SS"形式に整形し、APIへ送信する
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`

        const TimeAndComment = {
            recommend_time: timeString,
            comment: comment,
        }

        const sendComment = async () => {
            const fetchComment = await fetch(`http://192.168.0.25:7002/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(TimeAndComment),
            });

            if (!fetchComment.ok) {
                console.error("fetchCommentがエラーです")
            }
        } 

        if (TimeAndComment) {
            sendComment();
        } else {
            console.error("TIMEANDCOMMENTが送信できませんでした")
        }

        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setComment('');
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
            <button type="submit" onClick={handleSubmit}>おすすめする</button>
        </form>
    )
}

export default Comment;