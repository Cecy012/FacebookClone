import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Card } from '@rneui/themed';

const data = [
    { id: '1', title: '1000 reacciones, 780 comentarios', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHLw22Lvq4bShmBakG4uOhqhyGiH3Ny0NyQ&s', description: 'Me gustan los gatitos, son bonitos y suaves, los naranjosos estan locos y los pintitos tranquilos' },
    { id: '2', title: '1300 reacciones, 500 comentarios', image:'https://www.hola.com/horizon/square/a968eea714bb-gatitos-en-brazos-t.jpg?im=Resize=(640),type=downsize', description: 'Me encantan los mininos, son adorables y juguetones, los chiquitos son traviesos y los grandes son muy tranquilos' },
    { id: '3', title: '500 reacciones, 4520 comentarios', image: 'https://previews.123rf.com/images/kaew6566/kaew65662304/kaew6566230400036/205420807-tres-adorables-y-esponjosos-conejitos-beb%C3%A9s-sentados-juguetones-juntos-sobre-flores-de-hierba-verde.jpg', description: 'Me fascinan los conejitos, son tiernos y saltarines, los blancos son curiosos y los grises muy calmados' },
  ];

const Home = () => {
    return (
        <View style={styles.container}>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Card>
                        <Card.Image source={{ uri: item.image }} style={styles.image} />
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Divider />
                      <Text>{item.description}</Text>
                    </Card>
                  )}
                />
              </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Home;