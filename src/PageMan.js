import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import OperateWallet from "./page/OperateWallet";
import CreateWallet from "./page/CreateWallet";
import GuideWallet from "./page/GuideWallet";


const IndexPage = createStackNavigator(
    {
        Operate: {
            screen: OperateWallet, navigationOptions: {
                header: null // 不显示导航栏
            }
        },
        Create: CreateWallet,
        Guide: GuideWallet
    },
    {
        initialRouteName: 'Operate',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#020741',
                height: 45
            },
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
                color: "#fff",
                fontSize: 16,
                fontWeight: 'normal',
            },
        }
    }
);

export default createAppContainer(IndexPage);