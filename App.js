import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
 
export default function App() {
  const [tareas, setTareas] = useState([]);
  const [textoTarea, setTextoTarea] = useState('');
 
  const agregarTarea = () => {
    if (textoTarea.trim() !== '') {
      setTareas([...tareas, textoTarea]);
      setTextoTarea('');
    }
  };
 
  const eliminarTarea = index => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas.splice(index, 1);
    setTareas(tareasActualizadas);
  };
 
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Todo List</Text>
      <View style={styles.contenedorInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'silver'}
          placeholder="Add a task"
          value={textoTarea}
          onChangeText={texto => setTextoTarea(texto)}
        />
        <TouchableOpacity style={styles.botonAgregar} onPress={agregarTarea}>
          <Text style={styles.textoBoton}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listaTareas}>
        {tareas.map((tarea, index) => (
          <View key={index} style={styles.contenedorTarea}>
            <Text style={styles.textoTarea}>{tarea}</Text>
            <TouchableOpacity style={styles.botonEliminar} onPress={() => eliminarTarea(index)}>
              <Text style={styles.textoEliminar}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 50,
  },
  contenedorInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "black",
  },
  botonAgregar: {
    backgroundColor: '#F700FF',
    padding: 15,
    borderRadius: 10,
  },
  textoBoton: {
    color: "white",
    fontWeight: 'bold',
  },
  listaTareas: {
    flex: 1,
  },
  contenedorTarea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#00AF92',
    padding: 10,
  },
  textoTarea: {
    flex: 1,
    fontSize: 16,
  },
  botonEliminar: {
    backgroundColor: 'teal',
    padding: 5,
    borderRadius: 5,
  },
  textoEliminar: {
    color: "white",
    fontWeight: 'bold',
  },
});
