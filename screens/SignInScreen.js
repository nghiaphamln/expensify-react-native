import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import {useNavigation} from '@react-navigation/native';

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute left-0 top-0">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Đăng nhập
            </Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-64 w-64"
              source={require('../assets/images/login.png')}
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
            />
            <Text className={`${colors.heading} px-1 text-lg font-bold`}>
              Mật khẩu
            </Text>
            <TextInput
              className="p-4 bg-white rounded-2xl mb-3"
              ref={input => {
                this.secondTextInput = input;
              }}
            />
            <TouchableOpacity
              className="flex-row justify-end px-3"
              onPress={() => navigation.navigate('SignUp')}>
              <Text>Chưa có tài khoản?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-center text-white text-lg font-bold">
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
