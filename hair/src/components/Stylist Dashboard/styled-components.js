import styled from "styled-components";

export const DashNav = styled.nav`
    background: #ba2a5f;
    display: flex;
    justify-content: space-evenly;
    margin: 60px 0;
`;
;
export const DashLink = styled.a`
    font-size: 20px;
    padding: 20px 0px ;
`;

export const H1 = styled.h1`
    color: #032535;
    text-align: center;
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

export const PostImage = styled.img`
    background-color: lightgrey;
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
    justify-content: center;
    width: 120px;
    margin: 40px auto 15px;
`;

//Form Styling

export const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    margin-top: 40px;
    padding-top: 20px;

`;

export const PostForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
`;

export const PostFormGroup = styled.div`
    display: flex;
    flex-direction: column;
   
`;

export const PostLabel = styled.label`
    font-size: 18px;
    margin-top: 10px;
    font-weight: 600;
`;

export const PostInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 10px 0;
`;

export const FormButton = styled.button`
    margin: 40px auto;
    width: 120px;
    background:#ac8daf;
    border: none;
  background-image: linear-gradient(to top, #540e33, #741743, #962051, #ba2a5f, #de356a);
  color: white;
  font-size: 20px;
  padding: 8px 10px;
  
  &:hover{
    background: #540e33;
  color: #fdc8b7;
  
  background-image: linear-gradient(to bottom, #540e33, #741743, #962051, #ba2a5f, #de356a);
  }
`;