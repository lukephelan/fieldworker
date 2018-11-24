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
            <View><Text style={styles.listHeader}>Jobs ({this.state.itemCount})</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    listHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        height: 40,
        backgroundColor: '#425160'
    }
})

export default ListHeader;