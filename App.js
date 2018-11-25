import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MasterList from './components/MasterList';
import MockData from './assets/mockData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operations: MockData
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MasterList data={this.state.operations} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
