import { useState } from 'react';
import { Text, View, Button, FlatList, Modal, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './style.js'
import { AddItem, TaskItem } from './components/index.js';

export default function App() {

const [task, setTask] = useState('');
const [taskList, setTaskList] = useState([]);
const [modalVisible, setModalVisible] = useState(false);
const [selectedTask, setSelectedTask] = useState(null);

const addItem = () => {
  setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
  setTask('');
  console.log(task);
  console.log(taskList);
}

const onHandleSelected = (item) => {
  setSelectedTask(item);
  setModalVisible(!modalVisible);
}

const renderItem = ({ item }) => {
  <TaskItem item={item} onHandleSelected={onHandleSelected} />
  };

const onHandleCancel = () => {
  setModalVisible(!modalVisible);
}

const onHandleDeleteItem = () => {
  setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
  setModalVisible(!modalVisible);
}

const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddItem task={task} addItem={addItem} onHandleChange={onHandleChange} />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista de Comidas</Text>
      </View>
      <FlatList
        style={styles.listContainer}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Task Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button
              title='Cancel'
              color='#9A848F'
              onPress={onHandleCancel}
            />
            <Button
              title='Delete'
              color='#9A848F'
              onPress={onHandleDeleteItem}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
