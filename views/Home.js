
import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-picker/picker';

import {useState} from 'react'

export default function Home() {
const [selectedLanguage, setSelectedLanguage] = useState('London');

// const findValue = (value) => {
//     return value;
// }

  return (
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '94%', height: 350, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 6}}>
            <Text style={{fontSize: 20, fontWeight: '500',}}>Cauntries and Capitals</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{paddingTop: 8}}>is capital of which contry?</Text>

            <Picker style={{width: 140, height: 50,}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="United Kingdom" value="London" />
            <Picker.Item label="United States" value="New York" />
            <Picker.Item label="France" value="Paris" />
            <Picker.Item label="Germany" value="Berlin" />
            <Picker.Item label="Italy" value="Rome" />
            <Picker.Item label="Spain" value="Barcelona" />
            </Picker>
        </View>
            
            <View>
                <Text style={{fontSize: 20, paddingRight: 80}}>{selectedLanguage}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})