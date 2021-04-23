import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';


import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages =[
    {
        id: 1,
        title: "T1",
        description: 'D1',
        image: require('../assets/khadeeja-yasser-3U9L9Chc3is-unsplash.jpg')
    },
    {
        id:2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/khadeeja-yasser-3U9L9Chc3is-unsplash.jpg') 
    }
]

function MessagesScreen(props) {

    //setMessages acts as setState and it uses hooks i.e useState()
    const [messages, setMessages]= useState(initialMessages);
    const [refreshing, setRefreshing]= useState(false);
    const handleDelete =message =>{
        // delete the message from message array above
        setMessages(messages.filter(m => m.id !== message.id));
    }
    return (
        <Screen style={styles.screen}>
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
        (<ListItem
            title={item.title}
            subTitle={item.description} 
            image={item.image} 
            onPress={() => console.log("selected", item)}
            renderRightActions= {() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
            />) } 
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        //this will update the messages 
        onRefresh= {() =>
            { setMessages([
                {
                id:2,
                title: 'T2',
                description: 'D2',
                image: require('../assets/khadeeja-yasser-3U9L9Chc3is-unsplash.jpg') 
                }
            ])
            }
        }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: 10,
    }
});

export default MessagesScreen;