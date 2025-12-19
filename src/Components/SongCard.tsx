import { Box, Card, CardMedia, Typography } from "@mui/material";
import type { MusicInfoProps } from "../types";

export function SongCard({cover, singer, title, styles}: MusicInfoProps) {
    return (
        <Card 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 1, md: 1.5 },
                flex: 1,
                p: { xs: 1.5, md: 2, xl: 3 },
                borderRadius: '8px',
                backgroundColor: styles.backgroundColor,
                boxShadow: styles.shadow,
                maxWidth: { xs: '90vw', md: 400, xl: 500 }
            }}
        >
            <CardMedia
                component="img"
                height="auto"
                image={cover}
                alt={title}
                sx={{
                    borderRadius: '8px',
                    width: { xs: '80vw', md: 380, lg: 440, xl: 550 },
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: { md: '50vh', xl: '60vh' }
                }}
            />
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1, md: 2 }
                }}
            >
                <Typography 
                    variant="h3" 
                    sx={{
                        fontSize: { xs: 24, md: 36, xl: 48 },
                        textAlign: 'center',
                        color: '#8b0000'
                    }}
                >
                    {singer}
                </Typography>
                <Typography 
                    variant="h4" 
                    sx={{
                        fontFamily: 'Pacifico',
                        fontSize: { xs: 20, md: 32, xl: 40 },
                        textAlign: 'center',
                        color: '#8b0000'
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Card>
    );
}