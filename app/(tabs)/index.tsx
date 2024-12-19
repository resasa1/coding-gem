import { Image, StyleSheet, View, Text, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
// import { Navigation } from 'react-native-navigation';
import NavigationProfile from '@/components/navigationProfile';
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

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>

      {/* navigation header should be here*/}
      <NavigationProfile />
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('@/assets/images/badges/shield.svg')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Edward Elric</Text>
        <Text style={styles.userHandle}>@edwardElric</Text>
        <Text style={styles.points}>8122 pts ▲</Text>
      </View>

      {/* Badge Section */}
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
    </ThemedView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1E1D',
    alignItems: 'center',
    paddingTop: 50,
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
  },
  badgeIcon: {
    width: 50,
    height: 50,
    tintColor: '#FFFFFF',
  },

});

