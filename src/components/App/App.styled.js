import styled from 'styled-components';

export const Container = styled.div`
  margin: ${p => p.theme.space[5]}px auto;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[4]}px;

  min-width: 400px;
  max-width: 550px;
  overflow: hidden;
  box-shadow: 6px 6px 4px 0px ${p => p.theme.colors.shadow},
    -4px -4px 4px ${p => p.theme.colors.shadow}; ;
`;

export const Title = styled.h2`
  margin-left: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  /* color: ${p => p.theme.colors.white}; */
  text-shadow: 6px 6px 6px ${p => p.theme.colors.black};
  text-align: center;
`;
