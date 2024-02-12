import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import {colors} from '../theme';

const categories = [
  {
    id: 1,
    title: 'Mua sắm',
  },
  {
    id: 2,
    title: 'Ăn uống',
  },
  {
    id: 3,
    title: 'Sức khỏe',
  },
  {
    id: 4,
    title: 'Cộng đồng',
  },
  {
    id: 5,
    title: 'Khác',
  },
];

export default function AddExpenseScreen() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const handleChangeText = newText => {
    const regex = /^[0-9-]+$/;
    if (regex.test(newText)) {
      setAmount(newText);
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
              Thêm khoản chi
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
              Tên
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
              Số tiền
            </Text>
            <TextInput
              className="p-4 bg-white rounded-2xl mb-3"
              keyboardType="numeric"
              value={amount}
              onChangeText={value => handleChangeText(value)}
              ref={input => {
                this.secondTextInput = input;
              }}
            />
          </View>

          <View className="mx-2 space-x-2">
            <Text className="text-lg font-bold">Loại</Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map(cat => {
                let bgColor = 'bg-white';
                if (cat.id === category) {
                  bgColor = 'bg-green-200';
                }
                return (
                  <TouchableOpacity
                    className={`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}
                    onPress={() => setCategory(cat.id)}
                    key={cat.id}>
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text
              className="text-center text-white text-lg font-bold"
              onPress={() => navigation.goBack()}>
              Thêm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
