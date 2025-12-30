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
        singer: 'М/ф Простоквашино', 
        name: 'Кабы не было зимы', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Prostokvashino.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Kaby_ne_bylo_zimy.mp4',
        musicText: ''
    },
    {
        id: 2, 
        singer: 'Андрей Губин', 
        name: 'Зима-холода', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Gubin.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Andrey_Gubin-Zima_kholoda.mp4',
        musicText: ''
    },
    {
        id: 3, 
        singer: 'Анжелика Варум', 
        name: 'Зимняя вишня', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Varum.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Anzhelika_Varum-Zimnyaya_vishnya.mp4#t=00:00:24',
        musicText: ''
    },
    {
        id: 4, 
        singer: 'Алла Пугачёва, Кристина Орбакайте', 
        name: 'Опять метель',
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Pugacheva.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Alla_Pugachova_i_Kristina_Orbakayte-Opyat_metel.mp4#t=00:00:37',
        musicText: ''
    },
    {
        id: 5, 
        singer: 'Моя Мишель', 
        name: 'Зима в сердце', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Mishel.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Moya_Mishel-Zima_V_Serdce.mp4#t=00:00:09',
        musicText: ''
    },
    {
        id: 6, 
        singer: 'Филипп Киркоров', 
        name: 'Снег', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Kirkorov.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Filipp_Kirkorov-Sneg.mp4#t=00:00:09',
        musicText: ''
    },
    {
        id: 7, 
        singer: 'Премьер-министр', 
        name: 'Синий иней', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Premyer_ministr.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Premyer_ministr-Siniy_iney.mp4#t=00:00:09',
        musicText: ''
    },
    {
        id: 8, 
        singer: 'София Ротару', 
        name: 'Белая зима', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Rotaru.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Sofiya_Rotaru-Belaya_zima.mp4#t=00:00:19',
        musicText: ''
    },
    {
        id: 9, 
        singer: 'Игорь Николаев', 
        name: 'Дельфин и русалка', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Nikolaev.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Igor_Nikolaev-Delfin_i_rusalka_feat_Natasha_Korole.mp4#t=00:00:04',
        musicText: ''
    },
    {
        id: 10, 
        singer: 'Демо', 
        name: 'Солнышко в руках', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Demo.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Demo-Solnyshko_v_rukakh.mp4#t=00:00:40',
        musicText: ''
    },
    {
        id: 11, 
        singer: 'Натали', 
        name: 'Ветер с моря дул', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Natali.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Natali-Veter_s_morya_dul.mp4',
        musicText: musicText.song1
    },
    {
        id: 12, 
        singer: 'Наталья Ветлицкая', 
        name: 'Посмотри в глаза', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Natalya-Vetlitskaya.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Natalya_Vetlickaya-Posmotri_v_glaza.mp4#t=00:00:26',
        musicText: ''
    },
    {
        id: 13, 
        singer: 'Hi-Fi', 
        name: 'Не дано', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Hi-fi.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Hi-Fi-Ne_dano.mp4#t=00:00:29',
        musicText: ''
    },
    {
        id: 14, 
        singer: 'Вирус', 
        name: 'Ты меня не ищи', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Virus.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Virus-Ty_menya_ne_ishhi.mp4#t=00:00:25',
        musicText: ''
    },
    {
        id: 15, 
        singer: 'Мурат Насыров', 
        name: 'Я это ты', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Nasyrov.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Murat_Nasyrov-Ya_jeto_ty.mp4#t=00:00:29',
        musicText: ''
    },
    {
        id: 16, 
        singer: 'Иванушки International', 
        name: 'Тополиный пух', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Ivanushki.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Ivanushki_International-Topolinyjj_pukh.mp4#t=00:00:07',
        musicText: ''
    },
    {
        id: 17, 
        singer: '', 
        name: 'Позвони мне, позвони', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Pozvoni.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Pozvoni_mne.mp4#t=00:00:57',
        musicText: ''
    },
    {
        id: 18, 
        singer: '', 
        name: 'Если б я был султан', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Sultan.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Sultan.mp4',
        musicText: ''
    },
    {
        id: 19, 
        singer: '', 
        name: 'Звенит январская вьюга', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Zvenit.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Zvenit_vyga.mp4#t=00:00:04',
        musicText: ''
    },
    {
        id: 20, 
        singer: '', 
        name: 'Ищу тебя', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Ishhy.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Ishhu_tebya.mp4#t=00:00:11',
        musicText: ''
    },
    {
        id: 21, 
        singer: '', 
        name: 'На Тихорецкую', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Tihoreckaya.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Na_Tikhoreckuyu.mp4',
        musicText: ''
    },
    {
        id: 22, 
        singer: '', 
        name: 'Песенка о медведях', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Medvedi.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Pesenka_o_medvedyah.mp4',
        musicText: ''
    },
    {
        id: 23, 
        singer: '', 
        name: 'Проснись и пой', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Prosnis.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Prosnis_i_poi.mp4',
        musicText: ''
    },
    {
        id: 24, 
        singer: '', 
        name: 'Разговор со счастьем', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Razgovor.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Razgovor_so_schastem.mp4',
        musicText: ''
    },
    {
        id: 25, 
        singer: 'К/ф Чародеи', 
        name: 'Песенка о снежинке', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/kf_Charodei.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/kf_CHarodei-Pesenka_o_snezhinke.mp4#t=00:00:07',
        musicText: ''
    },
    {
        id: 26, 
        singer: 'Дискотека Авария', 
        name: 'Новогодняя', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Diskoteka_Avariya.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Diskoteka_Avariya-Novogodnyaya.mp4#t=00:00:08',
        musicText: ''
    },
    {
        id: 27, 
        singer: 'Новогодние детские песни', 
        name: 'Расскажи, Снегурочка', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Rasskazhi_Snegurochka.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Rasskazhi_Snegurochka.mp4#t=00:00:08',
        musicText: ''
    },
    {
        id: 28, 
        singer: 'Верка Сердючка', 
        name: 'Новогодняя', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Verka_Serdyuchka.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Verka_Serdyuchka-Novogodnyaya.mp4#t=00:00:04',
        musicText: ''
    },
    {
        id: 29, 
        singer: 'Стекловата', 
        name: 'Новый год', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Steklovata.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Steklovata-Novyjj_god.mp4#t=00:00:21',
        musicText: ''
    },
    {
        id: 30, 
        singer: 'Wham', 
        name: 'Last Christmas', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Wham.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Wham-Last_Cristmas.mp4#t=00:00:10',
        musicText: ''
    },
    {
        id: 31, 
        singer: 'ABBA', 
        name: 'Happy New Year', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Abba.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/ABBA-Happy_New_Year.mp4#t=00:00:07',
        musicText: ''
    },
    {
        id: 32, 
        singer: 'Инна Маликова & Новые Самоцветы', 
        name: 'Новогодние игрушки', 
        cover: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Inna_Malikova.jpg', 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Inna_Malikova_Novye_Samocvety-Novogodnie_igrushki.mp4#t=00:00:27',
        musicText: ''
    }
];