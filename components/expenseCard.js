import {Text, View} from 'react-native';
import React from 'react';
import {colors} from '../theme';

const getBgColor = amount => {
  if (amount > 0) {
    return '#9dd49d';
  }
  if (amount <= -100000) {
    return '#f0cecb';
  }

  return '#e7f9d0';
};

export default function ExpenseCard({item}) {
  return (
    <View
      style={{backgroundColor: getBgColor(item.amount)}}
      className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl shadow-sm shadow-gray-500">
      <View>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>
      <View>
        <Text>
          {item.amount.toLocaleString('it-IT', {
            style: 'currency',
            currency: 'VND',
          })}{' '}
        </Text>
      </View>
    </View>
  );
}
