import {View, StatusBar} from 'react-native';
import React from 'react';

export default function ScreenWrapper({children}) {
  let heightStatusBar = StatusBar.currentHeight;
  return <View style={{paddingTop: heightStatusBar}}>{children}</View>;
}
