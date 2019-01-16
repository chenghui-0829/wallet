import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import BackImage from "../component/BackImage";

class CreateWallet extends React.Component {

    static navigationOptions = {
        title: '创建钱包',
        headerBackImage: <BackImage/>,
        headerRight: <View/>
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
export default CreateWallet;