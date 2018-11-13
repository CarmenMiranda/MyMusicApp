import React, {Component} from 'react';
import{
    StyleSheet,
    View,
} from 'react-native';

import ArtistBox from './ArtistBox'

export default class ArtistDetailView extends Component<Props>{
    render(){
        const artist = this.props.artist

        return(
            <View style={styles.container}>
                <ArtistBox artist={artist} />
            </View>
        );
    }
}

styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 0,
    },
});