import styled from "styled-components";

export const StyledContainer = styled.main `
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 92vh ;


   

    section {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        width:50%;

        @media (min-width: 300px){
          width: 100%;
          height: 100%;
     }
    }


`

export const StyledRightSide = styled.section `
        img {
            width: 100%;
            height: 60%;
        }
`

export const StyledLeftSide = styled.section `

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        h1 {
            font-size: 30px;
            text-align: center;
        }

        p{
            font-size: 15px;
            text-align: center;
        }

        div{
            padding: 10px;
            display: flex;
            margin-top: 15px;
            gap: 15px;

        button {
            width: 150px;
            height: 60px;
            border: 1px solid;
            border-radius: 45px;
            transition: all 0.3s;
            cursor: pointer;
            background: white;
            font-size: 15px;
            font-weight: 550;
            }

        button:hover {
            background: black;
            color: white;
            font-size: 15px;
            }
        }
`