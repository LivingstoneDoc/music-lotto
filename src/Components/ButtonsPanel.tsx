import { Box } from "@mui/material";
import { musicData } from "../data";
import { SongButton } from "./SongButton";
import type { ButtonsPanelProps } from "../types";

export function ButtonsPanel({onClick, selectedSongsIds, getStylesBySongId}: ButtonsPanelProps) {
    return (
        <Box 
            sx={{
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                flexWrap: 'wrap'
            }}
        >
            {musicData.map(musicItem => {
                const isSelectedSong = selectedSongsIds.includes(musicItem.id);
                const stylesClass = getStylesBySongId(musicItem.id, isSelectedSong);
                
                return (
                    <SongButton 
                        key={musicItem.id} 
                        title={String(musicItem.id)} 
                        stylesClass={stylesClass} 
                        onClick={() => {onClick(musicItem.id)}}
                    />
                );
            })}
        </Box>
    );
}