import styled from 'styled-components';
// import { getKey } from 'utils/objectsFunctions';

// const topLeft = css`
//   top: 0;
//   left: 0;
// `;

// const topRight = css`
//   top: 0;
//   right: 0;
// `;

// const bottomLeft = css`
//   bottom: 0;
//   left: 0;
// `;

// const bottomRight = css`
//   bottom: 0;
//   right: 0;
// `;

// interface Position {
//   topLeft: FlattenSimpleInterpolation;
//   topRight: FlattenSimpleInterpolation;
//   bottomLeft: FlattenSimpleInterpolation;
//   bottomRight: FlattenSimpleInterpolation;
//   [key: string]: FlattenSimpleInterpolation;
// }

// const positionObject: Position = { topLeft, topRight, bottomLeft, bottomRight };

// interface DotProps {
//   topLeft?: boolean;
//   topRight?: boolean;
//   bottomLeft?: boolean;
//   bottomRight?: boolean;
//   [key: string]: boolean | undefined;
// }

/* background-color: ${({ theme, ...rest }) => theme.colors.nav[getKey(rest)]};
  ${({ theme, ...rest }) => positionObject[getKey(rest)]} */

interface ClicableProps {
  open: boolean;
}

export const StyledNavButton = styled.button<ClicableProps>`
  position: fixed;
  height: 50px;
  width: 50px;
  top: ${({ theme }) => theme.margin.sm};
  background-color: transparent;
  border: none;
  right: ${({ theme }) => theme.margin.sm};
  padding: 0;
  ${({ open }) => open && `transform: rotate(-45deg);`}
  transition: ${({ theme }) => `${theme.time.medium}ms`};
  z-index: ${({ theme }) => theme.zIndex.max};
  &:focus {
    outline: none;
  }
`;

const StyledDot = styled.div<ClicableProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  opacity: ${({ open }) => (open ? '0' : '1')};
  transition: ${({ theme }) => `${theme.time.medium}ms`};
`;

export const StyledTLDot = styled(StyledDot)`
  background-color: ${({ theme }) => theme.colors.nav.topLeft};
  top: 0;
  left: 0;
`;

export const StyledTRDot = styled(StyledDot)`
  background-color: ${({ theme }) => theme.colors.nav.topRight};
  top: 0;
  right: 0;
`;

export const StyledBLDot = styled(StyledDot)`
  background-color: ${({ theme }) => theme.colors.nav.bottomLeft};
  bottom: 0;
  left: 0;
`;

export const StyledBRDot = styled(StyledDot)`
  background-color: ${({ theme }) => theme.colors.nav.bottomRight};
  bottom: 0;
  right: 0;
`;

export const StyledLine = styled.div<ClicableProps>`
  position: absolute;
  height: 3px;
  width: 50px;
  background-color: ${({ theme }) => theme.colors.error};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: ${({ theme }) => `${theme.time.medium}ms`};
`;

export const StyledRotatedLine = styled(StyledLine)<ClicableProps>`
  transform: rotate(90deg);
  top: 50%;
`;
