import styled from 'styled-components';

export const ListEl = styled.li`
  list-style: none;
  border-radius: 5px;
  padding: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: green;
  border: 1px solid #a4a6a8;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  padding: 0 34px;
  background-color: #ebf2fc;
  border: 1px solid #a4a6a8;
  border-radius: 5px;
`;

export const TextEl = styled.div`
  margin-right: 10px;
  padding: 10px 0;
`;

export const Button = styled.button`
  background-color: #fff8dc;
  border-radius: 5px;
  border: none;
  color: #000;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
