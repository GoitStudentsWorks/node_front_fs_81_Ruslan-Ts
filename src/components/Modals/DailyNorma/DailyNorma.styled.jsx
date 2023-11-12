import styled from 'styled-components';
import theme from '../../../CommonStyle/theme.jsx';

//  tiny: '12px',
//     small: '16px',
//     medium: '18px',
//     large: '26px',
export const WrapperDefinition = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 24px;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-top: 12px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const LabelRate = styled.span`
  font-size: ${theme.fontSizes.small};
  line-height: calc(20 / 16);
`;

export const LabelDefinition = styled.span`
  font-size: ${theme.fontSizes.medium};
  line-height: calc(24 / 18);
  color: ${theme.colors.primaryAccent};
`;
export const ContainerDefinition = styled.p`
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
  align-items: center;
`;
export const NoticeWrapper = styled.p`
  border-radius: 10px;
  border: 1px solid ${theme.colors.secondaryLightBlue};
  padding: 9px;
  margin-top: 12px;

  color: ${theme.colors.secondaryGray};
  font-size: ${theme.fontSizes.tiny};
  line-height: calc(16 / 12);

  text-align: justify;

  span {
    color: ${theme.colors.primaryAccent};
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FormLabel = styled.label`
  font-size: 16px;
  line-height: calc(20 / 16);
  color: ${theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const WrapperRadio = styled.div`
  display: flex;
  gap: 24px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const FormLabelRadio = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    width: 14px;
    height: 14px;
    background-color: transparent;
    border-radius: 100%;
    border: 1px solid ${theme.colors.primaryAccent};
    cursor: pointer;

    transition: ${theme.animation.cubicBezier};
  }
  input:checked + div {
    background-color: ${theme.colors.primaryAccent};
    box-shadow: inset 0 0 0 3px white;
  }
  span {
    cursor: pointer;
  }
`;
export const FormLabelRadio2 = styled.label`
  font-size: 16px;
  line-height: calc(20 / 16);
  color: ${theme.colors.primaryDark};
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const FormaCalculation = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const TitlePart = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);

  margin-top: 24px;
  margin-bottom: 16px;
`;

export const WrapperResult = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 6px;
  align-items: center;
`;

export const TitleResult = styled.h4`
  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 400;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ValueResult = styled.span`
  white-space: nowrap;
  color: ${theme.colors.primaryAccent};
  font-size: 18px;
  font-weight: 700;
  line-height: calc(24 / 18);
  padding-right: 15px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const ddddd = styled.span`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
