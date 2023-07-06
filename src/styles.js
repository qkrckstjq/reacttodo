import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    li {
        margin-bottom:15px;
    }
`
export const Headstyle = styled.header`
    width:100vw;
    height:15vh;
    background-color:#eee;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
    text-align:center;
`

export const Mainstyle = styled.main`
    width:100%;
    height:85vh;
    background-color:gray;
    display:flex;
    justify-content:space-around;
    align-items:center;

    > div {
        width:45%;
        height:90%;
        background-color:#eee;
        border-radius:15px;
    }

    > div:nth-child(1) {
        display:flex;
        flex-direction:column;
        > div {
            flex:1;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            >h2{
                font-size:30px;
            }
            >h3{
                color:gray;
            }
        }

        > button {
            width:100px;
        }

        > ul {
            list-style-type : none;
            flex:6;
            overflow:scroll;
            display:flex;
            flex-direction:column;
            align-items:center;
            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
`
export const Graph = styled.div`
    margin-right:60px;
    display:flex;
    justify-content:space-around;
    align-items:end;
    position:relative;
    overflow:hidden;
    >span {
        position:absolute;
        width:100%;
        height: 2px;
        background-color:black;
        bottom:70px;
    }

    > div {
        position:relative;
        width:50px;
        height:50px;
        background-color:gray;
        margin-bottom:72px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        transition:all 1s;
        &:hover{
            >div:nth-child(4) {
                visibility:visible;
                opacity:1;
            }
        }
        > div:nth-child(1) {
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:50%;
            background-color:lightblue;
            transition:all 1s;
        }
        > span:nth-child(2) {
            position:absolute;
            bottom:-30px;
            font-size:20px;
        }
        > span:nth-child(3) {
            position:absolute;
            bottom:-50px;
            font-size:20px;
            font-weight:600;
        }
        > div:nth-child(4){
            position:absolute;
            display:flex;
            visibility:hidden;
            opacity:0;
            justify-content:center;
            align-items:center;
            border-radius:10px;
            width:60px;
            height:50px;
            background-color:white;
            border:1px solid black;
            top:-20px;
            left:-20px;
            transition:all 0.5s
        }
    }

    > div:nth-child(1){
        position:absolute;
        top:5px;
        left:5px;
        width:20px;
        background-color:#eee;
        >button{
            margin-bottom:5px;
            width:100%;
            height:50%;
            border-radius:5px;
            border:0px;
            background-color:lightgray;
            &:hover{
                cursor: pointer;
            }
        }
    }
    
`

export const StyleLi = styled.li`
    display:flex;
    width:90%;
    height:50px;
    min-height:50px;
    align-items:center;
    justify-content:center;
    
    > button {
        display:flex;
        align-items:center;
        justify-content:center;
        border:0px;
        overflow:hidden;
        flex:0;
        background-color:#eee;
        &:hover{
            cursor: pointer;
        }
        &:nth-child(1) {
            flex:0;
            width:30px;
            height:30px;
            border-radius:15px;
            background-color:white;
            font-size:25px;
            &:hover{
                background-color:lightgray;
            }
        }
        transition:all 0.1s;
        
    }

    > input:nth-child(2) {
        flex:12;
        height:100%;
        font-size:25px;
        outline:none;
        border:0px solid black;
        border-radius:15px;
        padding-left:15px
    }

    >button:nth-child(3){
        flex:0;
        border:0;
        font-size:20px;
    }
`

export const StyleAddLi = styled.li`
    text-align:center;
    width:90%;
    height:50px;
    min-height:50px;
    >button {
        width:100%;
        height:100%;
        font-size:25px;
        border-radius:15px;
        &:hover{
            cursor: pointer;
        }
    }
`



export const AsideStyle = styled.aside`
    position:fixed;
    top:0px;
    right:-650px;
    width:700px;
    height:100vh;
    z-index:50;
    background-color:rgba(0,0,0,0.7);
    >div{
        display:none;
    }
    &:hover {
        right:0px;
        > div {
            display:flex;
        }
    }
    transition:0.5s;
`
export const CalenderStyle = styled.div`
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    z-index:60;
    >h1{
        letter-spacing:5px;
        color:#eee;
    }

    >div:nth-child(2) {
        width:90%;
        display:flex;
        justify-content:space-between;
        >span{
            color:gray
        }
        >span:hover{
            cursor: pointer;
            color:#eee;
            transition:0.5s
        }

        margin-bottom:15px;
    }

    > table > thead > tr > td {
        width:90px;
        height:90px;
    }   

    > table > tbody > tr > td{
        border:1px solid black;
        width:90px;
        height:90px;
        border-radius:10px;
        position:relative;
        &:hover{
            cursor: pointer;
            background-color:gray;
            transition:0.3s;
            > div{
                display:flex;
            }
        }
        > div {
            position:absolute;
            justify-content:center;
            align-items:center;
            top:-30px;
            left:-30px;
            width:70px;
            height:40px;
            border-radius:15px;
            background-color:#eee;
            display:none;
            font-size:12px;
        }
    }
`
