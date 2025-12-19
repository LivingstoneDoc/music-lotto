import { Box, Typography } from "@mui/material";
import type { MusicTextProps } from "../types";

export function MusicText({text}: MusicTextProps) {
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flex: 1,
                maxWidth: { xs: '90vw', md: 600, lg: 800, xl: 900 },
                paddingRight: '10px',
                maxHeight: '75vh',
                overflowY: 'auto'
            }}
        >
            <Typography 
                sx={{
                    whiteSpace: 'pre-line',
                    fontSize: { xs: 18, md: 24, xl: 32 },
                    color: '#F4C430',
                    m: 0,
                    p: 0,
                    lineHeight: 1.25,
                    textAlign: 'left'
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}