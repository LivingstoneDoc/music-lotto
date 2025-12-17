import { Box, Card, CardMedia, Typography } from "@mui/material";
import type { MusicInfoProps } from "../types";

export function SongCard({cover, singer, title}: MusicInfoProps) {
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
            }}
        >
            <CardMedia
                component="img"
                height="auto"
                image={cover}
                alt={title}
                sx={{borderRadius: '8px', width: '500px'}}
            />
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <Typography variant="h3" color='primary' sx={{fontSize: '30px', textAlign: 'center'}}>{singer}</Typography>
                <Typography variant="h4" color='info' sx={{fontSize: '26px', textAlign: 'center'}}>{title}</Typography>
            </Box>
        </Card>
    );
}