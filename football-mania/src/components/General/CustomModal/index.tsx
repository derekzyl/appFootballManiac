import {View} from 'native-base';
import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Box from '../Box';
import {CardWithDepth} from '../Cards';

interface CustomModalProp {
  visible: boolean;
  close: () => void;
  children: ReactNode;
}

const CustomModal = ({visible, close, children}: CustomModalProp) => {
  return (
    <Modal
      style={styles.modal}
      onBackdropPress={close}
      onBackButtonPress={close}
      onSwipeComplete={close}
      swipeDirection="down"
      isVisible={visible}>
      <View padder>
        <Box>
          <CardWithDepth px={false}>{children}</CardWithDepth>
        </Box>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
});

export default CustomModal;
