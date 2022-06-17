import React from 'react';
import Box from '../General/Box';
import HeaderStat from './stat';
import {HeaderAvatar, HeaderContainer} from './style';

const CustomHeader = () => {
  return (
    <Box>
      <HeaderContainer>
        <HeaderAvatar source={require('../../assets/img/avatar.jpg')} />
        <HeaderStat />
      </HeaderContainer>
    </Box>
  );
};

export default CustomHeader;
