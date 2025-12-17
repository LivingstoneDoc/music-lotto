import { Box } from "@mui/material";
import { musicData } from "../data";
import { SongButton } from "./SongButton";
import type { ButtonColor, ButtonsPanelProps } from "../types";

export function ButtonsPanel({onClick, selectedSongsIds}: ButtonsPanelProps) {
    return (
        <Box 
            sx={{
                marginTop: '50px',
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                flexWrap: 'wrap'
            }}
        >
            {musicData.map(musicItem => {
                const isSelectedSong = selectedSongsIds.includes(musicItem.id);
                let color: ButtonColor = 'primary';
                if (isSelectedSong && musicItem.id <= 10) {
                    color = 'success'
                } else if (isSelectedSong && musicItem.id >= 11 && musicItem.id <= 20) {
                    color = 'secondary'
                }
                return (
                    <SongButton key={musicItem.id} title={String(musicItem.id)} color={color} onClick={() => {onClick(musicItem.id)}}/>
                );
            })}
        </Box>
    );
}