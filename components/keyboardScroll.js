import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ScreenWrapper from './screenWrapper';

export default function KeyboardScroll({children, height}) {
  const extraHeight = height || 170;
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraHeight={extraHeight}
      contentContainerStyle={style.contentContainerStyle}>
      <ScreenWrapper>{children}</ScreenWrapper>
    </KeyboardAwareScrollView>
  );
}

const style = {
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
};
