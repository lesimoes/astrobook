import { Icon } from '@rneui/base';
import { View} from 'react-native';
import colors from '../theme/colors';

export default function Rating ({ rating = 0 }) {

    const stars = Array(5).map((value, index) => (
      <Icon
        key={index}
        name="star-outline"
        type="ionicon"
        size={18}
        color={colors.subtext}
      />
    ));
    const integer = Math.floor(rating);
    const decimal = rating % 1;
    
    for (let i = 0 ; i < 5 ; i ++) {
      if (i < integer) {
        stars[i] = (
          <Icon
              key={i}
              name="star-sharp"
              type="ionicon"
              size={20}
              color={colors.yellow}
          />
        )
      }
      if ((i + 1) === integer && decimal) {
        stars[i] = (
          <Icon
            key={i}
            name="star-half-sharp"
            type="ionicon"
            size={20}
            color={colors.yellow}
        />
        )
      } 
    }
  
    return(
      <View style={{ flexDirection: 'row', alignItems: 'center', height: 20}}> 
        {stars} 
      </View>
    )
  }