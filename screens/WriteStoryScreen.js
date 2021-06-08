import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import db from '../config.js'

export default class WriteStoryScreen extends React.Component {
    constructor(){
      super();
      this.state={
        title:'',
        author:'',
        story:''
      }
    }
      submitStory = ()=>{
        db.collection("Book Details").add({
            title: this.state.title,
            author: this.state.author,
            story: this.state.story,
        })
        this.setState({
            title: '',
            author: '',
            story: ''
        })
       ToastAndroid.show("story submitted");
    }
    
  
  
    render() {
      return (
          <View>
            <TextInput
              style={styles.titleBox}
              placeholder="Title"
            />
    
            <TextInput
              style={styles.authorBox}
              placeholder="Author"
            />
    
            <TextInput 
              style={styles.storyText}
              placeholder="Write Here"/>
              
            <TouchableOpacity 
            style={styles.submitButton} 
            onPress={this.submitButton}>
              <Text style={styles.buttonText}>submit</Text>
            </TouchableOpacity>
          </View>
      );
    }
  }
  const styles = StyleSheet.create({
    
    titleBox: {
      width: '90%',
      height: 20,
      backgroundColor: 'white',
      fontFamily: 'Monospace',
      padding: 17,
      marginLeft: 20,
      marginTop: 10,
      color: 'black',
      fontSize: 15,
    },
    authorBox: {
      width: '90%',
      height: 20,
      backgroundColor: 'white',
      fontFamily: 'Monospace',
      padding: 17,
      marginLeft: 20,
      marginTop: 10,
      color: 'black',
      fontSize: 15,
    },
    storyText: {
        height: 250,
        width: '90%',
        backgroundColor: 'white',
        fontFamily: 'Monospace',
        padding: 17,
        marginLeft: 20,
        marginTop: 10,
        color: 'black',
        fontSize: 15,

    },
    submitButton: {
      backgroundColor: 'gray',
      width: '10%',
      height: 40,
      marginTop: 10,
      padding: 5,
      marginLeft: 20,
    },
    buttonText: {
      fontFamily: 'monospace',
      textAlign: 'center',
      fontSize: 20,
    },
  });