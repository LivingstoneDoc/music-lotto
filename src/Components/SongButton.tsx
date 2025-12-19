import { Button } from "@mui/material";
import type { SongButtonProps } from "../types";

export function SongButton({title, stylesClass, onClick}: SongButtonProps) {
    const hoverBoxShadow = stylesClass.hoverShadow ? stylesClass.hoverShadow : stylesClass.shadow;

    return (
        <Button 
            variant="contained" 
            size='large' 
            onClick={onClick} 
            sx={{
                position: 'relative',
                width: { xs: 60, md: 80, lg: 75, xl: 100 },
                height: { xs: 60, md: 80, lg: 75, xl: 100 },
                borderRadius: '50%',
                color: stylesClass.color,
                backgroundColor: stylesClass.backgroundColor,
                fontFamily: 'Pacifico',
                fontSize: { xs: 28, md: 36, lg: 38, xl: 50 },
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