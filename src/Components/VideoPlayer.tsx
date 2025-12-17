import ReactPlayer from 'react-player'
import type { VideoPlayerProps } from '../types';
import { Box } from '@mui/material';

export function VideoPlayer({videoSource}: VideoPlayerProps) {
    return (
        <Box>
            <ReactPlayer
                src={videoSource}
                controls={true}
                autoPlay
                style={{width: '800px', height: 'auto', 'borderRadius': '8px'}}
            />
        </Box>
    );
}