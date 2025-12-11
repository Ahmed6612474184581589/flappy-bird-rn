import React from 'react';
import { Text, View } from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {  
    const birdWidth = 50;
    const birdHeight = 50;
    return (
        <View style={
            {
                position: 'absolute',
                backgroundColor:"blue",
                width:50,
                height:50,
            }
        }>
        </View>
    );
};

export default Bird;