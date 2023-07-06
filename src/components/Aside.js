import { AsideStyle } from "../styles"
import { Calender } from "./Calender"

export function Aside ({time,DateInfo,setUpdating}) {
    return (
        <>
        {
            <AsideStyle>
            <Calender time={time} DateInfo={DateInfo} setUpdating={setUpdating}/>
            </AsideStyle>
        }

        </>
    )
}