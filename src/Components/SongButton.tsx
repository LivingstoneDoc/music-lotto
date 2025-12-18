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
                width: '100px',
                height: '100px',
                borderRadius: '100%', 
                color: stylesClass.color,
                backgroundColor: stylesClass.backgroundColor,
                fontFamily: 'Pacifico',
                fontSize: '50px',
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