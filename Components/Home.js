import React from 'react'
import * as FileSystem from 'expo-file-system';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native'
import Banner from './Banner'

async function downloadFile(){
  var link=false;
  await FileSystem.downloadAsync(
    'https://ade.bordeaux-inp.fr/jsp/custom/modules/plannings/anonymous_cal.jsp?resources=7949&projectId=5&calType=ical&firstDate=2020-12-15&lastDate=2021-08-14#&login',
    FileSystem.documentDirectory + 'cal.ics'
  )
    .then(({ uri }) => {
      link= uri;

    })
    .catch(error => {
      console.log(error);
    });
    return link;
};
class Home extends React.Component {
constructor(props){
  super (props);

  downloadFile().then((uri)=> {
});
}
  _displayDefaultButtons(text) {
    return (
      <TouchableOpacity
        style={styles.other_buttons}>
        <View>
          <Text style={styles.default_text}>{text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.main_container}>

        <Banner navigation= {this.props.navigation} />
        <View style={styles.main_menu}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Emploi du temps')}}
            style={styles.schedule_button}>
            <View>
              <Text style={styles.default_text}>Emploi du Temps</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.other_tabs}>
            <View style={styles.bottom_left_view}>
              {this._displayDefaultButtons("Agenda")}
              {this._displayDefaultButtons("Carte")}
              {this._displayDefaultButtons("Scolarité")}
            </View>
            <View style={styles.bottom_right_view}>
              {this._displayDefaultButtons("Mails")}
              {this._displayDefaultButtons("Messagerie")}
              {this._displayDefaultButtons("Associatif")}
            </View>

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  main_menu: {
    flex: 4
  },
  default_text: {
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20
  },
  schedule_button: {
    flex: 0.75,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  other_tabs: {
    flex: 2,
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  bottom_left_view: {
    flex: 1
  },
  bottom_right_view: {
    flex: 1
  },
  other_buttons: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
