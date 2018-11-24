import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem';

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
            <FlatList
                style={styles.list}
                data={data}
                ItemSeparatorComponent={this.renderSeparator}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => <ListItem data={item} />} />
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
    list: {
        width: '100%',
        flex: 2
    },
    seperator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: 5,
        marginRight: 5
    }
})

export default MasterList;