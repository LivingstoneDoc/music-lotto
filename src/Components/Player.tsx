import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import type { PlayerProps } from "../types";
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";
import { SongCard } from "./SongCard";
import { MusicText } from "./MusicText";
import { VideoPlayer } from "./VideoPlayer";
import { useFullscreenLike } from "../Hooks/useFullscreenLike";

export function Player({cover, singer, title, audioSource, videoSource, text, onClick, cardStyles}: PlayerProps) {
    const isFullscreenLike = useFullscreenLike(0.95);
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: { xs: 1.5, md: 2.5, xl: 3.5 },
                marginTop: isFullscreenLike ? 3 : 0,
                p: { xs: 1, md: '5px 15px', xl: '16px 32px' },
                maxWidth: '1920px',
                mx: 'auto'
            }}
        >
            {videoSource === ''
            ?
            <>
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'row', md: 'row' },
                        alignItems: 'flex-start',
                        gap: 1,
                        // flex: 1
                    }}
                >
                    <IconButton aria-label="back" onClick={onClick}>
                        <ArrowBackIosIcon 
                            sx={{
                                fontSize: { xs: 28, md: 36, xl: 44 },
                                color: '#EFBF04'
                            }}
                        />
                    </IconButton>
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 1, md: 2 }
                        }}
                    >
                        <SongCard cover={cover} singer={singer} title={title} styles={cardStyles}/>
                        <AudioPlayer singer={singer} title={title} cover={cover} audioSource={audioSource} onClick={onClick}/>
                    </Box>
                </Box>
                <MusicText text={text}/>
            </>
            :
            <>
                <Box 
                    sx={{
                        display: 'flex',
                        // flex: 1,
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 1
                    }}
                >
                    <IconButton aria-label="back" onClick={onClick}>
                        <ArrowBackIosIcon 
                            sx={{
                                fontSize: { xs: 28, md: 36, xl: 44 },
                                color: '#EFBF04'
                            }}
                        />
                    </IconButton>
                    <SongCard cover={cover} singer={singer} title={title} styles={cardStyles}/>
                </Box>
                <VideoPlayer cover={cover} singer={singer} title={title} videoSource={videoSource} onClick={onClick}/>
            </>    
            }
        </Box>
    );
}