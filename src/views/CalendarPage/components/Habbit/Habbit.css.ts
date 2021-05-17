import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.margin.xs};
`;

interface LabelProps {
  color: string;
}

export const StyledLabel = styled.small<LabelProps>`
  background-color: ${({ color }) => color};
  padding: ${({ theme }) => theme.margin.s};
  width: auto;
  border-radius: 20px;
`;

export const StyledHabbit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 ${({ theme }) => theme.margin.s};
  border-left: 1px solid ${({ theme }) => theme.colors.tile.border};
  margin: 0 ${({ theme }) => theme.margin.s};
  margin-top: ${({ theme }) => theme.margin.xs};
  overflow-y: scroll;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.ml};
  margin-bottom: ${({ theme }) => theme.margin.xs};
  margin-top: 0;
`;

export const StyledTime = styled.p`
  color: gray;
  margin-bottom: ${({ theme }) => theme.margin.xs};
`;

export const StyledDescription = styled.p`
  text-align: justify;
`;
