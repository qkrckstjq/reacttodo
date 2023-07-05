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
    position:relative;
    width:100vw;
    height:15vh;
    background-color:#eee;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
    text-align:center;

    > h1 {
        
    }

    > button {
        position:absolute;
        right:150px;
        font-size:40px;
        border:0px;
        color:gray;
        &:hover {
            color:black;
            transition:0.5s
        }
    }
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

export const StyleLi = styled.li`
    display:flex;
    width:90%;
    height:50px;
    transition:all 0.1s;
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
