import styled from 'styled-components';
import { FlexColCenter } from 'styles';

export const StyledWrapper = styled(FlexColCenter)`
  height: 100vh;
  width: 100%;
  &::last-child {
    margin-bottom: 0;
  }
`;
