import { Text, View, TextInput, Alert, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'
import countryList from 'country-list';
import Button from '../../Components/Button/Button';

const countries = countryList.getData();
const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');
    const [city, setCity] = useState('');
    const onCheckout = () => {
        if (addressError) {
            Alert.alert('Fix all field errors before submiting');
            return;
        }

        if (!fullname) {
            Alert.alert('Please fill in the fullname field');
            return;
        }

        if (!phone) {
            Alert.alert('Please fill in the phone number field');
            return;
        }
    }
    return (
        <KeyboardAvoidingView>
            <ScrollView style={styles.row} >
                <View style={styles.row}>
                    <Picker selectedValue={country} onValueChange={setCountry} >
                        {countries.map(country => (
                            <Picker.Item label={country.name} value={country.code} />))
                        }
                    </Picker>
                </View>
                {/* Full name */}
                <View style={styles.row}>
                    <Text style={styles.label}>Full name (First and Last name)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Full name"
                        value={fullname}
                        onChangeText={setFullname}
                    />
                </View>

                {/* Phone number */}
                <View style={styles.row}>
                    <Text style={styles.label}>Phone number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType={'phone-pad'}
                    />
                </View>
                {/* Address */}
                <View style={styles.row}>
                    <Text style={styles.label}>Address
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        value={address}
                        onChangeText={text => {
                            setAddress(text);
                            setAddressError('');
                        }}
                    />
                </View>
                {!!addressError && (
                    <Text style={styles.errorLabel}>{addressError}</Text>
                )}
                {/* city */}
                <View style={styles.row}>
                    <Text style={styles.label}>city
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                    />
                </View>
                <Button
                    text='Checkout'
                    OnPress={onCheckout}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
};
export default AddressScreen;


