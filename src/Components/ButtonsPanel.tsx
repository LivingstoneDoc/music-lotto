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
                mt: isFullscreenLike ? { xs: 1, md: 2, lg: 4, xl: 20 } : { xs: 0.5, md: 1, lg: 4, xl: 12 },
                display: 'grid',
                gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
                justifyItems: 'center',
                rowGap: { xs: 1, md: 1.5, lg: 2.5, xl: 4 },
                columnGap: { xs: 0.5, md: 1.5, lg: 2.5, xl: 4 },
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