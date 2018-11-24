import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: "Search",
            query: ""
        }
        this._onSearch = this._onSearch.bind(this)
    }

    _onSearch(search) {
        this.setState({query: search})
    }

    render() {
        return (
            <TextInput
                style={styles.searchField}
                type='search'
                onChangeText={this._onSearch}
                value={this.state.query}
                placeholder={this.state.placeholder} />
        )
    }
}

const styles = StyleSheet.create({
    searchField: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 20,
        borderColor: 'grey',
        borderWidth: 1
    }
})

export default SearchField;