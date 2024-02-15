import {
  Alert,
  Platform,
  ToastAndroid,
} from 'react-native';

const commonFuc = {
  notifyMessage: message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }
  },
};
export default commonFuc;
