import { Box, Typography } from "@mui/material";

export function Header() {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', padding: '10px', height: '150px'}}>
            <Typography 
                variant="h1" 
                component="div" 
                sx={{
                    fontFamily: 'Pacifico', 
                    color: '#FFFACD', 
                    textShadow: '0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 40px #FF4500'
                }} 
                className="metal-text"
            >
                Новогоднее Музыкальное Лото
            </Typography>
    </Box>
    );
}