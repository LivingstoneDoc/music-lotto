import { useState } from "react";
import { ButtonsPanel } from "./ButtonsPanel";
// import { AudioPlayer } from "./AudioPlayer/AudioPlayer";
// import { VideoPlayer } from "./VideoPlayer";
import { musicData } from "../data";
import { Player } from "./Player";
import { getStylesBySongId } from "../utils";

export function MusicBox() {
    const [selectedSongsIds, setSelectedSongsIds] = useState<number[]>([]);
    const [currentSongId, setCurrentSongId] = useState<number | null>(null);
    const currentSong = musicData.find(musicItem => musicItem.id === currentSongId);

    const handleSongButtonClick = (id: number) => {
        setSelectedSongsIds(prev=> [...prev, id]);
        console.log('clicked songs', selectedSongsIds);
        setCurrentSongId(id);
    }

    const handleClickBackButton = () => {
        setCurrentSongId(null);
    }
    if (currentSongId === null || !currentSong) {
        return (
            <ButtonsPanel onClick={handleSongButtonClick} selectedSongsIds={selectedSongsIds} getStylesBySongId={getStylesBySongId}/>
        );
    }

    const isSelected = selectedSongsIds.includes(currentSong.id);
    const currentStyles = getStylesBySongId(currentSong.id, isSelected);

    return (
        <>
            {/* <AudioPlayer singer={currentSong.singer} title={currentSong.name} cover={currentSong.cover} source={currentSong.source} onClick={handleClickBackButton}/> */}
            {/* <VideoPlayer cover={currentSong.cover} singer={currentSong.singer} title={currentSong.name} source={currentSong.videoSource} text={currentSong.musicText} onClick={handleClickBackButton}/> */}
            <Player 
                cover={currentSong.cover} 
                singer={currentSong.singer} 
                title={currentSong.name} 
                audioSource={currentSong.audioSource} 
                videoSource={currentSong.videoSource} 
                text={currentSong.musicText} 
                onClick={handleClickBackButton}
                cardStyles={currentStyles}
            />
        </>
    );
}