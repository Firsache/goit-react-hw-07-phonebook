import styled from 'styled-components';

export const FormComponent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  .icon {
    position: absolute;
    top: 30px;
    left: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.icon};
  }
`;

export const Span = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Input = styled.input`
  padding: ${p => p.theme.space[2]}px;
  padding-left: 26px;
  width: 250px;

  color: ${p => p.theme.colors.text};
  border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.space[2]}px;

  background-color: transparent;
  font-size: ${p => p.theme.fontSizes.m};
  transition: border-color ${p => p.theme.transition},
    outline-color ${p => p.theme.transition};

  &:hover {
    border-color: ${p => p.theme.colors.accent};
    outline-color: ${p => p.theme.colors.accent};
    background-color: transparent;
  }
  &:focus {
    border-color: ${p => p.theme.colors.accent};
    outline-color: ${p => p.theme.colors.accent};
    background-color: transparent;
  }
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[2]}px;
  width: 120px;
  height: ${p => p.theme.space[5]}px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body}px;
  text-align: center;

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.space[1]}px solid ${p => p.theme.colors.accent};
  outline: none;

  transition: background-color ${p => p.theme.transition},
    color ${p => p.theme.transition}, transform ${p => p.theme.transition};

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${p => p.theme.colors.text};
    transform: translateY(-2px);
  }
`;
