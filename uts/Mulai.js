import React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Mulai extends React.Component {
  static navigationOptions = {
    headerTitle: 'Menejemen Pertandingan',
    headerStyle: {
      backgroundColor: 'blue'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      flex: 1
    }
  };
  constructor(props) {
      super(props);
      this.state = {
        namatim: '',
        lawan: ''
      };
    }

    render() {
      return (
        <View style={styles.containerMain}>
          <TextInput
              placeholder="Masukan Nama Pemain/Tim"
              onChangeText={(namatim) => this.setState({ namatim })}
          />
          <TextInput
              placeholder="Masukan Nama Lawan"
              onChangeText={(lawan) => this.setState({ lawan })}
          />
          <TextInput
              placeholder="Masukan Tanggal"
              onChangeText={(tgl) => this.setState({ tgl })}
              value={this.state.tgl}
          />
          <Button
            title="Mulai"
            onPress={() => {
              this.props.navigation.navigate('Mulai2', {
              namatim: this.state.namatim,
              lawan: this.state.lawan
          });
        }}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
	containerMain: {
    flex: 1
  }
});
