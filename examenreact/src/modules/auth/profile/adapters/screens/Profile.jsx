import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
      {/* Cover Image */}
      <View style={styles.cover}>
        <View style={styles.profilePicture}>
          <Image
            source={{ uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }}
            style={styles.profileImage}
          />
        </View>
      </View>

      {/* User Name */}
      <Text style={styles.username}>Cecilia Vs</Text>

      {/* Add to Story Button */}
      <TouchableOpacity style={styles.storyButton}>
        <Text style={styles.storyButtonText}>+ Add to Story</Text>
      </TouchableOpacity>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        <Text style={styles.option}> Ubicacion</Text>
        <Text style={styles.option}> 100 amigos</Text>
        <Text style={styles.option}> Mas info</Text>
        <Text style={styles.option}> Mensaje</Text>
        
      </View>

      {/* Edit Public Details Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Public Details</Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      cover: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
      },
      profilePicture: {
        position: 'absolute',
        bottom: -40,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 5,
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
      },
      username: {
        marginTop: 50,
        fontSize: 18,
        fontWeight: 'bold',
      },
      storyButton: {
        backgroundColor: '#1877F2',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
      },
      storyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      optionsContainer: {
        marginTop: 20,
        width: '90%',
      },
      option: {
        fontSize: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      editButton: {
        backgroundColor: '#1877F2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
      },
      editButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});

export default Profile;