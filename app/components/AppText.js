import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles';

//to use children withour porps we have used destructuring i.e {children}
function AppText({children, style, ...otherProps}) {
    return (
        //children porperty whatever we pass in our component will be available in the children
        <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>
    );
}

export default AppText;