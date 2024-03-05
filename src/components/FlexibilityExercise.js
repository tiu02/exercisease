import StopWatch from "./StopWatch";
import { useState } from "react";


export default function FlexibilityExercise({ exercise, setMenuScreen }) {
    let [count, setCount] = useState(0)
    let { name } = exercise
    return <div>
              <p style={{ fontSize: "2em" }}>{exercise.name}</p>
        <p style={{ fontSize: "4em" }}>{count}</p>
        <button style={{ fontSize: "2em"}}
            onClick={() => setCount(count=>count+1)}>Increment</button>
        <button style={{ fontSize: "2em" }}
            onClick={() => setCount(0)}>Reset</button><br/>
        <StopWatch />
        <button style={{ fontSize: "1em", margin: ".5em"}}
            onClick={setMenuScreen}>Return to Menu</button>
    </div>

}