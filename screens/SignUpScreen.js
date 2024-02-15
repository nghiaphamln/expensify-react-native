import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import {useNavigation} from '@react-navigation/native';
import authApi from '../api/authApi';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../redux/globalSlice';
import commonFuc from '../utils/commonFuc';
import LoadingSpinner from '../components/loadingSpinner';

export default function SignUpScreen() {
  const {isLoading} = useSelector(state => state.global);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const handleInput = () => {
    if (email.length === 0 || password.length === 0 || name.length === 0) {
      setDisableSubmit(true);
      return;
    }

    setDisableSubmit(false);
  };

  const onSignUp = async () => {
    dispatch(setLoading(true));
    try {
      let account = {username: email, password, name};
      await authApi.register(account);

      Snackbar.show({
        text: 'Tạo tài khoản thành công',
        backgroundColor: colors.success,
      });

      navigation.navigate('Welcome');
    } catch (error) {
      if (!commonFuc.IsEmpty(error.response.data.message)) {
        Snackbar.show({
          text: Object.values(error.response.data.message).join(', '),
          backgroundColor: colors.warning,
        });
        return;
      }
      Snackbar.show({
        text: 'Đã xảy ra lỗi, vui lòng thử lại',
        backgroundColor: colors.danger,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ScreenWrapper>
      <LoadingSpinner isLoading={isLoading} />
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute left-0 top-0">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Đăng ký
            </Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-64 w-64"
              source={require('../assets/images/signup.png')}
            />
          </View>

          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} px-1 text-lg font-bold`}>
              Email
            </Text>
            <TextInput
              className="p-4 bg-white rounded-2xl mb-3"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              onChangeText={value => {
                setEmail(value);
                handleInput();
              }}
            />
            <Text className={`${colors.heading} px-1 text-lg font-bold`}>
              Mật khẩu
            </Text>
            <TextInput
              className="p-4 bg-white rounded-2xl mb-3"
              onSubmitEditing={() => {
                this.thirdInput.focus();
              }}
              ref={input => {
                this.secondTextInput = input;
              }}
              onChangeText={value => {
                setPassword(value);
                handleInput();
              }}
            />
            <Text className={`${colors.heading} px-1 text-lg font-bold`}>
              Họ và tên
            </Text>
            <TextInput
              className="p-4 bg-white rounded-2xl mb-3"
              ref={input => {
                this.thirdInput = input;
              }}
              onChangeText={value => {
                setName(value);
                handleInput();
              }}
            />
          </View>
          <TouchableOpacity
            className="flex-row justify-end px-3"
            onPress={() => navigation.navigate('SignIn')}>
            <Text>Đã có tài khoản?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2"
            onPress={() => onSignUp()}
            disabled={disableSubmit}>
            <Text className="text-center text-white text-lg font-bold">
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
