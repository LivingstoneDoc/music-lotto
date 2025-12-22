import { Button } from "@mui/material";
import type { SongButtonProps } from "../types";
import { useFullscreenLike } from "../Hooks/useFullscreenLike";

export function SongButton({title, stylesClass, onClick}: SongButtonProps) {
    const isFullscreenLike = useFullscreenLike(0.95);
    const hoverBoxShadow = stylesClass.hoverShadow ? stylesClass.hoverShadow : stylesClass.shadow;

    return (
        <Button 
            variant="contained" 
            size='large' 
            onClick={onClick} 
            sx={{
                position: 'relative',
                width: isFullscreenLike ? 100 : { xs: 60, md: 80, lg: 75, xl: 100 },
                height: isFullscreenLike ? 100 : { xs: 60, md: 80, lg: 75, xl: 100 },
                borderRadius: '50%',
                color: stylesClass.color,
                backgroundColor: stylesClass.backgroundColor,
                fontFamily: 'Pacifico',
                fontSize: isFullscreenLike ? 50 :  { xs: 28, md: 36, lg: 38, xl: 50 },
                border: stylesClass.border,
                boxShadow: stylesClass.shadow,
                transition: 'all 0.2s ease',
                '&:hover': {
                boxShadow: hoverBoxShadow,
                },
            }}
        >
            <span style={{position: stylesClass.position, top: stylesClass.top}}>{title}</span>
        </Button>
    );
}