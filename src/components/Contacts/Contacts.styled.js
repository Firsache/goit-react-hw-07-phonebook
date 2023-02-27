import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${p => p.theme.space[4]}px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  gap: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;
