import styled from "styled-components";

export const DashNav = styled.nav`
    border: 2px pink solid;
    display: flex;
    justify-content: space-evenly;
    margin: 60px;
`;

export const DashLink = styled.a`
    font-size: 20px;
    padding: 10px 0px ;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    margin-top: 40px;
    padding-top: 20px;

`;

export const PostCard = styled.div`
    border: 1px lightgray solid;
    margin: 10px 20px 20px;
    width: 260px;
`;

export const PostImage = styled.div`
    background-color: #f1d4d4;
    height: 200px;
    width: 260px;
    box-sizing: border-box;
`;
