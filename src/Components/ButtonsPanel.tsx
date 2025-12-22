import { Box } from "@mui/material";
import { musicData } from "../data";
import { SongButton } from "./SongButton";
import type { ButtonsPanelProps } from "../types";
import { useFullscreenLike } from "../Hooks/useFullscreenLike";

export function ButtonsPanel({onClick, selectedSongsIds, getStylesBySongId}: ButtonsPanelProps) {
    const isFullscreenLike = useFullscreenLike(0.95);
    return (
        <Box 
            sx={{
                mt: isFullscreenLike ? 6 : { xs: 0.5, md: 1, lg: 0, xl: 7 },
                display: 'grid',
                gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
                justifyItems: 'center',
                rowGap: { xs: 1, md: 1.5, lg: 1.5, xl: 2 },
                columnGap: { xs: 0.5, md: 1.5, lg: 1.5, xl: 2 },
                maxWidth: '1920px',
                mx: 'auto',
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