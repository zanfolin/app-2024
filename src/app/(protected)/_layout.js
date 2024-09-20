import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useAuth } from '../../hooks/Auth';

function CustomDrawerContent(props) {
  const { signOut, user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://www.github.com/brendagfs.png",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {user?.user?.name || "Usuário"} 
        </Text>
      </View>

      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity onPress={signOut} style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Principal",
            headerTitle: "Principal",
            drawerIcon: () => <Ionicons name="home-outline" size={20} color="#ba181b" />, 
            drawerLabelStyle: { color: "#ba181b", fontSize: 16, fontWeight: 'bold' }, 
          }}
        />
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: "Listagem",
            headerTitle: "Listagem",
            drawerIcon: () => <Ionicons name="list-outline" size={20} color="#ba181b" />, 
            drawerLabelStyle: { color: "#ba181b", fontSize: 16, fontWeight: 'bold' }, 
          }}
        />
        <Drawer.Screen
          name="payment"
          options={{
            drawerLabel: "Pagamentos",
            headerTitle: "Pagamentos",
            drawerIcon: () => <Ionicons name="diamond-outline" size={20} color="#ba181b" />, 
            drawerLabelStyle: { color: "#ba181b", fontSize: 16, fontWeight: 'bold' }, 
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

export default function Layout() {
  return <DrawerLayout />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161a1d', 
  },
  profileSection: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b090a', 
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ba181b',
  },
  drawerContent: {
    paddingTop: 10,
  },
  signOutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 20,
    backgroundColor: '#660708', 
    borderRadius: 10,
  },
  signOutButtonText: {
    color: '#0b090a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
