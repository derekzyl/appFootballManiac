import React, {useState} from 'react';
import {CardWithDepth} from '../General/Cards';
import {CustomButton} from '@src/components/General/Button';
import Box from '../General/Box';
import {ButtonVariant} from '../General/Button/variants';
const SettingsContent = () => {
  const [active, setActive] = useState({
    sound: false,
    music: false,
  });

  const onStateChange = (name: string, state: boolean) => {
    setActive({
      ...active,
      [name]: state,
    });
  };

  const options = [
    {
      name: 'Sound',
      state: {active: 'On', inactive: 'Off'},
      path: '',
      active: active.sound,
      onChange: onStateChange,
      variant: ButtonVariant.green,
    },
    {
      name: 'Music',
      state: {active: 'On', inactive: 'Off'},
      path: '',
      active: active.music,
      onChange: onStateChange,
      variant: ButtonVariant.green,
    },
    {
      name: 'Statistics',
      path: '',
      variant: ButtonVariant.brown,
    },
    {
      name: 'Share App',
      path: '',
      variant: ButtonVariant.yellow,
    },
    {
      name: 'About',
      path: '',
      variant: ButtonVariant.brown,
    },
    {
      name: 'Terms and Conditions',
      path: '',
      variant: ButtonVariant.yellow,
    },

    {
      name: 'Exit App',
      path: '',
      variant: ButtonVariant.brown,
    },
  ];

  return (
    <CardWithDepth bR={12}>
      {options.map((option, _) => {
        if (!option.state) {
          return (
            <Box padding="xs" key={_}>
              <CustomButton variant={option.variant} text={`${option.name}`} />
            </Box>
          );
        }
        return (
          <Box padding="xs" key={_}>
            <CustomButton
              variant={option.active ? option.variant : ButtonVariant.navy}
              onPress={() => {
                option.onChange &&
                  option.onChange(option.name.toLowerCase(), !option?.active);
              }}
              text={`${option.name} - ${
                option.active ? option.state.active : option.state?.inactive
              }`}
            />
          </Box>
        );
      })}
    </CardWithDepth>
  );
};

export default SettingsContent;
