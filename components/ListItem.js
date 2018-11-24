import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class ListItem extends Component {
    renderLoading() {
        return <View><Text>Loading...</Text></View>;
    }

    _setPriorityHighlight() {

    }

    listItem() {
        const { data } = this.props;
        return (
            <View style={styles.listTile}>
                <View style={[styles.priorityIndicatorPanel, data.Priority === 1 && styles.highPriorityIndicator, data.Priority === 2 && styles.medPriorityIndicator]} />
                <View style={styles.listItemTile} >
                    <Text style={styles.listItemAsset}>{data.Asset}</Text>
                    <Text style={styles.listItemStatus}>{data.Status}</Text>
                </View>
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
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row'
    },
    listItemTile: {
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        height: 100
    },
    listItemAsset: {
        borderBottomColor: 'black',
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 20,
        backgroundColor: '#FFFFFF'
    },
    listItemStatus: {
        borderBottomColor: 'black',
        paddingRight: 10,
        paddingTop: 10,
        fontSize: 20,
        backgroundColor: '#FFFFFF',
        textAlign: 'right'
    },
    highPriorityIndicator: {
        backgroundColor: 'red',
    },
    medPriorityIndicator: {
        backgroundColor: 'orange',
    },
    priorityIndicatorPanel: {
        backgroundColor: 'green',
        width: 7.5
    }

})

export default ListItem;