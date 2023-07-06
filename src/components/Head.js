import { useState } from "react"
import { Headstyle } from "../styles"
import { Aside } from "./Aside";


export function Head ({time,DateInfo,setUpdating}) {
    return (
        <Headstyle>
            <h1>TODO</h1>
            <Aside time={time} DateInfo={DateInfo} setUpdating={setUpdating}/>
        </Headstyle>
    )
}