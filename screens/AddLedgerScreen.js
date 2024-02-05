import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

export default function AddLedgerScreen() {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const navigation = useNavigation();

  const handleAddLedger = () => {
    if (name && note) {
      navigation.navigate('Home');
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute left-0 top-0">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Thêm sổ
            </Text>
          </View>

          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-56 w-56"
              source={require('../assets/images/4.png')}
            />
          </View>

          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} px-1 text-lg font-bold`}>
              Tên sổ
            </Text>
            <TextInput
              className="p-4 bg-white rounded-2xl mb-3"
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              value={name}
              onChangeText={value => setName(value)}
            />
            <Text className={`${colors.heading} px-1 text-lg font-bold`}>
              Ghi chú
            </Text>
            <TextInput
              className="p-4 bg-white rounded-2xl mb-3"
              ref={input => {
                this.secondTextInput = input;
              }}
              value={note}
              onChangeText={value => setNote(value)}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2"
            onPress={handleAddLedger}>
            <Text className="text-center text-white text-lg font-bold">
              Thêm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
