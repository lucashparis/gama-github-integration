import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    font-family: sans-serif;
    color: #333;
` 

export const List = styled.ul`
    list-styled: none;
    padding: 0;
    font-family: sans-serif;
`

export const ListItem = styled.li`
    margin: .5rem 0; 
    padding: 2px 2px 2px 10px;
    font-size: 1.5rem;
    color: white;
    background-color: #333;
`

export const LinkHome = styled(Link)`
    width: 4rem;
    display: block;
    text-align: center;
    text-decoration: none; 
    margin: 2rem auto;
    padding: .5rem 0;
    border-radius: 0.5rem;
    background-color: #333;
    color: white;
`