import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native'

class Banner extends React.Component {


    render () {
        return (
                <View style={styles.banner}>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => this.props.navigation.toggleDrawer()}>
                    </TouchableOpacity>
                    <View style={styles.informations}>
                        <Text style={styles.default_text} >Hello user !</Text>
                    </View>
                    <Text>{this.props.jdjdjd}</Text>
                </View>          
        )

    }
}

const styles = StyleSheet.create({
    banner: {
      flex: 0.5,
      paddingTop: 50,
      flexDirection: 'row'
    },
    button: {
      flex: 1,
      backgroundColor: 'pink',
      margin: 10
    },
    informations: {
      flex: 3
    },
    default_text: {
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 20
    }
  })
  
  export default Banner