import ReactPlayer from 'react-player'
import type { VideoPlayerProps } from '../types';
import { Box } from '@mui/material';

export function VideoPlayer({videoSource}: VideoPlayerProps) {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                maxWidth: '1300px'
            }}
        >
            <ReactPlayer
                src={videoSource}
                controls={true}
                autoPlay
                width="100%"
                height="auto"
                style={{
                    maxWidth: '1300px',
                    borderRadius: '8px'
                }}
            />
        </Box>
    );
}