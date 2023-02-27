import styled from 'styled-components';

export const Message = styled.p`
  padding-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-style: italic;
`;
