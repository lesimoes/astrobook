import { View, Text, Image } from "react-native"
import colors from '../../theme/colors';
export default function Error () {

    return (
        <View style={{flex: 1, alignItems: 'center', marginTop: 140}}>
            <Image 
                source={require('../../assets/error.png')}
                style={{width: 300, height: 320}}
                />
            <Text 
                style={{color: colors.overlay, fontSize: 24, textAlign: 'center', fontWeight: '600' }}>Oopss, algo de errado não está certo!</Text>
        </View>
    )
}