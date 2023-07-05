import { useEffect, useState } from "react";
import { CalenderStyle } from "../styles";



//localstorage에 yearmonth로 저장 ex) key:2023_7, value:{4:[{todo:'밥먹기',isclear:true}]}, 5:[{todo:'자기', isclear:true}]
export function Calender ({time,DateInfo}) {
    let {year,setyear,month,setmonth,setdate} = DateInfo;
    let end_day = [31,28,31,30,31,30,31,31,30,31,30,31];
    const get_first_day = (in_year,in_month) => {
        if(!(in_year%4) && (in_year % 100 !== 0 || in_year % 400 === 0)) {
            end_day[1] = 29;
        }
        in_year--;
        let days = in_year * 365 + Math.floor(in_year / 4) - Math.floor(in_year / 100) + Math.floor(in_year / 400);
    
        for(let i = 0; i < in_month-1; i++) {
            days+=end_day[i];
        }
        return (days+1) % 7;
    }
    let first_day = get_first_day(year,month);
    let last_day = end_day[month-1];

    // localStorage.setItem('2023_7',JSON.stringify({'1':[{todo:'밥먹기',isclear:false},{todo:'잠자기',isclear:true}]}))
    const FillTable = (start,table) => {
        let local_list = JSON.parse(localStorage.getItem(`${year}_${month}`)) || {};
        let isEmpty = Object.keys(local_list).length === 0 ? true : false;
        let num = 1;
        for(let i = start; i < 7; i++){
            table[0][i].date = num;
            if(isEmpty) {
                table[0][i].todo = '예정 없음';
            } else {
                if(!local_list[num]) {
                    table[0][i].todo = '예정 없음';
                } else {
                    let last_todo = 0;
                    for(let j = 0; j < local_list[num].length; j++){
                        if(local_list[num][j].isclear == false){
                            last_todo++;
                        }
                    }
                    table[0][i].todo = `${last_todo}개 남음` 
                }
            }
            num++;
        }
        tr:for(let i = 1; i < 6; i++){
            for(let j = 0; j < 7; j++){
                table[i][j].date = num;
                if(isEmpty) {
                    table[i][j].todo = '예정 없음';
                } else {
                    if(!local_list[num]) {
                        table[i][j].todo = '예정 없음';
                    } else {
                        let last_todo = 0;
                        for(let k = 0; k < local_list[num].length; k++){
                            if(local_list[num][k].isclear == false){
                                last_todo++;
                            }
                        }
                        table[i][j].todo = `${last_todo}개 남음` 
                    }
                }
                num++;
                if(num > last_day){
                    break tr;
                }
            }
        }
    }
    let table = [
            [{},{},{},{},{},{},{}],
            [{},{},{},{},{},{},{}],
            [{},{},{},{},{},{},{}],
            [{},{},{},{},{},{},{}],
            [{},{},{},{},{},{},{}],
            [{},{},{},{},{},{},{}],
        ]
    FillTable(first_day,table);

    const PlusMonth = () => {
        if(month < 12) {
            setmonth(month+1);
        } else {
            setyear(year+1);
            setmonth(1);
        }
    }

    const MinusMonth = () => {
        if(month > 1) {
            setmonth(month-1);
        } else {
            setyear(year-1);
            setmonth(12);
        }
    }

    const isToday = (value) => {
        if(month === time.getMonth()+1 && year === time.getFullYear() && value === time.getDate()) {
            return true;
        } else {
            return false;
        }
    }

    return(
        <>
            <CalenderStyle>
            <h1>{`${year} / ${month}`}</h1>
            <div>
                <span onClick={MinusMonth}>이전 달</span>
                <span onClick={PlusMonth}>다음 달</span>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>일</td>
                        <td>월</td>
                        <td>화</td>
                        <td>수</td>
                        <td>목</td>
                        <td>금</td>
                        <td>토</td>
                    </tr>
                </thead>
                <tbody>
                {table.map((el,idx)=>{
                    return (
                        <tr key={idx}>
                            {el.map((el,idx)=>{
                                return (
                                    <td key={idx}
                                    style={isToday(el.date) ? {backgroundColor:'skyblue'} : undefined}
                                    onClick={()=>setdate(el.date)}
                                    >
                                    {el.date}
                                    <div>{el.todo}</div>
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>           
            </CalenderStyle>
        </>
    )

}