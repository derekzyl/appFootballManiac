import PlayLayout from '@src/components/Layout/play';
import PlayMain from '@src/components/Play';
// import PlayLoading from '@src/components/Play/loading';
import React from 'react';

const PlayScreen = () => {
  return (
    <PlayLayout>
      {/* <PlayLoading /> */}
      <PlayMain />
    </PlayLayout>
  );
};

export default PlayScreen;
