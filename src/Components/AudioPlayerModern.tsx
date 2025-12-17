// import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import type { AudioPlayerProps } from "../types";
// import './AudioPlayer.css';

// export function AudioPlayer({singer, title, cover, audioSource, onClick}: AudioPlayerProps) {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [play, { pause, duration, sound }] = useSound(audioSource);
//     // const [currTime, setCurrTime] = useState({
//     //     min: 0,
//     //     sec: 0,
//     // });
//     // const [seconds, setSeconds] = useState();

//     useEffect(() => {
//         play();
//         setIsPlaying(true);
//         return () => {
//             pause();
//         }
//     }, [play, pause])

//     const playingButton = () => {
//         if (isPlaying) {
//         pause();
//         setIsPlaying(false);
//         } else {
//         play();
//         setIsPlaying(true);
//         }
//     };

// //     const sec = duration ? duration / 1000 : 0;
// //     const min = Math.floor(sec / 60);
// //     const secRemain = Math.floor(sec % 60);
// //     const time = {
// //         min: min,
// //         sec: secRemain
// //     };

// //     useEffect(() => {
// //     const interval = setInterval(() => {
// //       if (sound) {
// //         setSeconds(sound.seek([])); // устанавливаем состояние с текущим значением в секундах
// //         const min = Math.floor(sound.seek([]) / 60);
// //         const sec = Math.floor(sound.seek([]) % 60);
// //         setCurrTime({
// //           min,
// //           sec,
// //         });
// //       }
// //     }, 1000);
// //     return () => clearInterval(interval);
// //   }, [sound]);

//     return (
//         <Box>
//             {/* <IconButton aria-label="back" onClick={onClick}>
//                 <ArrowBackIosIcon/>
//              </IconButton> */}
//             <Card 
//                 sx={{
//                     position: 'relative',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '10px',
//                     flex: 1,
//                     padding: '15px',
//                     borderRadius: '8px',
//             }}
//         >
//             <CardMedia
//                 component="img"
//                 height="auto"
//                 image={cover}
//                 alt={title}
//                 sx={{borderRadius: '8px', width: '100px'}}
//             />
//             <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
//                 <Typography variant="h3" color='primary' sx={{fontSize: '24px', textAlign: 'center'}}>{singer}</Typography>
//                 <Typography variant="h4" color='info' sx={{fontSize: '20px', textAlign: 'center'}}>{title}</Typography>
//             </Box>
//             {/* <div>
//                 <div className="time">
//                     <p>
//                         {currTime.min}:{currTime.sec}
//                     </p>
//                     <p>
//                         {time.min}:{time.sec}
//                     </p>
//                 </div>
//                 <input
//                     type="range"
//                     min="0"
//                     max={sec}
//                     defaultValue={0}
//                     value={seconds}
//                     className="timeline"
//                     onChange={(e) => {
//                         sound.seek([e.target.value]);
//                     }}
//                 />
//             </div> */}
//             {!isPlaying ? (
//                 <IconButton aria-label="play" onClick={playingButton} sx={{position: 'absolute', left: '30px'}}>
//                     <PlayArrowIcon color="primary" sx={{fontSize: '50px'}}/>
//                 </IconButton>
//             ) : (
//                 <IconButton aria-label="pause" onClick={playingButton} sx={{position: 'absolute', left: '30px'}}>
//                     <PauseIcon color="primary" sx={{fontSize: '50px'}}/>
//                 </IconButton>
//             )}
//         </Card>
//         </Box>
//     );
// }