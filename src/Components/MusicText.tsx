import { Box, Typography } from "@mui/material";
import type { MusicTextProps } from "../types";

export function MusicText({text}: MusicTextProps) {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', width: '900px'}}>
            <Typography sx={{whiteSpace: 'pre-line', fontSize: '32px', color: '#F4C430', margin: 0, padding: 0, lineHeight: 1.2}}>{text}</Typography>
        </Box>
    );
}