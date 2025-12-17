import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import type { PlayerProps } from "../types";
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";
import { SongCard } from "./SongCard";
import { MusicText } from "./MusicText";
import { VideoPlayer } from "./VideoPlayer";

export function Player({cover, singer, title, audioSource, videoSource, text, onClick}: PlayerProps) {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '15px'}}>
            {videoSource === ''
            ?
            <>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <IconButton aria-label="back" onClick={onClick}>
                        <ArrowBackIosIcon color="primary" sx={{fontSize: '30px'}}/>
                    </IconButton>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <SongCard cover={cover} singer={singer} title={title}/>
                        <AudioPlayer singer={singer} title={title} cover={cover} audioSource={audioSource} onClick={onClick}/>
                    </Box>
                </Box>
                <MusicText text={text}/>
            </>
            :
            <>
                <Box sx={{display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <IconButton aria-label="back" onClick={onClick}>
                        <ArrowBackIosIcon color="primary" sx={{fontSize: '30px'}}/>
                    </IconButton>
                    <SongCard cover={cover} singer={singer} title={title}/>
                </Box>
                <VideoPlayer cover={cover} singer={singer} title={title} videoSource={videoSource} onClick={onClick}/>
            </>    
            }
        </Box>
    );
}