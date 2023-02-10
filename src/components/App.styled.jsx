import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhoneTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.mainColorText};
  display: flex;
  margin: ${props => props.theme.space.m} ${props => props.theme.space.xs};
  align-items: center;
`;

export const PhoneContacts = styled.h2`
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.mainColorText};
  display: flex;
  margin: ${props => props.theme.space.m} ${props => props.theme.space.xs};
  align-items: center;
`;
