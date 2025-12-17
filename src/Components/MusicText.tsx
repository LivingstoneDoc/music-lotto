import { Box, Typography } from "@mui/material";
import type { MusicTextProps } from "../types";

export function MusicText({text}: MusicTextProps) {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', width: '900px'}}>
            <Typography sx={{whiteSpace: 'pre-line', fontSize: '30px', color: '#1976d2'}}>{text}</Typography>
        </Box>
    );
}