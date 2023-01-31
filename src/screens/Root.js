import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {useUsersApi} from '../hooks/useUsersApi';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const Root = () => {
  const {data} = useUsersApi();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = user => {
    const {item} = user;
    return (
      <View style={styles.itemContainer}>
        {item.username && <Text>{item.username}</Text>}
      </View>
    );
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList data={data?.data ?? []} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {margin: 12},
});
