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
        cover: `${BASE_URL}/img/Gubin.jpg`, 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Andrey_Gubin-Zima_kholoda.mp4',
        musicText: ''
    },
    {
        id: 3, 
        singer: 'Анжелика Варум', 
        name: 'Зимняя вишня', 
        cover: `${BASE_URL}/img/Varum.jpg`, 
        audioSource: '',
        videoSource: 'https://github.com/LivingstoneDoc/music-lotto/releases/download/v1.0/Anzhelika_Varum-Zimnyaya_vishnya.mp4#t=00:00:24',
        musicText: ''
    },
    {
        id: 4, 
        singer: 'Алла Пугачёва, Кристина Орбакайте', 
        name: 'Опять метель',
        cover: `${BASE_URL}/img/Pugacheva.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Alla_Pugachova_i_Kristina_Orbakayte-Opyat_metel.mp4#t=00:00:37`,
        musicText: ''
    },
    {
        id: 5, 
        singer: 'Моя Мишель', 
        name: 'Зима в сердце', 
        cover: `${BASE_URL}/img/Mishel.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Moya_Mishel-Zima_V_Serdce.mp4#t=00:00:09`,
        musicText: ''
    },
    {
        id: 6, 
        singer: 'Филипп Киркоров', 
        name: 'Снег', 
        cover: `${BASE_URL}/img/Kirkorov.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Filipp_Kirkorov-Sneg.mp4#t=00:00:09`,
        musicText: ''
    },
    {
        id: 7, 
        singer: 'Премьер-министр', 
        name: 'Синий иней', 
        cover: `${BASE_URL}/img/Premyer_ministr.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Premyer_ministr-Siniy_iney.mp4#t=00:00:09`,
        musicText: ''
    },
    {
        id: 8, 
        singer: 'София Ротару', 
        name: 'Белая зима', 
        cover: `${BASE_URL}/img/Rotaru.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Sofiya_Rotaru-Belaya_zima.mp4#t=00:00:19`,
        musicText: ''
    },
    {
        id: 9, 
        singer: 'Игорь Николаев', 
        name: 'Дельфин и русалка', 
        cover: `${BASE_URL}/img/Nikolaev.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Igor_Nikolaev-Delfin_i_rusalka_feat_Natasha_Korole.mp4#t=00:00:04`,
        musicText: ''
    },
    {
        id: 10, 
        singer: 'Демо', 
        name: 'Солнышко в руках', 
        cover: `${BASE_URL}/img/Demo.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Demo-Solnyshko_v_rukakh.mp4#t=00:00:40`,
        musicText: ''
    },
    {
        id: 11, 
        singer: 'Натали', 
        name: 'Ветер с моря дул', 
        cover: `${BASE_URL}/img/Natali.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Natali-Veter_s_morya_dul.mp4`,
        musicText: musicText.song1
    },
    {
        id: 12, 
        singer: 'Наталья Ветлицкая', 
        name: 'Посмотри в глаза', 
        cover: `${BASE_URL}/img/Natalya-Vetlitskaya.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Natalya_Vetlickaya-Posmotri_v_glaza.mp4#t=00:00:26`,
        musicText: ''
    },
    {
        id: 13, 
        singer: 'Hi-Fi', 
        name: 'Не дано', 
        cover: `${BASE_URL}/img/Hi-fi.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Hi-Fi-Ne_dano.mp4#t=00:00:29`,
        musicText: ''
    },
    {
        id: 14, 
        singer: 'Вирус', 
        name: 'Ты меня не ищи', 
        cover: `${BASE_URL}/img/Virus.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Virus-Ty_menya_ne_ishhi.mp4#t=00:00:25`,
        musicText: ''
    },
    {
        id: 15, 
        singer: 'Мурат Насыров', 
        name: 'Я это ты', 
        cover: `${BASE_URL}/img/Nasyrov.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Murat_Nasyrov-Ya_jeto_ty.mp4#t=00:00:29`,
        musicText: ''
    },
    {
        id: 16, 
        singer: 'Иванушки International', 
        name: 'Тополиный пух', 
        cover: `${BASE_URL}/img/Ivanushki.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Ivanushki_International-Topolinyjj_pukh.mp4#t=00:00:07`,
        musicText: ''
    },
    {
        id: 17, 
        singer: '', 
        name: 'Позвони мне, позвони', 
        cover: `${BASE_URL}/img/Pozvoni.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Pozvoni_mne.mp4#t=00:00:57`,
        musicText: ''
    },
    {
        id: 18, 
        singer: '', 
        name: 'Если б я был султан', 
        cover: `${BASE_URL}/img/Sultan.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Sultan.mp4`,
        musicText: ''
    },
    {
        id: 19, 
        singer: '', 
        name: 'Звенит январская вьюга', 
        cover: `${BASE_URL}/img/Zvenit.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Zvenit_vyga.mp4#t=00:00:04`,
        musicText: ''
    },
    {
        id: 20, 
        singer: '', 
        name: 'Ищу тебя', 
        cover: `${BASE_URL}/img/Ishhy.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Ishhu_tebya.mp4#t=00:00:11`,
        musicText: ''
    },
    {
        id: 21, 
        singer: '', 
        name: 'На Тихорецкую', 
        cover: `${BASE_URL}/img/Tihoreckaya.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Na_Tikhoreckuyu.mp4`,
        musicText: musicText.song1
    },
    {
        id: 22, 
        singer: '', 
        name: 'Песенка о медведях', 
        cover: `${BASE_URL}/img/Medvedi.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Pesenka_o_medvedyah.mp4`,
        musicText: ''
    },
    {
        id: 23, 
        singer: '', 
        name: 'Проснись и пой', 
        cover: `${BASE_URL}/img/Prosnis.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Prosnis_i_poi.mp4`,
        musicText: ''
    },
    {
        id: 24, 
        singer: '', 
        name: 'Разговор со счастьем', 
        cover: `${BASE_URL}/img/Razgovor.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Razgovor_so_schastem.mp4`,
        musicText: ''
    },
    {
        id: 25, 
        singer: 'К/ф Чародеи', 
        name: 'Песенка о снежинке', 
        cover: `${BASE_URL}/img/kf_Charodei.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/kf_CHarodei-Pesenka_o_snezhinke.mp4#t=00:00:07`,
        musicText: ''
    },
    {
        id: 26, 
        singer: 'Дискотека Авария', 
        name: 'Новогодняя', 
        cover: `${BASE_URL}/img/Diskoteka_Avariya.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Diskoteka_Avariya-Novogodnyaya.mp4#t=00:00:08`,
        musicText: ''
    },
    {
        id: 27, 
        singer: 'Новогодние детские песни', 
        name: 'Расскажи, Снегурочка', 
        cover: `${BASE_URL}/img/Rasskazhi_Snegurochka.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Rasskazhi_Snegurochka.mp4#t=00:00:08`,
        musicText: ''
    },
    {
        id: 28, 
        singer: 'Верка Сердючка', 
        name: 'Новогодняя', 
        cover: `${BASE_URL}/img/Verka_Serdyuchka.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Verka_Serdyuchka-Novogodnyaya.mp4#t=00:00:04`,
        musicText: ''
    },
    {
        id: 29, 
        singer: 'Стекловата', 
        name: 'Новый год', 
        cover: `${BASE_URL}/img/Steklovata.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Steklovata-Novyjj_god.mp4#t=00:00:21`,
        musicText: ''
    },
    {
        id: 30, 
        singer: 'Wham', 
        name: 'Last Christmas', 
        cover: `${BASE_URL}/img/Wham.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Wham-Last_Cristmas.mp4#t=00:00:10`,
        musicText: ''
    },
    {
        id: 31, 
        singer: 'ABBA', 
        name: 'Happy New Year', 
        cover: `${BASE_URL}/img/Abba.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/ABBA-Happy_New_Year.mp4#t=00:00:07`,
        musicText: musicText.song1
    },
    {
        id: 32, 
        singer: 'Инна Маликова & Новые Самоцветы', 
        name: 'Новогодние игрушки', 
        cover: `${BASE_URL}/img/Inna_Malikova.jpg`, 
        audioSource: '',
        videoSource: `${BASE_URL}/video/Inna_Malikova_Novye_Samocvety-Novogodnie_igrushki.mp4#t=00:00:27`,
        musicText: ''
    }
];