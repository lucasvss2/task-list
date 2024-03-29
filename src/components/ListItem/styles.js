import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  input{
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  label{
    color: #CCC;
    text-decoration: ${props => props.done ? "line-through" : "initial"};
  }
`;