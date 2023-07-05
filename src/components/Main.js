import { useState } from "react";
import { Mainstyle,StyleLi,StyleAddLi} from "../styles"




export function Main ({DateInfo}) {
    let {year,month,date} = DateInfo
    let todoYear = year;
    let [isWriting, setisWriting] = useState(false);
    let [Updating,setUpdating] = useState(false);
    let ALL_local = JSON.parse(localStorage.getItem(`${year}_${month}`)) || {}
    let local_list = ALL_local[date] || [];

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
        if(!isWriting) {
            setisWriting(true);
            checkbtn.style.flex = '0';
            checkbtn.style.borderRadius = '0'
            checkbtn.style.marginRight = '0';
            inputvalue.readOnly = false;
            inputvalue.style.backgroundColor = 'white';         
            deletbtn.style.flex = '0';
        }
    }

    const WhenBlur = (e,idx) => {
        const checkbtn = e.target.parentNode.children[0]
        const inputvalue = e.target.parentNode.children[1]
        const deletbtn = e.target.parentNode.children[2]
        if(e.target.value !== '') {
            setisWriting(false)
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

    const checking = (e,idx) => {
        local_list[idx].isclear = !local_list[idx].isclear;
        local_list[idx].todo = e.target.parentNode.children[1].value;
        ALL_local[date] = local_list;
        localStorage.setItem(`${year}_${month}`,JSON.stringify(ALL_local));
        setUpdating(true);
    }

    const form = {
        todo : '',
        isclear : false
    }

    return (
        <Mainstyle>
            <div>
                <div>
                    <h2>{todoYear}.{month}.{date}</h2>
                    <h3>남은 일정 {}개</h3>
                </div>
                {/* ✔ */}
                <ul>
                    {local_list.map((el,idx)=>{
                        return(
                            <StyleLi key={idx}>
                            <button
                            style={{
                                flex : '0.5',
                                backgroundColor :'#eee',
                                marginRight : '15px',
                                color: el.isclear ? 'black' : '#eee'
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
                                flex : el.isclear ? '1' : '0'
                            }}
                            >X</button>
                    </StyleLi>
                        )
                    })}
                    { !isWriting
                    ? <StyleAddLi
                    
                    ><button>Add</button>
                    </StyleAddLi>
                    : undefined}
                    
                </ul>
            </div>
            <div>

            </div>
        </Mainstyle>
    )
}

