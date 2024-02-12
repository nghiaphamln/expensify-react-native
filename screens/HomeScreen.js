import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import {colors} from '../theme';
import EmptyList from '../components/emptyList';
import {useNavigation} from '@react-navigation/native';
import randomImage from "../assets/images/randomImage";

let items = [
  {
    id: 1,
    place: 'Hồ Chí Minh',
    country: 'Việt Nam',
  },
  {
    id: 2,
    place: 'Hồ Chí Minh',
    country: 'Việt Nam',
  },
  {
    id: 3,
    place: 'Hồ Chí Minh',
    country: 'Việt Nam',
  },
  {
    id: 4,
    place: 'Hồ Chí Minh',
    country: 'Việt Nam',
  },
  {
    id: 5,
    place: 'Hồ Chí Minh',
    country: 'Việt Nam',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Ledger
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={`${colors.heading}`}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assets/images/banner.png')}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>Gần đây</Text>
          <TouchableOpacity
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
            onPress={() => navigation.navigate('AddLedger')}>
            <Text className={`${colors.heading}`}>Thêm sổ</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={style.flatList}
            contentContainerStyle={style.flatListContentContainerStyle}
            data={items}
            numColumns={2}
            ListEmptyComponent={<EmptyList message={'Không có dữ liệu'} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={style.flatList.columnWrapperStyle}
            className="mx-1"
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  className="bg-white p-3 rounded-2xl mb-3 shadow-sm"
                  onPress={() => navigation.navigate('LedgerExpenses')}>
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colors.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colors.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
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
  flatListContentContainerStyle: {
    paddingBottom: 20,
  },
};
