import { useState } from "react";
import { Mainstyle,StyleLi,StyleAddLi,Graph} from "../styles"




export function Main ({DateInfo,setUpdating,Updating}) {
    let {year,month,date} = DateInfo
    let todoYear = year;
    let [isWriting, setisWriting] = useState(false);
    let ALL_local = JSON.parse(localStorage.getItem(`${year}_${month}`)) || {}
    let local_list = ALL_local[date] || []
    let weeks = ['일','월','화','수','목','금','토']
    let end_day = [31,28,31,30,31,30,31,31,30,31,30,31];
    let last_todo = 0;
    let [scale,setScale] = useState(100);
    for(let i = 0; i < local_list.length; i++){
        if(!local_list[i].isclear) {last_todo++}
    }

    const WhenPressEnter = (e,idx)=>{
        const checkbtn = e.target.parentNode.children[0]
        const inputvalue = e.target.parentNode.children[1]
        const deletbtn = e.target.parentNode.children[2]
        if(e.key == 'Enter' && e.target.parentNode.children[1].value !== '') {
            local_list[idx].todo = e.target.parentNode.children[1].value;
            ALL_local[date] = local_list;
            localStorage.setItem(`${year}_${month}`,JSON.stringify(ALL_local));
            checkbtn.style.flex = '0.5';
            checkbtn.style.borderRadius = '50%'
            checkbtn.style.marginRight = '15px'
            inputvalue.readOnly = true;
            inputvalue.style.backgroundColor = '#eee';
            deletbtn.style.flex = '1';
        }
    }

    const WhenClick = (e) => {
        const checkbtn = e.target.parentNode.children[0]
        const inputvalue = e.target.parentNode.children[1]
        const deletbtn = e.target.parentNode.children[2]
            setUpdating(!Updating)
            e.target.readOnly = false;
            checkbtn.style.flex = '0';
            checkbtn.style.borderRadius = '0'
            checkbtn.style.marginRight = '0';
            inputvalue.readOnly = false;
            inputvalue.style.backgroundColor = 'white';         
            deletbtn.style.flex = '0';
        
    }

    const WhenBlur = (e,idx) => {
        const checkbtn = e.target.parentNode.children[0]
        const inputvalue = e.target.parentNode.children[1]
        const deletbtn = e.target.parentNode.children[2]
            setUpdating(!Updating)
            local_list[idx].todo = e.target.parentNode.children[1].value;
            ALL_local[date] = local_list;
            localStorage.setItem(`${year}_${month}`,JSON.stringify(ALL_local));
            checkbtn.style.flex = '0.5';
            checkbtn.style.borderRadius = '50%'
            checkbtn.style.marginRight = '15px'
            inputvalue.readOnly = true;
            inputvalue.style.backgroundColor = '#eee';
            deletbtn.style.flex = '1';    
    }

    const checking = (e,idx) => {
        local_list[idx].isclear = !local_list[idx].isclear;
        local_list[idx].todo = e.target.parentNode.children[1].value;
        ALL_local[date] = local_list;
        localStorage.setItem(`${year}_${month}`,JSON.stringify(ALL_local));
        setUpdating(!Updating);
    }

    const form = {
        todo : '',
        isclear : false
    }

    const AddLocal_list = () => {
        local_list.push(form)
        ALL_local[date] = local_list;
        localStorage.setItem(`${year}_${month}`,JSON.stringify(ALL_local));
        setUpdating(!Updating)
    }

    const Removelocal_list = (idx) =>{
        local_list.splice(idx,1);
        ALL_local[date] = local_list;
        localStorage.setItem(`${year}_${month}`,JSON.stringify(ALL_local));
        setUpdating(!Updating)
    }

    const ChangeScale = (type)=>{
        if(type == 'up') {
            if(scale > 20) {
                setScale(scale-=20);
            }
        } else if (type == 'down') {
            setScale(scale+=20);
        }
    }


    const MakeWeekRange = (year, month, day,ALL_local) => {
        let arr = [];
        const date = new Date(year, month - 1, day);
        const dayOfWeek = date.getDay();
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - dayOfWeek);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        let week = 0;
        for(let i = startOfWeek.getDate(); i <= endOfWeek.getDate(); i++){
            if(ALL_local[i]) {
                let did = 0;
                for(let j = 0; j < ALL_local[i].length; j++){
                    if(ALL_local[i][j].isclear) {
                        did+=1;
                    }
                }
                arr.push({
                    date : i,
                    day : weeks[week],
                    month : month,
                    did : did,
                    todo : ALL_local[i].length
                })
            } else {
                arr.push({
                    date : i,
                    day : weeks[week],
                    month : month,
                    did : 0,
                    todo : 0
                })
            }
            week++;
        }
        return arr;
    }
    
    return (
        <Mainstyle>
            <div>
                <div>
                    <h2>{todoYear}.{month}.{date}</h2>
                    <h3>남은 일정 {last_todo}개</h3>
                </div>
                <ul>
                    {local_list.map((el,idx)=>{
                        return(
                            <StyleLi key={idx}>
                            <button
                            style={{
                                flex : '0.5',
                                backgroundColor : el.isclear ? '#eee' : 'white',
                                marginRight : '15px',

                                color: el.isclear ? 'black' : 'white'
                            }}
                            onClick={(e)=>checking(e,idx)}
                            >✔</button>
                            <input
                            style={{
                                backgroundColor :el.isclear ? '#eee' : '#eee',
                            }}
                            placeholder="TODO..."
                            defaultValue={el.todo}
                            readOnly={el.isclear}
                            onKeyDown={(e)=>WhenPressEnter(e,idx)}
                            onClick={(e)=>WhenClick(e)}
                            onBlur={(e)=>WhenBlur(e,idx)}
                            ></input>
                            <button
                            style={{
                                flex : '1'
                            }}
                            onClick={()=>Removelocal_list(idx)}
                            >X</button>
                    </StyleLi>
                        )
                    })}
                    { !isWriting
                    ? <StyleAddLi
                    onClick={AddLocal_list}
                    ><button>Add</button>
                    </StyleAddLi>
                    : undefined}
                    
                </ul>
            </div>

            <Graph>
                <div>
                <button
                onClick={()=>ChangeScale('up')}
                >+</button>
                <button
                onClick={()=>ChangeScale('down')}
                >-</button>
                </div>

                <span></span>
                {MakeWeekRange(year,month,date,ALL_local).map((el,idx)=>{
                    return (
                            <div key={idx}
                            style={{
                                height : `${el.todo*scale}px`,
                            }}
                            >
                                <div
                                style={{
                                    height : `${el.did*scale}px`,
                                }}
                                ></div>
                                <span>{el.day}</span>
                                <span
                                style={{
                                    color: date == el.date && month == el.month ? 'red' : 'black'
                                }}
                                >{`${el.month}.${el.date}`}</span>
                                <div>할일 {el.todo}<br/>한거 {el.did}</div>
                            </div>
                    )
                })}
            </Graph>
        </Mainstyle>
    )
}

