import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px 1px 5px black;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const AddButton = styled.button`
  width: 200px;
  height: 35px;
  background-color: darkcyan;
  color: white;
  border-radius: 10px;
  border: none;
  font-weight: bolder;
  box-shadow: 1px 1px 5px black;

  &:hover{
    box-shadow: 1px 1px 10px black;
  }
`;

export const BoxInput = styled.div`
  width: 20%;
  margin: 0px 1%;
`;

export const TitleInput = styled.h4`
margin: 10px 1%;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
`;
