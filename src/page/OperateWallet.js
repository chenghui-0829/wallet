import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';

class OperateWallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    toCreate = () => {
        this.props.navigation.push('Create')
    };

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../static/img/create_page_bg.jpg')}>
                <Text style={styles.but_bg} onPress={this.toCreate}>创建钱包</Text>
                <Text style={[styles.but_bg, {marginTop: 20}]}
                      onPress={() => this.props.navigation.push('Guide')}>导入钱包</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    but_bg: {
        backgroundColor: '#ffffff55',
        width: 160,
        height: 40,
        color: '#ffffff',
        fontSize: 14,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});
export default OperateWallet;