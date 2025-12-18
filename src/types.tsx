export interface StylesProps {
    color?: string,
    backgroundColor?: string,
    shadow?: string,
    hoverShadow?: string,
    border?: string,
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky',
    top?: string
}

export interface SongButtonProps {
    title: string,
    stylesClass: StylesProps,
    onClick: () => void
}

export interface ButtonsPanelProps {
    onClick: (id: number) => void,
    selectedSongsIds: number[],
    getStylesBySongId: (id: number, isSelected: boolean) => StylesProps
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
    onClick: () => void,
    cardStyles: StylesProps
}

export interface MusicInfoProps {
    cover: string, 
    singer: string, 
    title: string,
    styles: StylesProps
}

export interface MusicTextProps {
    text: string
}