import { Button } from "@mui/material";
import type { SongButtonProps } from "../types";

export function SongButton({title, color, onClick}: SongButtonProps) {
    return (
        <Button variant="contained" size='large' color={color} onClick={onClick} sx={{width: '100px'}}>{title}</Button>
    );
}