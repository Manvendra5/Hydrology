//styles.js contains 1. The Color pallete. So we can use colors directly using defaultStyles.colors.___ 2. it also contains the styles for the texts
import { Platform } from 'react-native';

import colors from '../config/colors';

export default {
    colors,
    text:{
        color: colors.dark,
        fontFamily:Platform.OS=== "android" ? "Roboto" : "Avenir",
        fontSize: 18,
    }
}
