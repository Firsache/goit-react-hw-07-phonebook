import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: ${p => p.theme.space[4]}px;
  padding-top: 0;

  &:last-of-type {
    padding-bottom: 0px;
  }
`;

export const Title = styled.h2`
  padding-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};

  text-shadow: 3px 3px 3px ${p => p.theme.colors.accent};
  text-align: ${({ titlePosition }) => titlePosition};
`;
