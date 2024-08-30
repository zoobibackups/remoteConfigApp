import React, { useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import NativeAdView, {
    AdvertiserView,
    CallToActionView,
    HeadlineView,
    IconView,
    StarRatingView, NativeMediaView,
    AdBadge,
    StoreView,
    TaglineView,
    TestIds,
} from 'react-native-admob-native-ads';
import { MediaView } from './MediaView';
import Config from '../../env';
import fonts from '../constants/fonts';
import ShimmerPlaceholder from './ShimmerPlaceholder';
import { wp } from '../constants/scaling';

function Logger(tag = 'AD', type, value) {
    console.log(`[${tag}][${type}]:`, value);
}

export const AdView = ({ index, media, type, loadOnMount = true }) => {
    const [aspectRatio, setAspectRatio] = useState(1.5);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const nativeAdRef = useRef();

    const onAdFailedToLoad = event => {
        setError(true);
        setLoading(false);
        console.log(event, 'failed');
    };

    const onAdLoaded = data => {
        console.log(data, 'ATATATATATTA');
        // Logger('AD', 'LOADED', 'Ad has loaded successfully');
    };

    const onAdClicked = () => {
        Logger('AD', 'CLICK', 'User has clicked the Ad');
    };

    const onAdImpression = () => {
        Logger('AD', 'IMPRESSION', 'Ad impression recorded');
    };

    const onNativeAdLoaded = event => {
        setLoading(false);
        setLoading(false);
        Logger('AD', 'RECIEVED', 'Unified ad  Recieved', event);
        setLoading(false);
        setLoaded(true);
        setError(false);
        setAspectRatio(event.aspectRatio);
    };

    const onAdLeftApplication = () => {
        Logger('AD', 'LEFT', 'Ad left application');
    };

    useEffect(() => {
        nativeAdRef.current?.loadAd();
    }, []);
    return (
        <NativeAdView
            ref={nativeAdRef}
            adUnitID={Config.NATIVE_AD_ID}
            onAdLoaded={onAdLoaded}
            onAdFailedToLoad={onAdFailedToLoad}
            onAdLeftApplication={onAdLeftApplication}
            onAdClicked={onAdClicked}
            onAdImpression={onAdImpression}
            onNativeAdLoaded={onNativeAdLoaded}
            refreshInterval={3000}
            adChoicesPlacement={'topRight'}
            mediaAspectRatio={'unknown'}
            style={styles.mainContainer}
            videoOptions={{
                customControlsRequested: true,
            }}
            mediationOptions={{
                nativeBanner: true,
            }}>
            {loading ? (
                <ShimmerPlaceholder />
            ) : (
                <View style={{ flex: 1, width: wp(96) }}>
                    <View
                        style={{
                            ...styles.upperRow,
                            opacity: loading || error || !loaded ? 0 : 1,
                        }}>
                        <IconView
                            style={styles.iconView}
                        />
                        <View
                            style={{
                                paddingHorizontal: 8,
                                flexShrink: 1,
                            }}>
                                 <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 1,
                                    alignItems: 'center',
                                }}>
                                <AdBadge
                                    textStyle={{
                                        fontFamily: fonts.Medium,
                                        fontSize: 10,
                                        color: '#fff',
                                    }}
                                    style={{
                                        
                                        width: 25,
                                        backgroundColor: '#f57105',
                                        borderColor: '#f57105',
                                        height: 16,
                                    }}
                                />
                            <HeadlineView
                                hello="abc"
                                style={{
                                    fontWeight: "700",
                                    fontSize: 13,
                                    marginLeft:30,
                                    fontFamily: fonts.Medium,
                                    color: 'black',
                                }}
                            />
                            </View>
                            <TaglineView
                                numberOfLines={2}
                                style={{
                                    fontSize: 12,
                                    fontFamily: fonts.Medium,
                                    color: 'black',
                                }}
                            />
                            <AdvertiserView
                                style={{
                                    fontSize: 10,
                                    fontFamily: fonts.Medium,
                                    color: 'gray',
                                }}
                            />

                           
                        </View>
                    </View>
                    
                    <NativeMediaView
                        resizeMode={"contain"} 
                        style={styles.mediaView}
                    />
                    <CallToActionView
                        style={styles.buttonStyle}
                        allCaps
                        textStyle={styles.buttonTxtStyle}
                    />
                </View>
            )}
        </NativeAdView>
    );
};

export default AdView;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        backgroundColor: '#ffff',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#0003',
        alignSelf: 'center',
    },
    upperRow: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        maxWidth: '100%',
    },
    iconView: {
        width: 62,
        height: 62,
        borderRadius: 7
    },
    mediaView:{
        width: wp(100) - 40,
        height: 160, 
        maxHeight:160,
        borderRadius:7,
        overflow:"hidden",
        backgroundColor: '#00000065',
        alignSelf: "center"
    },
    buttonStyle: {
        minHeight: 45,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        marginVertical: 5,
        backgroundColor: "#f57105",
        borderRadius: 100,

        alignSelf: 'center',
        
        width: wp(92),
    },
    buttonTxtStyle: {
        fontSize: 13,
        fontFamily: fonts.Bold,
        flexWrap: 'wrap',
        textAlign: 'center',
        color: 'white',
    }
});
