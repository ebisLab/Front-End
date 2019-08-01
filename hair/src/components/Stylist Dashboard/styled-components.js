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
    box-shadow: -2px 7px 11px -3px rgba(173,173,173,.50);
    margin: 10px 20px 20px;
    width: 260px;
`;

export const PostImage = styled.div`
    background-color: #f1d4d4;
    height: 180px;
    width: 260px;
    box-sizing: border-box;
`;

export const PostBody = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding-left: 15px;
`;

export const Descript = styled.p`
    color: grey;
    font-size: 18px;
`;

export const BtnContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 120px;
    margin: 40px auto;
`;