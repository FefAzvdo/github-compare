// @ts-nocheck
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;

    
`;

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;

    input {
        flex: 1;
        height: 55px;
        padding: 0 20px;
        background: #fff;
        border: 0;
        font-size: 18px;
        border-radius: 3px;

        border: ${(props) => (props.withError ? "2px solid #f00" : 0)};
        color: ${(props) => (props.withError ? "#f00" : "#444")};

        &::placeholder{
            color: ${(props) => (props.withError ? "#f00" : "#444")};
        }
    }

    

    button {
        width: 80px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #0faaa1;
        color: #ccc;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;
        cursor: pointer;

        :focus {
            background: #52d89f;
            color: #fff;
        }

        &:hover {
            background: #52d89f;
            color: #fff;
        }
    }
`;
