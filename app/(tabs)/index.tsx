import { Image, StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
import users from '@/utils/user.json';

// Sample badge data
const badges = [
  { id: 1, icon: require('@/assets/images/badges/swordz.png') },
  { id: 2, icon: require('@/assets/images/badges/swordz.png') },
  { id: 3, icon: require('@/assets/images/badges/swordz.png') },
  { id: 4, icon: require('@/assets/images/badges/swordz.png') },
  { id: 5, icon: require('@/assets/images/badges/swordz.png') },
  { id: 6, icon: require('@/assets/images/badges/swordz.png') },
  { id: 7, icon: require('@/assets/images/badges/swordz.png') },
  { id: 8, icon: require('@/assets/images/badges/swordz.png') },
  { id: 9, icon: require('@/assets/images/badges/swordz.png') },
];

// Sample user data
const user = {
  name: 'Edward Elric',
  tag: '@EdwardElric',
  points: 8121,
  indeks: '▼',
};

const streak = 
  {  head: 1,
    desc: 'day streak'
  }



export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>

      {/* navigation header should be here*/}
      
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('@/assets/images/badges/shield.svg')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{users[0].name}</Text>
        <Text style={styles.userHandle}>{users[0].tag}</Text>
        <Text style={styles.points}>{users[0].points} points {users[0].indeks}</Text>
      </View>

      {/* Badge Section */}
      <Text style={styles.headTitle}>Badges</Text>
      <ScrollView horizontal={false} contentContainerStyle={{ flexGrow: 1 }}>
        <FlatList
          data={badges}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.badgeContainer}
          renderItem={({ item }) => (
            <View style={styles.badgeItem}>
              <Image source={item.icon} style={styles.badgeIcon} />
            </View>
          )}
        />
      </ScrollView>

      {/* <View style={styles.statistics}>
        <Text style={styles.headTitle}>Statisctics</Text>
        <View style={styles.cardZ}>
          <Text style={styles.username}>{streak.head}</Text>
          <Text style={styles.userHandle}>{streak.desc}</Text>
        </View>
      </View> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1E1D',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#33FFAA',
  },
  username: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userHandle: {
    color: '#33FFAA',
    fontSize: 14,
  },
  points: {
    color: '#33FFAA',
    fontSize: 16,
    marginTop: 5,
  },
  badgeContainer: {
    paddingHorizontal: 10,
  },
  badgeItem: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    margin: 10,
    height: 100,
    width: 100,
    overflow: 'hidden',
    borderRadius: 50,
    borderWidth: 2,
  },
  badgeIcon: {
    width: 100,
    height: 100,
    tintColor: '#FFFFFF',
  },
  statistics: {
    marginTop: 20,
  },
  cardZ: {
    borderWidth: 2,
    borderRadius: 20,
  },
});
