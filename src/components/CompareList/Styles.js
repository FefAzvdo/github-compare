import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    margin-top: 30px;
`;

export const Repository = styled.div`
    display: flex;
    flex-direction: column;

    width: 250px;
    background-color: #fff;
    border-radius: 3px;
    margin: 30px 15px;
    padding-bottom: 20px

    header {
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 64px;
    }

    strong {
        font-size: 24px;
        margin-top: 10px;
    }

    small {
        font-size: 14px;
        color: #666;
    }

    ul {
        list-style: none;
    }

    li {
        font-weight: bold;
        padding: 12px 20px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;

        small {
            font-weight: normal;
            font-size: 12px;
            color: #999;
            font-style: italic;
        }

        /* &:nth-child(2n - 1) {
            background: #ccc;
        } */

        img {
            width: 20px;
            height: 20px
        }
    }

    #delete {
        margin: 20px;
        padding: 10px;
        background: #ed3e3e
        color: #ccc;
        border: 0;
        font-size: 12px;
        font-weight: bold;
        border-radius: 3px;
        cursor: pointer;

        :focus {
            background: #f00f0a;
            color: #fff;
        }

        &:hover {
            background: #f00f0a;
            color: #fff;
        }
    }

    #update {
        margin: 0 20px;
        padding: 10px;
        background: #fcff94;
        color: #ccc;
        border: 0;
        font-size: 12px;
        font-weight: bold;
        border-radius: 3px;
        cursor: pointer;

        :focus {
            background: #f1f739;
            color: #fff;
        }

        &:hover {
            background: #f1f739;
            color: #fff;
        }
    }
    
`
