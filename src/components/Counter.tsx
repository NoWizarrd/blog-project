import { useState } from "react"
import classes from './Counter.module.scss'

export function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <h1>
            {count}
            <button onClick={increment} className={classes.btn}>increment</button>
        </h1>
    )
}