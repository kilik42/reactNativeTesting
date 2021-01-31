import React from 'react'
import { Button, StyleSheet, Text, View,  TextInput } from 'react-native'
import React, { useState } from 'react';
import { db } from './firebase';
import { useFocusEffect } from '@react-navigation/native';
// import { TextInput } from 'react-native-gesture-handler'

const Messages = () => {

    const [input, setInput] = useState("");
    
    xonar [messages, setMessages]  = useState([]);

    useFocusEffect(
        useCallback(() => {
           const unsubscribe =  db.collection('messages').orderBy('timestamp', 'desc').
                onSnapShot(snapshot => (
                        setMessages(snapshot.docs.map(doc => ({
                            id: doc.id,
                            data: doc.data(),

                        }))
                     ) 
                )
                );
                return () => {
                    unsubscribe();
                };
            }, [])
    );



    const sendMessage =()=>{
        console.log("sent a message", input);

        db.collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        });
        
        setInput("");


    }
    return (
        <View>
            {/* <Text>Messages</Text> */}
            <TextInput 
            value={input } 
            onSubmitEditing={sendMessage}
        
            onChangeText={text => setInput(text)}
            placeholder="type your text"/>

            <Button onPress={sendMessage} title ='Send message'/>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({})
