import React from 'react';
import { Image } from 'react-native';
import { wp } from '../constants/scaling';
const styles = {
    image: {
      width: wp(100),
      height: wp(90),
      resizeMode:"contain"  ,
    },
  };
  
  const pages = [
    {
      backgroundColor: '#fff',
      image: (
        <Image source={require('../assets/images/b1.png')} style={styles.image} />
      ),
      title: '',
      subtitle: `b1`,
    },
    {
      backgroundColor: '#fff',
      image: (
        <Image source={require('../assets/images/b2.png')} style={styles.image} />
      ),
      title: '',
      subtitle: `b2`,
    },
    {
      backgroundColor: '#fff',
      image: (
        <Image source={require('../assets/images/b3.png')} style={styles.image} />
      ),
      title: '',
      subtitle: 'b3',
    },
    {
      backgroundColor: '#fff',
      image: (
        <Image source={require('../assets/images/b4.png')} style={styles.image} />
      ),
      title: '',
      subtitle: 'b4',
    },
  ];

export default pages