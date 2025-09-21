'use client'
import { useEffect, useState } from "react";

const Dummydata = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/users').then(res => res.json()).then(res => setData(res));
    } , [])

    return (
        <div>
            {data.map(item => {
                return (
                    <div>{item.name}</div>
                )
            })}
        </div>
    )
}

export default Dummydata;