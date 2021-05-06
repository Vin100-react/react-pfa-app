import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Banner from './Banner'

class Settings extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <Banner navigation={this.props.navigation}/>
        <View style={styles.main_interface}>
          <Text style={styles.default_text}>Settings</Text>
        </View>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column'
  },
  main_interface: {
    flex: 4
  },
  default_text: {
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20
  }
})

export default Settings
