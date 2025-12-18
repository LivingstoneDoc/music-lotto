import type { StylesProps } from "./types";

export function getStylesBySongId(id: number, isSelected: boolean): StylesProps {
    const baseStyles: StylesProps = {
        color: '#8b0000',
        backgroundColor: '#FFE4B5',
        hoverShadow: '0 0 5px #8b0000, 0 0 10px #8b0000, 0 0 20px #8b0000, 0 0 40px #FF4500',
        border: '10px solid #8b0000',
        position: 'absolute',
        top: '-8px'
    };

    if (!isSelected) {
        return baseStyles;
    }

    if (id <= 10) {
        return {
            color: '#8b0000',
            backgroundColor: '#FFCBDB',
            shadow: '0 0 5px #FF97BB, 0 0 10px #FF97BB, 0 0 20px #EB5284, 0 0 40px #FF1493',
            position: 'absolute',
            top: '0px'
        };
    } else if (id <= 20) {
        return {
            color: '#8b0000',
            backgroundColor: '#BDECB6',
            shadow: '0 0 5px #98FB98, 0 0 10px #98FB98, 0 0 20px #47A76A, 0 0 40px #00FF7F',
            position: 'absolute',
            top: '0px'
        };
    }
    else if (id <= 30) {
        return {
            color: '#8b0000',
            backgroundColor: '#E0B0FF',
            shadow: '0 0 5px #8F509D, 0 0 10px #8F509D, 0 0 20px #CD00CD, 0 0 40px #991199',
            position: 'absolute',
            top: '0px'
        };
    }
    else if (id <= 40) {
        return {
            color: '#8b0000',
            backgroundColor: '#FFCA86',
            shadow: '0 0 5px #FFB841, 0 0 10px #FFB841, 0 0 20px #F3A505, 0 0 40px #ED760E',
            position: 'absolute',
            top: '0px'
        };
    }
    
    return {
        color: '#8b0000',
        backgroundColor: '#ABCDEF',
        shadow: '0 0 5px #4285B4, 0 0 10px #4285B4, 0 0 20px #6495ED, 0 0 40px #002F55',
        position: 'absolute',
        top: '0px'
    };
}