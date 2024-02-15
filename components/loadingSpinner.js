import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../theme';

const LoadingSpinner = ({isLoading}) => {
  return (
    <>
      {isLoading && (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={`${colors.success}`} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // optional: add a semi-transparent background
  },
});

export default LoadingSpinner;
