import { Box } from "@mui/material";
import type { AudioPlayerProps } from "../../types";
import './AudioPlayer.css';

export function AudioPlayer({audioSource}: AudioPlayerProps) {
    return (
        <Box>
            <figure className="audioWrapper">
                <audio controls autoPlay src={audioSource}></audio>
            </figure>
        </Box>
    );
}