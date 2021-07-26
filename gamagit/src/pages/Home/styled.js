import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    display: block;
    text-align: center;
`

export const Input = styled.input`
    height: 2rem;
    padding: 0 .5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem 0 0 0.5rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    height: calc(2rem + 2px);
    border: 0px solid #ddd;
    border-radius: 0 0.5rem 0.5rem 0;
    padding: 1px 7px;
    background: #000;
    color: #fff;
    cursor: pointer;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`

export const errorMessage = styled.span`
    font-size: .7rem;
    font-weight: 600;
    display: block;
    color: red;
    margin-top: .3rem;
`


