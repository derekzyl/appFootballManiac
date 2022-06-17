import React, {useState} from 'react';
import Box from '../General/Box';
import {CustomButton} from '../General/Button';
import {ButtonVariant} from '../General/Button/variants';
import {CardWithDoubleDepth} from '../General/Cards';
import CircularProgress from '../General/Progress';
import PlayHeader from '../Header/play';
import PlayingPoint from './points';
import ScoreModal from './score-modal';
import {
  PlayContainer,
  PlayContent,
  PlayExtraButton,
  PlayExtraButtonFlex,
  PlayMeta,
  ProgressContainer,
  QuestionNumber,
  QuestionText,
} from './style';

const options = [
  {
    text: 'Liverpool',
  },
  {
    text: 'Nothingham Forest',
  },
  {
    text: 'Manchester United',
  },
];

const PlayMain = () => {
  const [resultModal, setResultModal] = useState(false);
  const handleOpenModal = () => {
    setResultModal(true);
  };
  const handleCloseModal = () => {
    setResultModal(false);
  };
  return (
    <>
      <ScoreModal close={handleCloseModal} visible={resultModal} />
      <PlayContainer>
        <PlayContent>
          <PlayHeader />
          <Box>
            <CardWithDoubleDepth>
              <Box>
                <PlayMeta>
                  <QuestionNumber>Question 1/10</QuestionNumber>
                  <PlayingPoint />
                </PlayMeta>
              </Box>
              <ProgressContainer>
                <Box>
                  <CircularProgress value={80} />
                </Box>
              </ProgressContainer>
              <Box>
                <QuestionText>
                  Which team won the first Premier League title?
                </QuestionText>
              </Box>
              {options.map((opt, index) => (
                <Box key={index}>
                  <CustomButton
                    onPress={handleOpenModal}
                    variant={ButtonVariant.white}
                    text={opt.text}
                  />
                </Box>
              ))}
            </CardWithDoubleDepth>

            <PlayExtraButtonFlex>
              <PlayExtraButton>
                <CustomButton variant={ButtonVariant.brown} text="Double" />
              </PlayExtraButton>
              <PlayExtraButton>
                <CustomButton variant={ButtonVariant.black} text="Pass" />
              </PlayExtraButton>
            </PlayExtraButtonFlex>
          </Box>
        </PlayContent>
      </PlayContainer>
    </>
  );
};

export default PlayMain;
