import styled from 'styled-components';

export const Switcher = styled.button`
  position: absolute;
  top: ${p => p.theme.space[4]}px;
  right: ${p => p.theme.space[6]}px;
  color: ${p => p.theme.colors.white};
`;
