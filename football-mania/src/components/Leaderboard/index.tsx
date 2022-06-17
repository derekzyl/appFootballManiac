import React from 'react';
import {CustomButton} from '../General/Button';
import {ButtonVariant} from '../General/Button/variants';
import {CardWithDepth} from '../General/Cards';
import {leaderboards} from './data';
import LeaderboardFirst from './first';
import LeaderboardItem from './item';
import LeaderboardRunnerUp from './runner-up';
import {
  LeaderboardButton,
  LeaderboardButtonContainer,
  LeaderboardList,
  LeaderboardTopScorers,
} from './style';

const LeaderboardComponent = () => {
  const items = leaderboards.sort((a, b) => b.points - a.points);
  const top = items.slice(0, 3);
  const others = items.slice(2);

  return (
    <CardWithDepth bR={12}>
      <LeaderboardButtonContainer>
        <LeaderboardButton>
          <CustomButton variant={ButtonVariant.brown} text="All time" />
        </LeaderboardButton>
        <LeaderboardButton>
          <CustomButton variant={ButtonVariant.black} text="Weekly" />
        </LeaderboardButton>
        <LeaderboardButton>
          <CustomButton variant={ButtonVariant.black} text="Daily" />
        </LeaderboardButton>
      </LeaderboardButtonContainer>

      <LeaderboardTopScorers>
        <LeaderboardRunnerUp item={top[1]} />
        <LeaderboardFirst item={top[0]} />
        <LeaderboardRunnerUp item={top[2]} third />
      </LeaderboardTopScorers>

      <LeaderboardList>
        {others.map((item, index) => (
          <LeaderboardItem index={index + 4} item={item} key={index} />
        ))}
      </LeaderboardList>
    </CardWithDepth>
  );
};

export default LeaderboardComponent;
