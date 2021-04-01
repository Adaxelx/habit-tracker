import styled from 'styled-components';
import { FlexColCenter } from 'styles';

export const StyledWrapper = styled(FlexColCenter)`
  height: 100vh;
  width: 100%;
  padding: 0 1rem;
  @media (min-width: ${({ theme }) => theme.media.tablet.s}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
  }
`;

export const StyledContentWrapper = styled(FlexColCenter)`
  @media (min-width: ${({ theme }) => theme.media.tablet.s}) {
    margin-right: ${({ theme }) => theme.margin.l};
  }
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
