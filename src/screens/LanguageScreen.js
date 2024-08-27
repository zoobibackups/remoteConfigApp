import {Box, NativeBaseProvider, Text} from 'native-base';
import React, {useState} from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {AdView} from '../components/AdView';
import fonts from '../constants/fonts';
import {hp, moderateScale, wp} from '../constants/scaling';
import theme from '../constants/theme';
import Languages from '../utils/translations';
export default function LanguageScreen() {
    const [is_selected, setIsSelected] = useState(false);
    const {selectedLanguage} = useSelector(state => state.languageReducer);
    return (
        <NativeBaseProvider>
            <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
                <FlatList
                    numColumns={2}
                    data={Languages}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity
                                key={`${index}`}
                                style={styles.languageBox}>
                                <Image
                                    source={{uri: item.flag}}
                                    resizeMode={'cover'}
                                    style={{
                                        width: wp(12),
                                        borderRadius: moderateScale(5),
                                        height: wp(8),
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                    <Text style={styles.languageText}>
                                        {item.name}
                                    </Text>
                                    <View
                                        style={{
                                            ...styles.RadioOut,
                                            borderColor:
                                                selectedLanguage == item.code &&
                                                is_selected
                                                    ? theme.primaryColor
                                                    : theme.borderColor,
                                        }}>
                                        {selectedLanguage == item.code &&
                                            is_selected && (
                                                <View style={styles.RadioIn} />
                                            )}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </Box>
            <AdView />
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: theme.whiteColor,
    },
    logoStyle: {
        width: wp(40),
        alignSelf: 'center',
        height: wp(40),
        marginTop: wp(30),
    },
    languageBox: {
        width: wp(44),
        padding: moderateScale(10),
        alignSelf: 'center',
        marginTop: moderateScale(10),
        borderColor: theme.borderColor,
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(6),
        backgroundColor: theme.white,
        height: moderateScale(80),
        elevation: 10,
    },
    languageText: {
        fontFamily: fonts.Medium,
        color: theme.textColor,
        includeFontPadding: false,
        fontSize: moderateScale(16),
        marginVertical: moderateScale(10),
    },
    RadioOut: {
        width: wp(6),
        height: wp(6),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: wp(0.5),
        borderRadius: wp(5),
        borderColor: theme.borderColor,
    },
    RadioIn: {
        width: wp(2.5),
        height: wp(2.5),
        borderRadius: wp(3),
        backgroundColor: theme.primaryColor,
    },
    AdView: {
        borderRadius: moderateScale(6),
        borderWidth: moderateScale(1),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: wp(92),
        paddingVertical: moderateScale(10),
        marginTop: wp(2),
        height: hp(20),
        borderColor: theme.blackColor,
    },
});
