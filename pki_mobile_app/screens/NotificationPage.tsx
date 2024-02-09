import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { notifications } from '../database/database';
import { Notification } from '../models/Notification';

const NotificationPage = ({route}: any) => {
  const loggedInUser = route.params.loggedInUser;
  const [allNotificationsForUser, setAllNotificationsForUser] = useState<Notification[] | null>(null);

  useEffect(() => {
    setAllNotificationsForUser(notifications.filter(notification => notification.userId === loggedInUser?.id));
  }, []);

  const renderItem = ({ item }: { item: Notification }) => (
    <View style={[styles.notificationItem, { backgroundColor: item.status ? 'green' : '#FF6961' }]}>
      <View style={styles.notificationDate}>
        <Text>{item.date.toString()}</Text>
      </View>
      <View style={styles.notificationText}>
        <Text>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allNotificationsForUser}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationItem: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  notificationDate: {},
  notificationText: {},
});

export default NotificationPage;
