import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  margin-bottom: 50px;
  border: 1px solid gray;
  padding: 10px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-left: 10px;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};

  &:focus {
    outline: none;
    border-color: ${({ invalid }) => (invalid ? 'red' : '#4caf50')};
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 10px;
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const ContactNumber = styled.span``;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FilterInput = styled.input`
  padding: 8px;
  font-size: 16px;
`;
