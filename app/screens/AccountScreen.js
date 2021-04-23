import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const menuItems= [
    {
        title: "My Usage",
        icon : {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "Messages",
        icon : {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: 'Messages',
    },
]
function AccountScreen({ navigation }) {
    return (
        <Screen  style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
                title="Manvendra Singh Bais"
                subTitle="manvendraNoob@gmail.com"
                image={require("../assets/Free_Sample_By_Wix.jpg")}
            />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item})=>
                        <ListItem 
                            title={item.title} 
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                            onPress={()=> navigation.navigate(item.targetScreen)}
                            />
                    }
                    />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent= {
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 25,
        backgroundColor: colors.white,
    },
    screen:{
        backgroundColor: colors.light,
        flex:1
    }

})

export default AccountScreen;