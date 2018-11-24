import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem';
import ListHeader from './ListHeader';

class MasterList extends Component {
    renderLoading() {
        return <View><Text>Loading...</Text></View>;
    }

    _keyExtractor = (item, index) => item.CustomerID

    renderSeparator = () => {
        return (
            <View style={styles.seperator} />
        );
    }

    masterList() {
        const { data } = this.props;
        return (
            <View style={styles.masterList}>
                <ListHeader data={data} />
                <FlatList
                    style={styles.list}
                    data={data}
                    ItemSeparatorComponent={this.renderSeparator}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <ListItem data={item} />} />
            </View>
        )
    }

    render() {
        if (this.props.selectedCustomer) {
            return this.renderLoading();
        } else {
            return this.masterList();
        }
    }
}

const styles = StyleSheet.create({
    masterList: {
        width: '100%',
        height: '100%'
    },
    list: {},
    seperator: {
        height: 1,
        backgroundColor: '#A0BDD8',
        marginLeft: 5,
        marginRight: 5
    }
})

export default MasterList;