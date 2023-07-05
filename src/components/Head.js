import { useState } from "react"
import { Headstyle } from "../styles"
import { Aside } from "./Aside";


export function Head ({time,DateInfo}) {
    return (
        <Headstyle>
            <h1>TODO</h1>
            <Aside time={time} DateInfo={DateInfo}/>
        </Headstyle>
    )
}