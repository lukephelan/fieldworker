import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class ListItem extends Component {
    renderLoading() {
        return <View><Text>Loading...</Text></View>;
    }

    _keyExtractor = (item, index) => item.CustomerID

    listItem() {
        const { data } = this.props;
        return (
            <View style={styles.listTile}>
                <Text style={styles.listItem}>{data.CustomerName}</Text>
            </View>
        )
    }

    render() {
        if (this.props.selectedCustomer) {
            return this.renderLoading();
        } else {
            return this.listItem();
        }
    }
}

const styles = StyleSheet.create({
    listTile: {
        justifyContent: 'flex-start'
    },
    listItem: {
        borderBottomColor: 'black',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 10,
        height: 50,
        fontSize: 20,
        backgroundColor: '#FFFFFF',
        height: 100
    }
})

export default ListItem;