import styled from 'styled-components';

export const FlexColCenter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledWrapper = styled(FlexColCenter)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.l};
  margin: ${({ theme }) => theme.margin.sm} 0;
  @media (max-width: ${({ theme }) => theme.media.phone.s}) {
    font-size: ${({ theme }) => theme.font.sizes.ml};
  }
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: justify;
  font-size: ${({ theme }) => theme.font.sizes.m};
  margin-bottom: ${({ theme }) => theme.margin.l};
  @media (max-width: ${({ theme }) => theme.media.phone.s}) {
    font-size: ${({ theme }) => theme.font.sizes.sm};
  }
`;

export const StyledSeparator = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.sm};
  margin: ${({ theme }) => theme.margin.s};
`;
