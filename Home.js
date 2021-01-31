import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}) => {


    useFocusEffect(

        useCallback(() => {
            
        },[])
    )

    return (
        <View>
            <Text>Home</Text>
            <Button 
            onPress={() => navigation.navigate('Messages')} 
            title="Go to messages"/>



        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
