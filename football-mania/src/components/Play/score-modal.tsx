import Confetti from '@assets/svg/confetti.svg';
import React from 'react';
import Box from '../General/Box';
import {CustomButton} from '../General/Button';
import {ButtonVariant} from '../General/Button/variants';
import CustomModal from '../General/CustomModal';
import PlayingPoint from './points';
import {
  ScoreButtons,
  ScoreModalContent,
  ScoreModalIcon,
  ScoreModalText,
  ScoreModalTop,
  ScorePoint,
} from './style';

interface ScoreModalProp {
  visible: boolean;
  close: () => void;
}

const ScoreModal = ({visible, close}: ScoreModalProp) => {
  return (
    <CustomModal visible={visible} close={close}>
      <ScoreModalContent>
        <ScoreModalTop>
          <Box>
            <ScoreModalIcon>
              <Confetti />
            </ScoreModalIcon>
            <ScoreModalText>Your score is</ScoreModalText>
            <ScorePoint>
              <PlayingPoint value={80} alt />
            </ScorePoint>
          </Box>
        </ScoreModalTop>
        <ScoreButtons>
          <Box>
            <CustomButton variant={ButtonVariant.yellow} text="Home" />
          </Box>
          <Box>
            <CustomButton variant={ButtonVariant.brown} text="Leaderboard" />
          </Box>
          <Box>
            <CustomButton
              variant={ButtonVariant.yellow}
              text="Share with friends"
            />
          </Box>
        </ScoreButtons>
      </ScoreModalContent>
    </CustomModal>
  );
};

export default ScoreModal;
