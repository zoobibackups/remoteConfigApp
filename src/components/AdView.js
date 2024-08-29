import React, { useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Platform,
    Text,
    View
} from 'react-native';
import NativeAdView, {
    AdvertiserView,
    CallToActionView,
    HeadlineView,
    IconView,
    StarRatingView, AdBadge,
    StoreView,
    TaglineView,
    TestIds,
} from 'react-native-admob-native-ads';
import { MediaView } from './MediaView';
import Config from '../../env';
import fonts from '../constants/fonts';
import ShimmerPlaceholder from './ShimmerPlaceholder';

function Logger(tag = 'AD', type, value) {
    console.log(`[${tag}][${type}]:`, value);
}

export const AdView =({ index, media, type, loadOnMount = true }) => {
    const [aspectRatio, setAspectRatio] = useState(1.5);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const nativeAdRef = useRef();

    const onAdFailedToLoad = event => {
        setError(true);
        setLoading(false);
        console.log(event, "failed");
    };

    const onAdLoaded = (data) => {
        console.log(data,'ATATATATATTA');
        // Logger('AD', 'LOADED', 'Ad has loaded successfully');
    };

    const onAdClicked = () => {
        Logger('AD', 'CLICK', 'User has clicked the Ad');
    };

    const onAdImpression = () => {
        Logger('AD', 'IMPRESSION', 'Ad impression recorded');
    };

    const onNativeAdLoaded = event => {        
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
    }, [loadOnMount]);
    return (
        <NativeAdView
            ref={nativeAdRef}
            adUnitID={"ca-app-pub-3940256099942544/1044960115"}
            onAdLoaded={onAdLoaded}
            onAdFailedToLoad={onAdFailedToLoad}
            onAdLeftApplication={onAdLeftApplication}
            onAdClicked={onAdClicked}
            onAdImpression={onAdImpression}
            onNativeAdLoaded={onNativeAdLoaded}
            refreshInterval={3000}
            //repository={'clipFeedNativeAd'}
            style={{
                width: '100%',
                backgroundColor: "#0001",
                borderWidth: 1,
                borderColor: "#0003",
                alignSelf: 'center',
            }}
            videoOptions={{
                customControlsRequested: true,
            }}
            mediationOptions={{
                nativeBanner: true,
            }}
        >

            {loading ? <ShimmerPlaceholder /> :
            <View>
            <View
                style={{
                    height: 70,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    opacity: loading || error || !loaded ? 0 : 1,
                    maxWidth: '100%',
                }}>
                <IconView
                    style={{
                        width: 60,
                        height: 60,
                    }}
                />
                <View
                    style={{
                        paddingHorizontal: 6,
                        flexShrink: 1,
                    }}>
                    <HeadlineView
                        hello="abc"
                        style={{
                            fontWeight: 'bold',
                            fontSize: 13,
                            color: 'black',
                        }}
                    />
                    <TaglineView
                        numberOfLines={2}
                        style={{
                            fontSize: 11,
                            color: 'black',
                        }}
                    />
                    <AdvertiserView
                        style={{
                            fontSize: 10,
                            color: 'gray',
                        }}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 2,
                            alignItems: 'center',
                        }}>
                        <AdBadge textStyle={{ fontFamily: fonts.Medium, fontSize: 10, color: "#fff" }} style={{ width: 25, backgroundColor: "#f57105", borderColor: "#f57105", height: 16 }} />
                        <StoreView
                            style={{
                                marginLeft: 30,
                                fontSize: 12,
                                color: 'black',
                            }}
                        />
                        <StarRatingView
                            starSize={12}
                            fullIconColor="#f57105"
                            emptyStarColor="gray"
                            style={{
                                width: 65,
                                marginLeft: 10,
                            }}
                        />

                    </View>
                </View>

                <CallToActionView
                    style={[
                        {
                            minHeight: 30,
                            paddingHorizontal: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                            elevation: 10,
                            maxWidth: 100,
                            width: 80,
                        },
                        Platform.OS === 'ios'
                            ? {
                                backgroundColor: '#f57105',
                                borderRadius: 4,
                            }
                            : {},
                    ]}
                    buttonAndroidStyle={{
                        backgroundColor: '#f57105',
                        borderRadius: 10,
                    }}
                    allCaps
                    textStyle={{
                        fontSize: 13,
                        fontFamily: fonts.SemiBold,
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        color: 'white',
                    }}
                />
            </View> 
            <MediaView aspectRatio={aspectRatio} />
            </View>}
        </NativeAdView>
    );
}
