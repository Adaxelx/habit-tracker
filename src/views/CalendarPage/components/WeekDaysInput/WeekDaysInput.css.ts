import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: 100%;
`;

export const StyledWeekDay = styled.option`
  background-color: ${({ theme }) => theme.colors.common.white};
  border: 1px solid black;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.sizes.m};
`;
