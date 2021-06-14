import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import db from '../config'

export default class WriteStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      storyText: '',
      title: '',
    }
  }
  submitStory = () => {
    db.collection('stories').add({
      author: this.state.author,
      storyText: this.state.storyText,
      title: this.state.title,
    });
    this.setState({
      author: '',
      storyText: '',
      title: '',
    })
  }



  render() {
    return (
      <KeyboardAvoidingView>
        <View>
          <TextInput
            style={styles.titleBox}
            placeholder="title"
            onChangeText={(text) => {
              this.setState({
                title: text
              })
            }}
            value={this.state.title}
          />

          <TextInput
            style={styles.authorBox}
            placeholder="Author"
            onChangeText={(text) => {
              this.setState({
                author: text
              })
            }}
            value={this.state.author}
          />

          <TextInput
            style={styles.storyText}
            placeholder="Write Here" 
            onChangeText={(text) => {
              this.setState({
                storyText: text
              })
            }}
            value={this.state.storyText}
            />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.submitStory}>
            <Text style={styles.buttonText}>submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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