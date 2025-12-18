import { Box, Card, CardMedia, Typography } from "@mui/material";
import type { MusicInfoProps } from "../types";

export function SongCard({cover, singer, title, styles}: MusicInfoProps) {
    return (
        <Card 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                flex: 1,
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: styles.backgroundColor,
                boxShadow: styles.shadow
            }}
        >
            <CardMedia
                component="img"
                height="auto"
                image={cover}
                alt={title}
                sx={{borderRadius: '8px', width: '500px', height: '500px'}}
            />
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <Typography variant="h3" sx={{fontSize: '50px', textAlign: 'center', color: '#8b0000'}}>{singer}</Typography>
                <Typography variant="h4" sx={{fontFamily: 'Pacifico', fontSize: '40px', textAlign: 'center', color: '#8b0000'}}>{title}</Typography>
            </Box>
        </Card>
    );
}