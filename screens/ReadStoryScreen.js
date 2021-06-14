import React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            allStories: [],
            dataSource: [],
            search: ''
        }
    }

    componentDidMount() {
        this.retrieveStories()
    }

    updateSearch = search => {
        this.setState({ search });
    };

    retrieveStories = () => {
        try{
            var allStories = [],
            stories = db.collection('stories').get().then((querySnapshot)=>{
                    querySnapshot.forEach((doc)=>{
                        allStories.push(doc.data())
                    })
                this.setState({allStories})
            })
        }
        catch(error){
            console.log(error)
        }
    };

    SearchFilter(text){
        const newData = this.state.allStories.filter((item)=>{
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })

        this.setState({
            dataSource: newData,
            search: text,
        })
    }
    render() {
        return (
            <View>
                <SearchBar
                placeholder="Search Here"
                onChangeText={text => this.SearchFilter(text)}
                onClear={text => this.SearchFilter('')} 
                value={this.state.search}
                />
            </View>
        )
    }
}

