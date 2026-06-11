import { useEffect, useState } from "react";

function Timer () {
    const [ seconds, setSeconds] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1)
        }, 1000)
    return () => clearInterval(interval) 
    },[])
    return <p>Seconds: {seconds}</p>
}
export default Timer