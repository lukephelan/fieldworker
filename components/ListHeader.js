import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCount: 0
        }
    }
    
    _countJobs = () => {
        this.state.itemCount = this.props.data.length
    }

    render() {
        this._countJobs()
        return (
            <View style={styles.listHeader}>
                <Text style={styles.headerText}>Jobs ({this.state.itemCount})</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        backgroundColor: '#425160'
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    }
})

export default ListHeader;