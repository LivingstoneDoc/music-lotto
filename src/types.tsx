import type { ButtonProps } from "@mui/material"

export type ButtonColor = ButtonProps['color'];

export interface SongButtonProps {
    title: string,
    color: ButtonColor,
    onClick: () => void
}

export interface ButtonsPanelProps {
    onClick: (id: number) => void,
    selectedSongsIds: number[]
}

export interface AudioPlayerProps {
    singer: string,
    title: string,
    cover: string,
    audioSource: string,
    onClick: () => void
}

export interface VideoPlayerProps {
    singer: string,
    title: string,
    cover: string,
    videoSource: string,
    onClick: () => void
}

export interface PlayerProps {
    singer: string,
    title: string,
    cover: string,
    audioSource: string,
    videoSource: string,
    text: string,
    onClick: () => void
}

export interface MusicInfoProps {
    cover: string, 
    singer: string, 
    title: string
}

export interface MusicTextProps {
    text: string
}