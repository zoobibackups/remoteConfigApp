import React, {useRef} from 'react';
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Onboarding from '../components/Onboarding';
import {RFValue, hp, wp} from '../constants/scaling';
import theme from '../constants/theme';
import pages from '../data/pages';
import {AuthRoutes} from '../constants/routes';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {setInitialRoute} from '../store/actions/languageActions';
import fonts from '../constants/fonts';
const IntroScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const onboardingRef = useRef(null);
  const Next = ({isLight, ...props}) => (
    <TouchableOpacity
      onPress={() => {
        onboardingRef.current.goNext();
      }}
      style={customstyles.buttonStyle}>
      <Text allowFontScaling={true} style={customstyles.buttonTxt}>
        {t('next')}
      </Text>
    </TouchableOpacity>
  );

  const Done = ({isLight, ...props}) => (
    <TouchableOpacity
      onPress={() => {
        dispatch(setInitialRoute('GettingStartedScreen'));
        navigation.navigate(AuthRoutes.GettingStartedScreen);
      }}
      style={customstyles.buttonStyle}>
      <Text allowFontScaling={true} style={customstyles.buttonTxt}>
        {t('done')}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{height: hp(5)}} />
      <Onboarding
        ref={onboardingRef}
        pages={pages}
        bottomBarHeight={hp(35)}
        titleStyles={customstyles.titleStyles}
        subTitleStyles={customstyles.subTitleStyles}
        imageContainerStyles={customstyles.imageContainerStyles}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
      />
    </SafeAreaView>
  );
};

export default IntroScreen;

const customstyles = StyleSheet.create({
  titleStyles: {
    fontWeight: '700',
    fontSize: 24,
    color: theme.textColor,
  },
  subTitleStyles: {
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: 1.1,
    color: theme.textColor,
  },
  buttonStyle: {
    backgroundColor: '#0090FF',
    // padding: 10,
    width: wp(20),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonTxt: {
    color: '#ffffff',
   
    fontFamily: fonts.Medium,
    fontSize: RFValue(12),
    includeFontPadding: false,
    fontWeight: '700',
  },
  imageContainerStyles: {
    height: wp(90),
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.24,
    // shadowRadius: 6.27,

    // elevation: 10,
  },
});
