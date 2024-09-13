import styled from "styled-components";

export const StyledHeader = styled.section `
        display: flex;
        justify-content: space-between;

        div {
            display: flex;
            align-items: center;
            padding: 15px;


            i {
                padding:10px ;
            }
        }


        nav{
            display: flex;
            align-items: center;


            ul{
                display: flex;
                align-items: center;
                list-style: none;
                gap: 20px;
                padding: 10px;
                font-size: 18px;
                font-weight: 550;
            }

            button {
                width: 125px;
                height: 60px;
                border: 1px solid;
                border-radius: 45px;
                transition: all 0.3s;
                cursor: pointer;
                background: white;
                font-size: 15px;
                font-weight: 550;
                margin: 0 9px 0 0;
            }

        button:hover {
            background: black;
            color: white;
            font-size: 15px;
            }
        }

`