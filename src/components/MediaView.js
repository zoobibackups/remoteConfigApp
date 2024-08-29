import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import { NativeMediaView } from 'react-native-admob-native-ads';
function Logger(tag = 'AD', type, value) {
    console.log(`[${tag}][${type}]:`, value);
}

export const MediaView = ({ aspectRatio = 1.5 }) => {
    const onVideoPlay = () => {
     //   Logger('VIDEO', 'PLAY', 'Video is now playing');
    };

    const onVideoPause = () => {
    //    Logger('VIDEO', 'PAUSED', 'Video is now paused');
    };

    const onVideoProgress = event => {
     //  Logger('VIDEO', 'PROGRESS UPDATE', event);
    };

    const onVideoEnd = () => {
 //      Logger('VIDEO', 'ENDED', 'Video end reached');
    };

    const onVideoMute = muted => {
      //  Logger('VIDEO', 'MUTE', muted);
    };

    return (

        <NativeMediaView
            style={{
                width: Dimensions.get('window').width - 80,
                height: 200,
                backgroundColor: '#0000',
                alignSelf:"center"
            }}
            onVideoPause={onVideoPause}
            onVideoPlay={onVideoPlay}
            onVideoEnd={onVideoEnd}
            onVideoProgress={onVideoProgress}
            onVideoMute={onVideoMute}
        />
    );
};
