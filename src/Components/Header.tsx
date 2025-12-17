import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export function Header() {
    return (
        <Box>
            <AppBar position="static" sx={{borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px'}}>
                <Toolbar sx={{justifyContent: 'center'}}>
                <Typography variant="h1" component="div" sx={{fontSize: '32px', textTransform: 'uppercase'}}>
                    Новогоднее Музыкальное Лото
                </Typography>
                </Toolbar>
            </AppBar>
    </Box>
    );
}