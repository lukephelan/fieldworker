import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MasterList from './components/MasterList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        {
          "CustomerName": "Jimmy Grants",
          "CustomerID": "C1"
        },
        {
          "CustomerName": "McDonald's",
          "CustomerID": "C2"
        },
        {
          "CustomerName": "Hungry Jack's",
          "CustomerID": "C3"
        },
        {
          "CustomerName": "KFC",
          "CustomerID": "C4"
        },
        {
          "CustomerName": "The George Hotel",
          "CustomerID": "C5"
        },
        {
          "CustomerName": "Nando's",
          "CustomerID": "C6"
        },
        {
          "CustomerName": "Opporto's",
          "CustomerID": "C7"
        },
        {
          "CustomerName": "Subway",
          "CustomerID": "C8"
        },
        {
          "CustomerName": "Mad Mex",
          "CustomerID": "C9"
        },
        {
          "CustomerName": "Wendy's",
          "CustomerID": "C10"
        },
        {
          "CustomerName": "Plini",
          "CustomerID": "C11"
        },
        {
          "CustomerName": "David Maxim Micic",
          "CustomerID": "C12"
        },
        {
          "CustomerName": "Ihsahn",
          "CustomerID": "C13"
        },
        {
          "CustomerName": "Emperor",
          "CustomerID": "C14"
        },
        {
          "CustomerName": "Metallica",
          "CustomerID": "C15"
        },
        {
          "CustomerName": "Dragged Into Sunlight",
          "CustomerID": "C16"
        },
        {
          "CustomerName": "Hacker News",
          "CustomerID": "C17"
        },
        {
          "CustomerName": "Weightlifting",
          "CustomerID": "C18"
        },
        {
          "CustomerName": "PRS",
          "CustomerID": "C19"
        },
        {
          "CustomerName": "Red Dead Redemption",
          "CustomerID": "C20"
        },
        {
          "CustomerName": "Dim Sims",
          "CustomerID": "C21"
        },
        {
          "CustomerName": "Ford Territory",
          "CustomerID": "C22"
        },
        {
          "CustomerName": "Parsnips",
          "CustomerID": "C23"
        },
        {
          "CustomerName": "Ibanez Guitars",
          "CustomerID": "C24"
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MasterList data={this.state.customers} />
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
