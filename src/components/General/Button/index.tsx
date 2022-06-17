import {View} from 'native-base';
import React from 'react';
import styled from 'styled-components';
import {BlockContainer, BlockDepth, BlockOuter} from '../Cards/style';
import {StyledText} from '../Text';
import {ButtonVariant, getBtnColors} from './variants';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';

export interface CustomButtonProp {
  text?: string;
  children?: any;
  variant: ButtonVariant;
  textColor?: string;
  iconName?: string;
  onPress?: () => void;
}

export const CustomButton = ({
  text,
  children,
  variant = ButtonVariant.green,
  iconName,
  onPress,
}: CustomButtonProp) => {
  const {backgroundColor, shadowColor, color, border} = getBtnColors(variant);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <BlockContainer>
        <BlockOuter border={border} bgColor={backgroundColor}>
          {text ? (
            <ButtonInner>
              {iconName && (
                <ButtonIcon>
                  <Icons size={22} name={iconName} color={color} />
                </ButtonIcon>
              )}
              <ButtonText color={color}>{text}</ButtonText>
            </ButtonInner>
          ) : (
            <>{children}</>
          )}
        </BlockOuter>
        <BlockDepth bgColor={shadowColor} />
      </BlockContainer>
    </TouchableOpacity>
  );
};

export const ButtonIcon = styled(View)`
  margin-right: 20px;
`;

export const ButtonText = styled(StyledText)<{color?: string}>`
  text-align: center;
  font-size: 20px;
  color: ${({color}) => (color ? color : '#000')};
  font-weight: 300;
`;

export const ButtonInner = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
