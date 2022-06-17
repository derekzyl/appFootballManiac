import Progress from '@assets/svg/progress.svg';
import React from 'react';
import Box from '../General/Box';
import {CardWithDoubleDepth} from '../General/Cards';
import {
  LoadingContainer,
  LoadingFlex,
  LoadingProgressContainer,
  LoadingText,
  PlayContent,
  ProgressIcon,
  ProgressText,
  ProgressTextArea,
} from './style';

const PlayLoading = () => {
  return (
    <LoadingContainer>
      <PlayContent>
        <Box>
          <CardWithDoubleDepth height={440}>
            <LoadingFlex>
              <LoadingText>Loading questions</LoadingText>
              <LoadingProgressContainer>
                <ProgressTextArea>
                  <ProgressText>25</ProgressText>
                </ProgressTextArea>
                <ProgressIcon>
                  <Progress width="100%" height="100%" />
                </ProgressIcon>
              </LoadingProgressContainer>
            </LoadingFlex>
          </CardWithDoubleDepth>
        </Box>
      </PlayContent>
    </LoadingContainer>
  );
};

export default PlayLoading;
