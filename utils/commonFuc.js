import {Alert, Platform, ToastAndroid} from 'react-native';

const commonFuc = {
  notifyMessage: message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
  },
  IsEmpty: obj => {
    if (!obj) {
      return true;
    }
    return Object.keys(obj).length === 0;
  },
};
export default commonFuc;
