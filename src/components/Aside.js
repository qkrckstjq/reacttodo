import { AsideStyle } from "../styles"
import { Calender } from "./Calender"

export function Aside ({time,DateInfo}) {
    return (
        <>
        {
            <AsideStyle>
            <Calender time={time} DateInfo={DateInfo}/>
            </AsideStyle>
        }

        </>
    )
}