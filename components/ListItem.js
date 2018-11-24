import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
                    <Text style={styles.listItemAsset}>{data.Asset.toUpperCase()}</Text>
                    <Text style={styles.listItemStatus}>{data.Status}</Text>
                    <Text style={styles.listItemStatus}>{data.Turnaround}</Text>
                    <Text style={styles.listItemDescription}>{data.Description}</Text>
                    <View style={styles.dateRaisedContainer}>
                        <Image style={styles.calendarImage} source={require('../assets/calendar.png')} />
                        <Text style={styles.listItemRaisedDate}>{data.DateRaised}</Text>
                    </View>
                    <Text style={styles.listItemDescription}>{data.JobNumber}</Text>
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
        paddingBottom: 10,
        paddingLeft: 15
    },
    listItemAsset: {
        borderBottomColor: 'black',
        // paddingLeft: 10,
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF'
    },
    listItemStatus: {
        borderBottomColor: 'black',
        paddingRight: 15,
        paddingTop: 10,
        fontSize: 20,
        backgroundColor: '#FFFFFF',
        textAlign: 'right'
    },
    listItemDescription: {
        borderBottomColor: 'black',
        paddingTop: 10,
        fontSize: 20,
        backgroundColor: '#FFFFFF'
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
    },
    listItemRaisedDate: {
        borderBottomColor: 'black',
        paddingTop: 10,
        paddingLeft: 5,
        fontSize: 20,
        backgroundColor: '#FFFFFF'
    },
    dateRaisedContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    calendarImage: {
        height: 20,
        width: 20
    }

})

export default ListItem;