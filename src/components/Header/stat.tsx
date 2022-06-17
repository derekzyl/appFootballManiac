import Check from '@src/assets/svg/check.svg';
import Life from '@src/assets/svg/live.svg';
import Plus from '@src/assets/svg/plus.svg';
import Retry from '@src/assets/svg/retry.svg';
import React from 'react';
import {HeaderStatItem, HeaderStatItemText, HeaderStatContainer} from './style';

const items = [
  {icon: Life, text: 'x5'},
  {
    icon: Check,
    text: 'x3',
  },
  {
    icon: Retry,
    text: 'x1',
  },
  {
    icon: Plus,
  },
];

const HeaderStat = () => {
  return (
    <HeaderStatContainer>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <HeaderStatItem key={index}>
            {Icon && <Icon />}
            {item.text && <HeaderStatItemText>{item.text}</HeaderStatItemText>}
          </HeaderStatItem>
        );
      })}
    </HeaderStatContainer>
  );
};

export default HeaderStat;
