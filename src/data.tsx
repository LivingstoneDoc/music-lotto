const BASE_URL = import.meta.env.BASE_URL;

const musicText = 
    {
        song1: `Now that the love is gone
            What are we supposed to do?
            After all that we've been through
            When everything that felt so right is wrong
            Now that the love is gone (love is gone)
            What are we supposed to do?
            After all that we've been through
            When everything that felt so right is wrong
            Now that the love is gone
            There is nothing left to prove
            No use to deny this simple truth
            Can't find the reason to keep holding on
            Now that the love is gone (love is gone)
            Now that the love is gone
            The love felt so right, so wrong
            Now that the love is gone
            I feel so hurt inside
            Feel so hurt inside
            Got to find a reason`
    };

export const musicData = [
    {
        id: 1, 
        singer: 'David Guetta, Fred Rister', 
        name: 'Love Is Gone', 
        cover: `${BASE_URL}/img/David-Guetta.jpg`, 
        audioSource: `${BASE_URL}/music/David_Guetta_Fred_Rister_-_Love_Is_Gone.mp3#t=00:01:20`,
        videoSource: '',
        musicText: musicText.song1
    },
    {
        id: 2, 
        singer: 'Avril Lavigne', 
        name: 'Girlfriend', 
        cover: `${BASE_URL}/img/Avril-Lavigne.jpg`, 
        audioSource: `${BASE_URL}/music/Avril_Lavigne_-_Girlfriend.mp3`,
        videoSource: `${BASE_URL}/video/Avril_Lavigne-Girlfriend.mp4#t=00:01:20`,
        musicText: ''
    },
    {
        id: 3, 
        singer: 'MakSim', 
        name: 'Знаешь ли ты', 
        cover: `${BASE_URL}/img/Maksim.jpg`, 
        audioSource: `${BASE_URL}/music/MakSim_-_Znaesh_li_ty.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 4, 
        singer: 'Britney Spears', 
        name: 'Gimme More', 
        cover: `${BASE_URL}/img/Britney-Spears.jpg`, 
        audioSource: `${BASE_URL}/music/Britney_Spears_-_Gimme_More.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 5, 
        singer: 'Justin Timberlake, 50 Cent, Timbaland', 
        name: 'Ayo Technology', 
        cover: `${BASE_URL}/img/50-cent.jpg`, 
        audioSource: `${BASE_URL}/music/Justin_Timberlake_50_Cent_Timbaland_-_Ayo_Technology.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 6, 
        singer: 'Linkin Park', 
        name: 'What I`ve Done', 
        cover: `${BASE_URL}/img/Linkin-Park.jpg`, 
        audioSource: `${BASE_URL}/music/Linkin_Park_-_What_Ive_Done.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 7, 
        singer: 'Kanye West', 
        name: 'Stronger', 
        cover: `${BASE_URL}/img/Kanye-West.jpg`, 
        audioSource: `${BASE_URL}/music/Kanye_West_-_Stronger.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 8, 
        singer: 'Rihanna', 
        name: 'Umbrella', 
        cover: `${BASE_URL}/img/Rihanna.jpg`, 
        audioSource: `${BASE_URL}/music/Rihanna_-_Umbrella.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 9, 
        singer: 'Soulja Boy', 
        name: 'Crank That', 
        cover: `${BASE_URL}/img/Soulja-Boy.jpg`, 
        audioSource: `${BASE_URL}/music/Soulja_Boy_Tellem_Crank_That.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 10, 
        singer: 'Timbaland', 
        name: 'Apologize', 
        cover: `${BASE_URL}/img/Timbaland.jpg`, 
        audioSource: `${BASE_URL}/music/Timbaland_-_Apologize.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 11, 
        singer: 'David Guetta, Fred Rister', 
        name: 'Love Is Gone', 
        cover: `${BASE_URL}/img/David-Guetta.jpg`, 
        audioSource: `${BASE_URL}/music/David_Guetta_Fred_Rister_-_Love_Is_Gone.mp3#t=00:01:20`,
        videoSource: '',
        musicText: musicText.song1
    },
    {
        id: 12, 
        singer: 'Avril Lavigne', 
        name: 'Girlfriend', 
        cover: `${BASE_URL}/img/Avril-Lavigne.jpg`, 
        audioSource: `${BASE_URL}/music/Avril_Lavigne_-_Girlfriend.mp3`,
        videoSource: `${BASE_URL}/video/Avril_Lavigne-Girlfriend.mp4#t=00:01:20`,
        musicText: ''
    },
    {
        id: 13, 
        singer: 'MakSim', 
        name: 'Знаешь ли ты', 
        cover: `${BASE_URL}/img/Maksim.jpg`, 
        audioSource: `${BASE_URL}/music/MakSim_-_Znaesh_li_ty.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 14, 
        singer: 'Britney Spears', 
        name: 'Gimme More', 
        cover: `${BASE_URL}/img/Britney-Spears.jpg`, 
        audioSource: `${BASE_URL}/music/Britney_Spears_-_Gimme_More.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 15, 
        singer: 'Justin Timberlake, 50 Cent, Timbaland', 
        name: 'Ayo Technology', 
        cover: `${BASE_URL}/img/50-cent.jpg`, 
        audioSource: `${BASE_URL}/music/Justin_Timberlake_50_Cent_Timbaland_-_Ayo_Technology.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 16, 
        singer: 'Linkin Park', 
        name: 'What I`ve Done', 
        cover: `${BASE_URL}/img/Linkin-Park.jpg`, 
        audioSource: `${BASE_URL}/music/Linkin_Park_-_What_Ive_Done.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 17, 
        singer: 'Kanye West', 
        name: 'Stronger', 
        cover: `${BASE_URL}/img/Kanye-West.jpg`, 
        audioSource: `${BASE_URL}/music/Kanye_West_-_Stronger.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 18, 
        singer: 'Rihanna', 
        name: 'Umbrella', 
        cover: `${BASE_URL}/img/Rihanna.jpg`, 
        audioSource: `${BASE_URL}/music/Rihanna_-_Umbrella.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 19, 
        singer: 'Soulja Boy', 
        name: 'Crank That', 
        cover: `${BASE_URL}/img/Soulja-Boy.jpg`, 
        audioSource: `${BASE_URL}/music/Soulja_Boy_Tellem_Crank_That.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 20, 
        singer: 'Timbaland', 
        name: 'Apologize', 
        cover: `${BASE_URL}/img/Timbaland.jpg`, 
        audioSource: `${BASE_URL}/music/Timbaland_-_Apologize.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 21, 
        singer: 'David Guetta, Fred Rister', 
        name: 'Love Is Gone', 
        cover: `${BASE_URL}/img/David-Guetta.jpg`, 
        audioSource: `${BASE_URL}/music/David_Guetta_Fred_Rister_-_Love_Is_Gone.mp3#t=00:01:20`,
        videoSource: '',
        musicText: musicText.song1
    },
    {
        id: 22, 
        singer: 'Avril Lavigne', 
        name: 'Girlfriend', 
        cover: `${BASE_URL}/img/Avril-Lavigne.jpg`, 
        audioSource: `${BASE_URL}/music/Avril_Lavigne_-_Girlfriend.mp3`,
        videoSource: `${BASE_URL}/video/Avril_Lavigne-Girlfriend.mp4#t=00:01:20`,
        musicText: ''
    },
    {
        id: 23, 
        singer: 'MakSim', 
        name: 'Знаешь ли ты', 
        cover: `${BASE_URL}/img/Maksim.jpg`, 
        audioSource: `${BASE_URL}/music/MakSim_-_Znaesh_li_ty.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 24, 
        singer: 'Britney Spears', 
        name: 'Gimme More', 
        cover: `${BASE_URL}/img/Britney-Spears.jpg`, 
        audioSource: `${BASE_URL}/music/Britney_Spears_-_Gimme_More.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 25, 
        singer: 'Justin Timberlake, 50 Cent, Timbaland', 
        name: 'Ayo Technology', 
        cover: `${BASE_URL}/img/50-cent.jpg`, 
        audioSource: `${BASE_URL}/music/Justin_Timberlake_50_Cent_Timbaland_-_Ayo_Technology.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 26, 
        singer: 'Linkin Park', 
        name: 'What I`ve Done', 
        cover: `${BASE_URL}/img/Linkin-Park.jpg`, 
        audioSource: `${BASE_URL}/music/Linkin_Park_-_What_Ive_Done.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 27, 
        singer: 'Kanye West', 
        name: 'Stronger', 
        cover: `${BASE_URL}/img/Kanye-West.jpg`, 
        audioSource: `${BASE_URL}/music/Kanye_West_-_Stronger.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 28, 
        singer: 'Rihanna', 
        name: 'Umbrella', 
        cover: `${BASE_URL}/img/Rihanna.jpg`, 
        audioSource: `${BASE_URL}/music/Rihanna_-_Umbrella.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 29, 
        singer: 'Soulja Boy', 
        name: 'Crank That', 
        cover: `${BASE_URL}/img/Soulja-Boy.jpg`, 
        audioSource: `${BASE_URL}/music/Soulja_Boy_Tellem_Crank_That.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 30, 
        singer: 'Timbaland', 
        name: 'Apologize', 
        cover: `${BASE_URL}/img/Timbaland.jpg`, 
        audioSource: `${BASE_URL}/music/Timbaland_-_Apologize.mp3`,
        videoSource: `${BASE_URL}/video/Land Del Rey-Summertime Sadness.mp4`,
        musicText: ''
    },
    {
        id: 31, 
        singer: 'David Guetta, Fred Rister', 
        name: 'Love Is Gone', 
        cover: `${BASE_URL}/img/David-Guetta.jpg`, 
        audioSource: `${BASE_URL}/music/David_Guetta_Fred_Rister_-_Love_Is_Gone.mp3#t=00:01:20`,
        videoSource: '',
        musicText: musicText.song1
    },
    {
        id: 32, 
        singer: 'Avril Lavigne', 
        name: 'Girlfriend', 
        cover: `${BASE_URL}/img/Avril-Lavigne.jpg`, 
        audioSource: `${BASE_URL}/music/Avril_Lavigne_-_Girlfriend.mp3`,
        videoSource: `${BASE_URL}/video/Avril_Lavigne-Girlfriend.mp4#t=00:01:20`,
        musicText: ''
    }
];