import { Box, Typography } from "@mui/material";
import { useFullscreenLike } from "../Hooks/useFullscreenLike";

export function Header() {
    const isFullscreenLike = useFullscreenLike(0.95);
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: { xs: 1, md: 1 },
                minHeight: { xs: 70, md: 120 },
                textAlign: 'center'
            }}
        >
            <Typography 
                variant="h1" 
                component="div" 
                sx={{
                    fontFamily: 'Pacifico', 
                    color: '#FFFACD', 
                    textShadow: '0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 40px #FF4500',
                    fontSize: isFullscreenLike ? 85 : { xs: 32, md: 64, lg: 70, xl: 80 },
                    lineHeight: 1.05
                }} 
                className="metal-text"
            >
                Новогоднее Музыкальное Лото
            </Typography>
    </Box>
    );
}