import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { ListItem } from '@rneui/themed';

const categoria = [
  { nome: 'Resort', avatar_url: 'https://cdn-icons-png.flaticon.com/512/3942/3942052.png'},
  { nome: 'Homestay', avatar_url: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'},
  { nome: 'Hotel', avatar_url: 'https://img.freepik.com/premium-vector/hotel-icon-isolated-white-background_268104-18103.jpg'},
  { nome: 'Ladge', avatar_url: 'https://cdn-icons-png.flaticon.com/512/1240/1240118.png'},
  { nome: 'Villa', avatar_url: 'https://cdn-icons-png.flaticon.com/512/1018/1018528.png'},
  { nome: 'Apartement', avatar_url: 'https://cdn-icons-png.flaticon.com/512/230/230533.png'},
  { nome: 'Hostel', avatar_url: 'https://cdn-icons-png.flaticon.com/512/233/233332.png'},
  { nome: 'Veja mais', avatar_url: 'https://cdn-icons-png.flaticon.com/512/149/149403.png'},
];

const destinos = [
  {nome: 'Caribe', avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwIW--XIOrOMs1g1YZwzfW64TqY-lNLcxtg&s'},
  {nome: 'NY', avatar_url: 'https://www.segueviagem.com.br/wp-content/uploads/2021/12/Estados-Unidos-Nova-York-shutterstock_248799484.jpg'},
  {nome: 'Chile', avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScokKNVMrJNMQXe7XEj0U80MnT7qVP51ONEw&s'},
];

const recomendacao = [
  {nome: 'Dubai', avatar_url: 'https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/poi-burj-khalifa-3-dtcm-jun-2023.jpg'},
  {nome: 'Grécia', avatar_url: 'https://images.squarespace-cdn.com/content/v1/55b7e44de4b0af4724ac5dd6/1648050127805-AR2YZP95C9IV0UC7MHK8/grecia-onde-ficar.jpg?format=2500w'},
];

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={{ paddingBottom: 70 }}> 
      
      <View style={styles.header}>
        <Avatar
          rounded
          size={40}
          source={{ uri: 'https://media.istockphoto.com/id/1258141375/vector/plane-travel-icon-air-travel-around-the-world-flying-around-the-world-travel-agency-logo.jpg?s=612x612&w=0&k=20&c=QaZk5NDYsdfKd_7iUNAe3CImkcwlzyaibpMuYIteeWY=' }}
        />
        <TextInput
          placeholder="Pesquise aqui..."
          style={styles.pesquisaInput}
          placeholderTextColor="#fff"
        />
      </View>

      <View style={styles.inicio}>
        <Avatar
          rounded
          size={70}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu-zhOF2IA5ucyBa6BJ642oYCQipdxLucGg&s',
          }}
        />
        <Text style={styles.bvText}>Bem vinda, Ceci!</Text>
        <Icon name="notifications" type="material" color="#000" size={30} />
      </View>

      <View style={styles.sectionTitle}>
        <Text style={styles.categoriaTitulo}>Categorias</Text>
        <Icon name="settings" type="material" color="#000" size={24} />
      </View>

      <View style={styles.grid}>
        {categoria.map((item, i) => (
          <View key={i} style={styles.gridItem}>
            <Avatar source={{ uri: item.avatar_url }} size={50} rounded />
            <Text style={styles.gridLabel}>{item.nome}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionTitle}>
        <Text style={styles.categoriaTitulo}>Destinos</Text>
        <Icon name="settings" type="material" color="#000" size={24} />
      </View>

      <View style={styles.grid}>
        {destinos.map((item, i) => (
          <View key={i} style={styles.gridItem}>
            <Avatar source={{ uri: item.avatar_url }} size={50} rounded />
            <Text style={styles.gridLabel}>{item.nome}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionTitle}>
        <Text style={styles.categoriaTitulo}>Recomendações</Text>
        <Icon name="settings" type="material" color="#000" size={24} />
      </View>

      <View style={styles.grid}>
        {recomendacao.map((item, i) => (
          <View key={i} style={styles.gridItem}>
            <Avatar source={{ uri: item.avatar_url }} size={50} rounded />
            <Text style={styles.gridLabel}>{item.nome}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
    <View style={styles.barrafinal}>
        <Icon name="home" type="material" color="#fff" />
        <Icon name="explore" type="material" color="#fff" />
        <Icon name="search" type="material" color="#fff" />
        <Icon name="person" type="material" color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf6fb',
    paddingBottom: 70,
  },

  header: {
    backgroundColor: '#3498db',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  pesquisaInput: {
    flex: 1,
    backgroundColor: '#2980b9',
    padding: 8,
    borderRadius: 10,
    color: '#fff',
  },

  inicio: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },

  bvText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },

  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },

  categoriaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    gap: 15,
  },

  gridItem: {
    width: '20%',
    alignItems: 'center',
    marginBottom: 15,
  },

  gridLabel: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },

  barrafinal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#3498db',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#2980b9',
  },   
  
});

