import React, { useState, useEffect } from 'react'
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'

import appFirebase from '../credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoct} from 'firebase/firestore'
const db = getFirestore(appFirebase)

const ListProducts = (props) => {

  const [lista, setLista] = useState([])

  // logica para llamara la lista de documentos de la coleccion proteinas
  useEffect(() => {
    const getLista = async()=>{
        try {
            const querySnapshot = await getDocs(collection(db, 'productos'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                const {nombre, color, stock} = doc.data()
                docs.push({
                    id:doc.id,
                    nombre,
                    color,
                    stock,
                })
            })
            setLista(docs);
        } catch (error) {
            console.log(error);
        }
    }
    getLista()
}, [lista])


  return (
    <ScrollView>
      <TouchableOpacity style={styles.Boton} onPress={()=>props.navigation.navigate('Create')}>
        <Text style={styles.TextoBoton}>Agregar producto</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.TextoTitulo}>Lista de productos</Text>
      </View>

      <View>
        {
          lista.map((list)=>(
            <TouchableOpacity key={list.id} style={styles.BotonLista} 
            onPress={()=>props.navigation.navigate('Show',{productoId:list.id})}>
                <Text style={styles.TextoNombre}>-{list.nombre}</Text>
            </TouchableOpacity>
          ))
        }
      </View>

    </ScrollView>
  );
}

export default ListProducts

const styles = StyleSheet.create({
  Boton:{
    backgroundColor:'#C9E2FF',
     height:35,
     borderColor:'black',
    borderWidth:1     
  },
  TextoBoton:{
    fontSize:18,
    textAlign:'center'
  },
  TextoTitulo:{
    textAlign:'center',
    marginTop:20,
    marginBottom:10
  },  
  TextoNombre:{
    fontSize:16
  },
  BotonLista:{
    backgroundColor:'#C9FFF5',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    marginBottom:3,
    padding:5
  }
})