import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import EmptyList from '../components/emptyList';
import ExpenseCard from '../components/expenseCard';

let items = [
  {
    id: 1,
    title: 'Ăn lẩu',
    category: 'Đồ ăn',
    amount: -100000,
  },
  {
    id: 2,
    title: 'Lương',
    category: 'Lương',
    amount: 2000000,
  },
  {
    id: 3,
    title: 'Ăn ốc',
    category: 'Đồ ăn',
    amount: -302000,
  },
  {
    id: 4,
    title: 'Ăn lẩu',
    category: 'Đồ ăn',
    amount: -1000,
  },
  {
    id: 5,
    title: 'Ăn lẩu',
    category: 'Đồ ăn',
    amount: -1000,
  },
  {
    id: 6,
    title: 'Ăn lẩu',
    category: 'Đồ ăn',
    amount: -1000,
  },
  {
    id: 7,
    title: 'Ăn lẩu',
    category: 'Đồ ăn',
    amount: -1000,
  },
  {
    id: 8,
    title: 'Ăn lẩu',
    category: 'Đồ ăn',
    amount: -1000,
  },
  {
    id: 9,
    title: 'Ăn lẩu',
    category: 'Đồ ăn',
    amount: -1000,
  },
];

export default function LedgerExpensesScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-0 left-0">
            <BackButton />
          </View>
          <Text className={`${colors.heading} text-xl font-bold text-center`}>
            Chi phí
          </Text>
        </View>

        <View className="flex-row justify-center my-3 mt-5">
          <Image
            className="h-72 w-72"
            source={require('../assets/images/7.png')}
          />
        </View>

        <View className="space-y-3">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Chi tiêu
            </Text>
            <TouchableOpacity
              className="p-2 px-3 bg-white border border-gray-200 rounded-full"
              onPress={() => navigation.navigate('AddExpense')}>
              <Text className={`${colors.heading}`}>Thêm khoản chi</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              style={style.flatList}
              data={items}
              ListEmptyComponent={<EmptyList message={'Không có dữ liệu'} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1"
              renderItem={({item}) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const style = {
  flatList: {
    height: 420,
    columnWrapperStyle: {
      justifyContent: 'space-between',
    },
  },
};
