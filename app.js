// ==========================================
// ЧАСТЬ 1: БАЗА ДАННЫХ СЛОВ И ПЕРЕМЕННЫЕ STATE
// ==========================================

const vocabularyData = {
    "lesson1": {
        title: "Урок 1 (premier)",
        words: [
            { fr: "Agathe parle à...", ru: "Агата разговаривает с ..." },
            { fr: "sa", ru: "притяжательное прилагательное его, ее, своя" },
            { fr: "la", ru: "определенный артикль женского рода ед. числа" },
            { fr: "la camarade", ru: "товарищ, подруга", gender: "f", noun: "camarade" },
            { fr: "la femme", ru: "1) женщина; 2) жена", gender: "f", noun: "femme" },
            { fr: "Marthe va", ru: "Марта идет, едет" },
            { fr: "à", ru: "предлог, указывающий направление, местонахождение на, в" },
            { fr: "la place", ru: "1) место; 2) площадь", gender: "f", noun: "place" },
            { fr: "la gare", ru: "вокзал", gender: "f", noun: "gare" }
        ]
    },
    "lesson2": {
        title: "Урок 2 (deuxième)",
        words: [
            { fr: "cette", ru: "указательное прилагательное эта" },
            { fr: "la salle", ru: "зал, аудитория", gender: "f", noun: "salle" },
            { fr: "est", ru: "3-е лицо ед. числа глагола être быть" },
            { fr: "très", ru: "наречие очень" },
            { fr: "clair, claire", ru: "светлый, -ая" },
            { fr: "malade", ru: "больной, -ая" },
            { fr: "elle", ru: "она" },
            { fr: "a", ru: "3-е лицо ед. числа глагола avoir иметь" },
            { fr: "la tête", ru: "голова", gender: "f", noun: "tête" },
            { fr: "elle marche", ru: "она идет" },
            { fr: "elle traverse", ru: "она пересекает, переходит" },
            { fr: "belle", ru: "красивая, прекрасная" },
            { fr: "c'est", ru: "это есть" },
            { fr: "la mère", ru: "мать", gender: "f", noun: "mère" },
            { fr: "elle aime", ru: "она любит" },
            { fr: "Marcel met (mettre, 3e gr.)", ru: "Марсель надевает" },
            { fr: "la veste", ru: "куртка, пиджак", gender: "f", noun: "veste" },
            { fr: "beige", ru: "светло-коричневый, -ая; бежевый, -ая" },
            { fr: "ma", ru: "моя, своя" },
            { fr: "ta", ru: "твоя, своя" },
            { fr: "la table", ru: "стол", gender: "f", noun: "table" },
            { fr: "la chaise", ru: "стул", gender: "f", noun: "chaise" },
            { fr: "C'est Claire.", ru: "Это Клер." },
            { fr: "Est-ce Claire?", ru: "Это Клер?" },
            { fr: "Elle a mal à la tête.", ru: "У нее болит голова." }
        ]
    },
     "lesson3": {
        title: "Урок 3 (troisième)",
        words: [
            // Слова к фразам
            { fr: "les", ru: "определенный артикль мн. числа для обоих родов" },
            { fr: "les élèves", ru: "ученики, ученицы" },
            { fr: "mes", ru: "притяжательное прилагательное мои, свои" },
            { fr: "tes", ru: "притяжательное прилагательное твои, свои" },
            { fr: "ses", ru: "притяжательное прилагательное его, ее, свои" },
            { fr: "répéter", ru: "повторять" },
            { fr: "répétez!", ru: "повторите!" },
            { fr: "répète!", ru: "повтори!" },
            { fr: "assez", ru: "наречие довольно, достаточно" },
            { fr: "après", ru: "предлог после, за, вслед за" },
            { fr: "chercher", ru: "искать" },
            { fr: "fermer", ru: "закрывать" },
            { fr: "préparer", ru: "готовить" },
            { fr: "rester", ru: "оставаться, побыть" },
            { fr: "ces", ru: "указательное прилагательное мн. числа для обоих родов эти" },
            { fr: "les verbes", ru: "глаголы" },
            { fr: "elles", ru: "они" },
            
            // Слова к тексту + рамка
            { fr: "C'est assez!", ru: "Довольно! Достаточно!" },
            { fr: "chez", ru: "предлог к, у" },
            { fr: "avec", ru: "предлог с" },
            { fr: "elle part (partir, 3e gr.)", ru: "1. она уходит; 2. она уезжает" }
        ]
    },
        "lesson4": {
        title: "Урок 4 (quatrième)",
        words: [
            // Слова к фразам
            { fr: "habiter", ru: "жить" },
            { fr: "Paris", ru: "Париж" },
            { fr: "la ville", ru: "город", gender: "f", noun: "ville" },
            { fr: "natal, natale", ru: "родной, -ая" },
            { fr: "quitter", ru: "покидать, уходить, уезжать" },
            { fr: "Lille", ru: "Лилль" },
            { fr: "l'architecte", ru: "архитектор", gender: "m", noun: "architecte" },
            { fr: "il", ru: "он" },
            { fr: "ils", ru: "они" },
            { fr: "travailler", ru: "работать" },
            { fr: "la mairie", ru: "мэрия", gender: "f", noun: "mairie" },
            { fr: "réviser", ru: "повторять" },
            { fr: "les textes", ru: "тексты" },
            { fr: "et", ru: "союз и" },
            { fr: "la grammaire", ru: "грамматика", gender: "f", noun: "grammaire" },
            { fr: "elle fait (faire, 3e gr.)", ru: "она делает" },
            { fr: "les exercices", ru: "упражнения" },
            { fr: "des", ru: "неопределенный артикль мн. числа для обоих родов" },
            { fr: "il lit (lire, 3e gr.)", ru: "он читает" },
            { fr: "vite", ru: "наречие быстро" },
            { fr: "elle dit (dire, 3e gr.)", ru: "она говорит" },
            { fr: "ils disent", ru: "они говорят" },
            { fr: "merci", ru: "спасибо" },
            { fr: "les livres", ru: "книги" },
            { fr: "ils prennent (prendre, 3e gr.)", ru: "они берут" },
            { fr: "les cahiers", ru: "тетради" },
            { fr: "il écrit (écrire, 3e gr.)", ru: "он пишет" },
            { fr: "ils écrivent", ru: "они пишут" },
            { fr: "la dictée", ru: "диктант", gender: "f", noun: "dictée" },
            { fr: "difficile", ru: "трудный, -ая" },
            { fr: "qui", ru: "вопросительное местоимение кто" },

            // Рамки
            { fr: "Qui habite Paris?", ru: "Кто живет в Париже?" },
            { fr: "elle est mariée", ru: "она замужем" },
            { fr: "il est marié", ru: "он женат" },

            // Слова к тексту
            { fr: "la fille", ru: "1) дочь; 2) девочка", gender: "f", noun: "fille" },
            { fr: "cadet, cadette", ru: "младший, -ая" },
            { fr: "qui", ru: "относительное местоимение который, -ая, -ые" },
            { fr: "aîné, aînée", ru: "старший, -ая" },
            { fr: "Marseille", ru: "Марсель" },
            { fr: "la famille", ru: "семья", gender: "f", noun: "famille" }
        ]
    },
    "lesson5": {
        title: "Урок 5 (cinquième)",
        words: [
            // Слова к фразам (Колонка 1)
            { fr: "elle se lève (se lever)", ru: "она встает" },
            { fr: "six [sis]", ru: "шесть" },
            { fr: "l'heure", ru: "час", gender: "f", noun: "heure" },
            { fr: "le", ru: "определенный артикль муж. рода ед. числа" },
            { fr: "petit, petite", ru: "маленький, -ая" },
            { fr: "le déjeuner", ru: "завтрак; обед", gender: "m", noun: "déjeuner" },
            { fr: "le petit déjeuner", ru: "первый (ранний) завтрак" },
            { fr: "déjeuner", ru: "завтракать; обедать" },
            { fr: "je", ru: "я" },
            { fr: "je lis (lire, 3e gr.)", ru: "я читаю" },
            { fr: "ce", ru: "указательное прилагательное этот" },
            { fr: "regarder", ru: "смотреть что-л, на что-л, на кого-л." },
            { fr: "l'image", ru: "картинка", gender: "f", noun: "image" },
            { fr: "j'achète (acheter)", ru: "я покупаю" },
            { fr: "la fleur", ru: "цветок", gender: "f", noun: "fleur" },
            { fr: "je vais (aller, 3e gr.)", ru: "я иду" },

            // Слова к фразам (Колонка 2)
            { fr: "l'ami", ru: "друг", gender: "m", noun: "ami" },
            { fr: "l'amie", ru: "подруга", gender: "f", noun: "amie" },
            { fr: "la fabrique", ru: "фабрика", gender: "f", noun: "fabrique" },
            { fr: "y", ru: "наречие туда, там, тут" },
            { fr: "le pied", ru: "нога", gender: "m", noun: "pied" },
            { fr: "à pied", ru: "пешком" },
            { fr: "jeune", ru: "молодой, -ая" },
            { fr: "la jeune fille", ru: "девушка" },
            { fr: "prenez (prendre, 3e gr.)", ru: "возьмите" },
            { fr: "lisez (lire, 3e gr.)", ru: "читайте, прочитайте" },
            { fr: "la page", ru: "страница", gender: "f", noun: "page" },
            { fr: "neuf", ru: "девять" },
            { fr: "apprenez (apprendre, 3e gr.)", ru: "выучите" },
            { fr: "par cœur", ru: "наизусть" },
            { fr: "le cœur", ru: "сердце", gender: "m", noun: "cœur" },
            { fr: "que", ru: "вопросительное местоимение что" },

            // Рамка и слова к тексту
            { fr: "Que fait Denise?", ru: "Что делает Дениза?" },
            { fr: "n'est-ce pas?", ru: "не правда ли?" },
            { fr: "le texte de la page neuf", ru: "текст (который находится) на девятой странице" },
            { fr: "la sœur", ru: "сестра", gender: "f", noun: "sœur" },
            { fr: "demeurer", ru: "жить" },
            { fr: "leur", ru: "их, свой, своя" },
            { fr: "le père", ru: "отец", gender: "m", noun: "père" },
            { fr: "l'aviateur", ru: "летчик", gender: "m", noun: "aviateur" },
            { fr: "elle s'appelle (s'appeler)", ru: "ее зовут" },
            { fr: "le (la) secrétaire", ru: "секретарь" },
            { fr: "la garde-malade", ru: "сиделка, санитарка", gender: "f", noun: "garde-malade" },
            { fr: "la clinique", ru: "клиника", gender: "f", noun: "clinique" },

            // Дополнительные фразы
            { fr: "il me (te) plaît", ru: "он мне (тебе) нравится" },
            { fr: "il n'est pas mal", ru: "неплохой (фильм)" },
            { fr: "Irène regarde les fleurs.", ru: "Ирен смотрит на цветы." },
            { fr: "Marie regarde sa mère.", ru: "Мари смотрит на свою мать." },
            { fr: "Je parle à ta soeur.", ru: "Я разговариваю со своей сестрой." },
            { fr: "Ils écrivent à leur mère.", ru: "Они пишут своей матери." },
            { fr: "Marie va à la gare.", ru: "Мария идет на вокзал." },
            { fr: "L'exercice est à la page six.", ru: "Упражнение на шестой странице." },
            { fr: "Il déjeune à six heures.", ru: "Он завтракает в 6 часов." },
            { fr: "Claire parle à sa mère.", ru: "Клер разговаривает со своей матерью." }
        ]
    },
    "lesson6": {
        title: "Урок 6 (sixième)",
        words: [
            // Слова к фразам (Часть 1)
            { fr: "sérieux, sérieuse", ru: "серьезный, -ая" },
            { fr: "paresseux, paresseuse", ru: "ленивый, -ая" },
            { fr: "mais", ru: "союз но" },
            { fr: "distrait, distraite", ru: "рассеянный, -ая" },
            { fr: "elle a (avoir)", ru: "у нее есть, она имеет" },
            { fr: "les yeux [le-`zjø] m pl", ru: "глаза" },
            { fr: "gris, grise", ru: "серый, -ая" },
            { fr: "les cheveux [le-`jø] m pl", ru: "волосы" },
            { fr: "frisé, frisée", ru: "вьющийся, -щаяся" },
            { fr: "monsieur [mǝ-`sjø] m", ru: "господин, сударь", gender: "m", noun: "monsieur" },
            { fr: "vieux, vieille", ru: "старый, -ая" },
            { fr: "il peut (pouvoir, 3e gr.)", ru: "он может" },
            { fr: "vivre (3e gr.)", ru: "жить" },
            { fr: "seul, seule", ru: "прилагательное один, одна" },
            { fr: "heureux, heureuse", ru: "счастливый, -ая" },
            { fr: "mettez (mettre, 3e gr.)", ru: "положите, поставьте" },
            { fr: "ici", ru: "наречие здесь, туда, сюда" },
            { fr: "bleu, bleue", ru: "голубой, -ая, синий, -яя" },
            { fr: "je peux (pouvoir, 3e gr.)", ru: "я могу" },
            { fr: "être", ru: "быть" },
            { fr: "prêt, prête", ru: "готовый, -ая" },
            { fr: "vers", ru: "предлог около, к" },
            { fr: "deux", ru: "два" },
            { fr: "quel, quelle", ru: "какой, -ая, который, -ая" },
            { fr: "dix [dis]", ru: "десять" },

            // Рамка 1 (Время)
            { fr: "Quelle heure est-il?", ru: "Который час?" },
            { fr: "Il est deux heures.", ru: "(Сейчас) два часа." },

            // Слова к тексту
            { fr: "sept [sεt]", ru: "семь" },
            { fr: "déjà", ru: "наречие уже" },
            { fr: "près de", ru: "предлог у, около, возле, рядом с, недалеко от" },
            { fr: "la fenêtre", ru: "окно", gender: "f", noun: "fenêtre" },
            { fr: "par", ru: "предлог через, по" },
            { fr: "demi, demie", ru: "прилагательное полу-, пол-, половина" },
            { fr: "elle sert (servir, 3e gr.)", ru: "она подает (на стол)" },
            { fr: "peu", ru: "наречие мало, немного" },
            { fr: "après", ru: "наречие позже, потом, затем" },
            { fr: "la pharmacie", ru: "аптека", gender: "f", noun: "pharmacie" },
            { fr: "chez eux", ru: "у них (дома), к ним (домой)" },
            { fr: "chez elle", ru: "у нее (дома), к ней (домой)" },

            // Рамка 2 (Текст)
            { fr: "il est déjà levé", ru: "он уже встал, он уже на ногах" },
            { fr: "il est assis", ru: "он сидит" },
            { fr: "elle est assise", ru: "она сидит" },
            { fr: "regarder par la fenêtre", ru: "смотреть в окно" },
            { fr: "il est sept heures et demie", ru: "(сейчас) половина восьмого" },
            { fr: "peu après", ru: "немного позже, потом, вскоре после этого" },
            { fr: "près de chez eux (elle)", ru: "рядом с их (с ее) домом, недалеко от них (от нее)" },

            // Рамка 3 (После диалога)
            { fr: "est-ce que", ru: "конструкция для образования вопросительной формы" },
            { fr: "c'est de la part de qui?", ru: "кто говорит? кто у телефона?" },
            { fr: "je regrette", ru: "сожалею, мне очень жаль" },
            { fr: "il n'est pas là", ru: "его нет" },
            { fr: "il sera là", ru: "он будет (sera — будущее время от глагола être)" },
            { fr: "jeudi [ʒø-`di] m", ru: "четверг", gender: "m", noun: "jeudi" }
        ]
    },
    "lesson7": {
        title: "Урок 7 (septième)",
        words: [
            // Примеры (Звук [у])
            { fr: "minute", ru: "минута", gender: "f", noun: "minute" },
            { fr: "sûr", ru: "уверенный" },

            // Слова к фразам
            { fr: "tu", ru: "ты" },
            { fr: "étudier", ru: "учиться; 2) изучать" },
            { fr: "l'Université", ru: "университет", gender: "f", noun: "Université" },
            { fr: "une", ru: "1) неопределенный артикль жен. рода ед. числа; 2) числительное одна" },
            { fr: "une rue", ru: "улица", gender: "f", noun: "rue" },
            { fr: "fumer", ru: "курить" },
            { fr: "une cigarette", ru: "сигарета", gender: "f", noun: "cigarette" },
            { fr: "j'ai [ʒe] (avoir)", ru: "у меня есть, я имею" },
            { fr: "les études f pl", ru: "учебные занятия" },
            { fr: "la littérature", ru: "литература", gender: "f", noun: "littérature" },
            { fr: "russe", ru: "прилагательное русский, -ая" },
            { fr: "qu'est-ce que c'est? [kεs-kǝ-`sε]", ru: "что это (такое)?" },
            { fr: "une revue", ru: "журнал", gender: "f", noun: "revue" },
            { fr: "sur", ru: "предлог на" },
            { fr: "une avenue", ru: "проспект, авеню", gender: "f", noun: "avenue" },
            { fr: "large", ru: "широкий, -ая" },

            // Рамка (Грамматика к фразам)
            { fr: "Est-ce une rue?", ru: "Это улица?" },
            { fr: "C'est une rue.", ru: "Это улица." },
            { fr: "Ce n'est pas une rue.", ru: "Это не улица." },

            // Рамка (Выражения)
            { fr: "faire ses études", ru: "учиться (где-л.)" },

            // Слова к тексту
            { fr: "l'Université Paris IX (Paris neuf)", ru: "Университет Париж IX (девять)" },
            { fr: "le Russe", ru: "русский язык", gender: "m", noun: "Russe" },
            { fr: "parler russe", ru: "говорить по-русски" },
            { fr: "une cité", ru: "город, городок, поселок", gender: "f", noun: "cité" },
            { fr: "universitaire", ru: "университетский, -ая" },
            { fr: "la cité universitaire", ru: "университетский городок", gender: "f", noun: "cité universitaire" },
            { fr: "le (la) Russe", ru: "русский, -ая" },
            { fr: "le (la) stagiaire", ru: "стажер, практикант, -ка" },
            { fr: "même", ru: "прилагательное тот (та) же, один и тот же, одна и та же" },
            { fr: "d'habitude", ru: "обыкновенно, обычно" },
            { fr: "d'habitute", ru: "обыкновенно, обычно" }, // Фиксация опечатки из рамки дословно
            { fr: "une habitude", ru: "привычка", gender: "f", noun: "habitude" },
            { fr: "samedi m", ru: "1) суббота; 2) в субботу", gender: "m", noun: "samedi" },
            { fr: "visiter", ru: "посещать, осматривать, ходить (по, в); совершать экскурсии (по, в)" },
            { fr: "le musée", ru: "музей", gender: "m", noun: "musée" },

            // Слова после диалога
            { fr: "qu'est-ce qu'elle a?", ru: "что с ней?" },
            { fr: "une petite grippe", ru: "небольшой грипп, легкая простуда", gender: "f", noun: "grippe" },
            { fr: "espérer", ru: "надеяться" },
            { fr: "que", ru: "союз что" },
            { fr: "elle sera vite rétablie", ru: "она скоро поправится" },

            // Пояснения к тексту (Примеры)
            { fr: "Il fait ses études (il étudie) à l'Université.", ru: "Он учится в университете." },
            { fr: "Ma sœur étudie la littérature russe.", ru: "Моя сестра изучает русскую литературу." }
        ]
    },
    "lesson8": {
        title: "Урок 8 (huitième)",
        words: [
            // Примеры (Звук [ɔ])
            { fr: "monopole", ru: "монополия" },
            { fr: "aurore", ru: "заря" },

            // Слова к фразам
            { fr: "une pomme", ru: "яблоко", gender: "f", noun: "pomme" },
            { fr: "donner", ru: "давать что-л." },
            { fr: "bonne", ru: "1) хорошая; 2) вкусная" },
            { fr: "sonner", ru: "звонить" },
            { fr: "une porte", ru: "дверь", gender: "f", noun: "porte" },
            { fr: "elle veut (vouloir, 3e gr.)", ru: "она хочет" },
            { fr: "je veux", ru: "я хочу" },
            { fr: "l'homme m.", ru: "1) человек; 2) мужчина", gender: "m", noun: "homme" },
            { fr: "notre", ru: "притяжательное прилагательное наш, наша; свой, своя" },
            { fr: "le professeur", ru: "преподаватель", gender: "m", noun: "professeur" },
            { fr: "la géographie", ru: "география", gender: "f", noun: "géographie" },
            { fr: "une note", ru: "отметка", gender: "f", noun: "note" },
            { fr: "votre", ru: "притяжательное прилагательное ваш, ваша; свой, своя" },
            { fr: "une école", ru: "школа", gender: "f", noun: "école" },

            // Рамка (Выражения к фразам)
            { fr: "sonner à la porte", ru: "звонить в дверь" },
            { fr: "le professeur de géographie", ru: "преподаватель географии" },
            { fr: "donner une note", ru: "поставить отметку" },

            // Слова к тексту
            { fr: "une bibliothèque [bi-bli-ɔ(tε)-tεk]", ru: "библиотека", gender: "f", noun: "bibliothèque" },
            { fr: "la (le) bibliothécaire", ru: "библиотекарь" },
            { fr: "national, -е", ru: "национальный, -ая" },
            { fr: "joli, -е", ru: "красивый, -ая" },
            { fr: "gai, -е", ru: "веселый, -ая" },
            { fr: "dynamique", ru: "активный, -ая; энергичный, -ая" },
            { fr: "le sportif", ru: "спортсмен", gender: "m", noun: "sportif" },
            { fr: "une sportive", ru: "спортсменка", gender: "f", noun: "sportive" },
            { fr: "le samedi", ru: "по субботам, каждую субботу", gender: "m", noun: "samedi" },
            { fr: "libre", ru: "свободный, -ая" },
            { fr: "téléphoner", ru: "звонить по телефону" },
            { fr: "le téléphone", ru: "телефон", gender: "m", noun: "téléphone" },
            { fr: "si", ru: "если" },
            { fr: "occupé, -е", ru: "занятый, -ая" },
            { fr: "bavarder", ru: "болтать" },
            { fr: "que", ru: "относительное местоимение который, которая, которые" },
            { fr: "le cinéma", ru: "кино", gender: "m", noun: "cinéma" },
            { fr: "le sport", ru: "спорт", gender: "m", noun: "sport" },
            { fr: "la musique", ru: "музыка", gender: "f", noun: "musique" },

            // Слова после диалога
            { fr: "ici", ru: "здесь" },
            { fr: "salut", ru: "привет" },
            { fr: "ça va", ru: "как дела? все в порядке?" },
            { fr: "pas mal", ru: "неплохо" },
            { fr: "venir", ru: "прийти, пойти" },
            { fr: "avec plaisir", ru: "с удовольствием" },
            { fr: "l'adresse f", ru: "адрес", gender: "f", noun: "adresse" },
            { fr: "à ce samedi", ru: "до субботы" }
        ]
    },
    "lesson9": {
        title: "Урок 9 (neuvième)",
        words: [
            // Примеры (Звук [o])
            { fr: "rose", ru: "роза", gender: "f", noun: "rose" },
            { fr: "métro", ru: "метро", gender: "m", noun: "métro" },
            { fr: "héros", ru: "герой", gender: "m", noun: "héros" },
            { fr: "galop", ru: "галоп", gender: "m", noun: "galop" },
            { fr: "rôle", ru: "роль", gender: "m", noun: "rôle" },
            { fr: "faute", ru: "ошибка", gender: "f", noun: "faute" },
            { fr: "tableau", ru: "доска, картина", gender: "m", noun: "tableau" },

            // Слова к фразам
            { fr: "venez! (venir, 3e gr.)", ru: "идите!" },
            { fr: "le tableau", ru: "1) доска; 2) картина", gender: "m", noun: "tableau" },
            { fr: "écrivez! (écrire, 3e gr.)", ru: "пишите!, напишите!" },
            { fr: "haut, -е", ru: "высокий, -ая" },
            { fr: "beau, belle", ru: "красивый, -ая; прекрасный, -ая" },
            { fr: "chaud, -е", ru: "теплый, -ая" },
            { fr: "une rose", ru: "роза", gender: "f", noun: "rose" },
            { fr: "une chose", ru: "вещь", gender: "f", noun: "chose" },
            { fr: "quelque chose", ru: "неопределенное местоимение что-нибудь, что-либо; сокр. qch" },
            { fr: "proposer (de + инф.)", ru: "предлагать (сделать что-л.)" },
            { fr: "copier qch", ru: "списывать, переписывать" },
            { fr: "le mot", ru: "слово", gender: "m", noun: "mot" },
            { fr: "le, la, les", ru: "личные приглагольные местоимения его, ее, их" },
            { fr: "une faute", ru: "ошибка", gender: "f", noun: "faute" },
            { fr: "relire qch (3e gr.)", ru: "перечитывать что-л." },
            { fr: "une copie", ru: "письменная работа", gender: "f", noun: "copie" },
            { fr: "corriger qch", ru: "исправлять что-л." },
            { fr: "le numéro", ru: "номер", gender: "m", noun: "numéro" },
            { fr: "quatorze", ru: "четырнадцать" },
            { fr: "le métro", ru: "метро", gender: "m", noun: "métro" },
            { fr: "une chemise", ru: "рубашка", gender: "f", noun: "chemise" },
            { fr: "jaune", ru: "желтый, -ая" },
            { fr: "me", ru: "личное приглагольное местоимение мне, меня" },
            { fr: "mettre qch (3e gr.)", ru: "надевать что-л." },
            { fr: "autre", ru: "другой, -ая" },
            { fr: "trop", ru: "наречие слишком" },
            { fr: "revenir (3e gr.)", ru: "возвращаться" },

            // Рамка (Выражения к фразам)
            { fr: "il fait chaud", ru: "тепло, жарко" },
            { fr: "il faut", ru: "надо" },

            // Слова к тексту
            { fr: "l'opérateur m", ru: "оператор", gender: "m", noun: "opérateur" },
            { fr: "aussi", ru: "наречие также, тоже" },
            { fr: "une dactylo", ru: "машинистка", gender: "f", noun: "dactylo" },
            { fr: "le bureau", ru: "1) письменный стол; 2) рабочий кабинет; 3) бюро, отдел, контора, канцелярия", gender: "m", noun: "bureau" },
            { fr: "le ministère", ru: "министерство", gender: "m", noun: "ministère" },
            { fr: "le commerce", ru: "торговля", gender: "m", noun: "commerce" },
            { fr: "extérieur, -e", ru: "внешний, -яя" },
            { fr: "l'école f", ru: "школа", gender: "f", noun: "école" },
            { fr: "l'école maternelle (la maternelle)", ru: "детский сад", gender: "f", noun: "école maternelle" },
            { fr: "tôt", ru: "наречие рано" },
            { fr: "il sort (sortir, 3e gr.)", ru: "он выходит" },
            { fr: "jusque", ru: "предлог до" },
            { fr: "elles partent (partir, 3e gr.)", ru: "они уходят" },
            { fr: "ils reviennent (revenir, 3e gr.)", ru: "они возвращаются" },
            { fr: "dîner", ru: "ужинать" },
            { fr: "le dîner", ru: "ужин", gender: "m", noun: "dîner" },
            { fr: "causer", ru: "беседовать, разговаривать, болтать" },
            { fr: "dessiner (qch)", ru: "рисовать (что-л.)" },
            { fr: "s'amuser", ru: "играть, забавляться, веселиться, развлекаться" },
            { fr: "le lit", ru: "кровать", gender: "m", noun: "lit" },

            // Рамка (Выражения к тексту)
            { fr: "il fait beau", ru: "хорошая погода" },
            { fr: "aller au lit", ru: "идти спать" },

            // Слова после диалога
            { fr: "quelque part", ru: "куда-нибудь, куда-то; где-нибудь, где-то" },
            { fr: "l'après-midi m", ru: "время после полудня", gender: "m", noun: "après-midi" },
            { fr: "cet après-midi", ru: "сегодня днем" },
            { fr: "nulle part", ru: "никуда; нигде" },
            { fr: "le supermarché", ru: "универсам, супермаркет", gender: "m", noun: "supermarché" },
            { fr: "garder", ru: "1) присматривать; 2) хранить, оставлять" },
            { fr: "d'accord разг.", ru: "хорошо, ладно" },
            { fr: "allumer зд.", ru: "включать" }
        ]
    },
    "lesson10": {
        title: "Урок 10 (dixième)",
        words: [
            // Слова к фразам
            { fr: "ouvrez (ouvrir, 3e gr.)", ru: "откройте!" },
            { fr: "vous", ru: "вы, вам" },
            { fr: "s'il vous plaît, s'il te plaît", ru: "пожалуйста" },
            { fr: "écouter qch", ru: "слушать что-л." },
            { fr: "toujours", ru: "наречие всегда" },
            { fr: "dernier, dernière", ru: "последний, -ая" },
            { fr: "une nouvelle", ru: "новость", gender: "f", noun: "nouvelle" },
            { fr: "nouveau, nouvelle", ru: "новый, -ая" },
            { fr: "la radio", ru: "радио", gender: "f", noun: "radio" },
            { fr: "apporter qch", ru: "приносить что-л." },
            { fr: "douze", ru: "двенадцать" },
            { fr: "août [ut] m", ru: "август", gender: "m", noun: "août" },
            { fr: "une équipe", ru: "команда", gender: "f", noun: "équipe" },
            { fr: "arriver", ru: "приходить, приезжать" },
            { fr: "trouver qch", ru: "находить что-л." },
            { fr: "la craie", ru: "мел", gender: "f", noun: "craie" },
            { fr: "sous", ru: "предлог под" },
            { fr: "le journal", ru: "газета", gender: "m", noun: "journal" },
            { fr: "les journaux", ru: "газеты" },
            { fr: "где, куда", ru: "наречие где, куда" }, // Очищено под fr/ru
            { fr: "où", ru: "наречие где, куда" },
            { fr: "d'où", ru: "откуда" },
            { fr: "vous allez (aller, 3e gr.)", ru: "вы идете" },
            { fr: "le cours", ru: "урок, занятие, лекция", gender: "m", noun: "cours" },
            { fr: "la couleur", ru: "цвет", gender: "f", noun: "couleur" },
            { fr: "le stylo", ru: "ручка", gender: "m", noun: "stylo" },
            { fr: "rouge", ru: "красный, -ая" },
            { fr: "ou", ru: "союз или, либо" },
            { fr: "vert, -e", ru: "зеленый, -ая" },
            { fr: "l'espagnol m", ru: "испанский язык", gender: "m", noun: "espagnol" },
            { fr: "chaque", ru: "каждый, -ая" },
            { fr: "une ligne", ru: "строчка", gender: "f", noun: "ligne" },

            // Рамки (К фразам)
            { fr: "Où allez-vous?", ru: "Куда вы идете?" },
            { fr: "D'où reviennent-ils?", ru: "Откуда они возвращаются?" },
            { fr: "écouter qch à la radio", ru: "слушать по радио" },
            { fr: "à la ligne", ru: "с новой строки" },
            { fr: "de quelle couleur est ...?", ru: "какого цвета ...?" },

            // Слова к тексту
            { fr: "l'ouvrier m", ru: "рабочий", gender: "m", noun: "ouvrier" },
            { fr: "surtout", ru: "наречие особенно, в особенности" },
            { fr: "le football [fut-`bɔl]", ru: "футбол", gender: "m", noun: "football" },
            { fr: "presque", ru: "наречие почти" },
            { fr: "le jour", ru: "день", gender: "m", noun: "jour" },
            { fr: "la sortie", ru: "выход", gender: "f", noun: "sortie" },
            { fr: "le stade", ru: "стадион", gender: "m", noun: "stade" },
            { fr: "ils jouent (jouer)", ru: "они играют" },
            { fr: "retrouver qn", ru: "встречаться с кем-л." },
            { fr: "le volley-ball [vɔ-lε-`bɔl]", ru: "волейбол", gender: "m", noun: "volley-ball" },
            { fr: "discuter qch", ru: "обсуждать что-л." },
            { fr: "tout, toute", ru: "неопределенное прилагательное весь, вся" },
            { fr: "pour", ru: "предлог для, чтобы, для того чтобы" },
            { fr: "assister à qch", ru: "быть, присутствовать где-л." },
            { fr: "le match [lǝ-`matʃ]", ru: "матч", gender: "m", noun: "match" },
            { fr: "une coupe", ru: "кубок", gender: "f", noun: "coupe" },
            { fr: "le pays [lǝ-pe-`i]", ru: "страна", gender: "m", noun: "pays" },
            { fr: "gagner qch", ru: "выигрывать что-л." },
            { fr: "le ciel", ru: "небо", gender: "m", noun: "ciel" },

            // Рамка (Выражения к тексту)
            { fr: "à la sortie de l'usine", ru: "после работы (на заводе)" },
            { fr: "jouer au football", ru: "играть в футбол" },
            { fr: "le match pour la coupe", ru: "матч на кубок" },
            { fr: "marquer deux buts [byt]", ru: "забить два мяча (гола)" },
            { fr: "être au ciel", ru: "быть на седьмом небе" },

            // Слова после диалога
            { fr: "la FNAC", ru: "ФНАК (название магазина)", gender: "f", noun: "FNAC" },
            { fr: "peut-être", ru: "быть может, возможно" },
            { fr: "le cadeau", ru: "подарок", gender: "m", noun: "cadeau" },
            { fr: "Noël [nɔ-εl] m", ru: "Рождество", gender: "m", noun: "Noël" },
            { fr: "ça, c'est sûr", ru: "это уж конечно" },
            { fr: "leur", ru: "им" }
        ]
    },
    "lesson11": {
        title: "Урок 11 (onzième)",
        words: [
            // Примеры (Звук [ɔ̃])
            { fr: "front", ru: "лоб", gender: "m", noun: "front" },
            { fr: "bombe", ru: "бомба", gender: "f", noun: "bombe" },

            // Слова к фразам
            { fr: "tu sais (savoir, 3e gr.)", ru: "ты знаешь" },
            { fr: "vous savez (savoir, 3e gr.)", ru: "вы знаете" },
            { fr: "le nom", ru: "имя, фамилия", gender: "m", noun: "nom" },
            { fr: "le garçon", ru: "мальчик", gender: "m", noun: "garçon" },
            { fr: "ils vont (aller, 3e gr.)", ru: "они идут, едут" },
            { fr: "une maison", ru: "дом", gender: "f", noun: "maison" },
            { fr: "nous", ru: "мы" },
            { fr: "le pont", ru: "мост", gender: "m", noun: "pont" },
            { fr: "long, longue", ru: "длинный, -ая" },
            { fr: "une leçon", ru: "урок", gender: "f", noun: "leçon" },
            { fr: "nous lisons (lire, 3e gr.)", ru: "мы читаем" },
            { fr: "nous écrivons (écrire, 3e gr.)", ru: "мы пишем" },
            { fr: "compter [kɔ̃:-te] qch", ru: "считать что-л." },
            { fr: "prononcer qch", ru: "произносить что-л." },
            { fr: "le son", ru: "звук", gender: "m", noun: "son" },
            { fr: "il (elle) finit (finir, 2e gr.)", ru: "он (она) кончается, заканчивается" },
            { fr: "une récréation", ru: "перемена, перерыв", gender: "f", noun: "récréation" },
            { fr: "onze", ru: "одиннадцать" },
            { fr: "le crayon", ru: "карандаш", gender: "m", noun: "crayon" },
            { fr: "bon, bonne", ru: "хороший, -ая" },
            { fr: "mal", ru: "наречие плохо" },
            { fr: "mon", ru: "притяжательное прилагательное мой, свой" },
            { fr: "ton", ru: "притяжательное прилагательное твой, свой" },
            { fr: "son", ru: "притяжательное прилагательное его, ее, свой, своя" },
            { fr: "une montre", ru: "часы", gender: "f", noun: "montre" },
            { fr: "le frère", ru: "брат", gender: "m", noun: "frère" },
            { fr: "vos", ru: "притяжательное прилагательное ваши, свои" },
            { fr: "nos", ru: "притяжательное прилагательное наши, свои" },
            { fr: "une photo", ru: "фотография", gender: "f", noun: "photo" },

            // Рамка (Выражения к фразам)
            { fr: "à la maison", ru: "дома, домой" },
            { fr: "quelle heure?", ru: "в котором часу" },

            // Слова к тексту
            { fr: "nous sommes", ru: "1-е лицо мн. числа глагола être" },
            { fr: "jeudi m [ʒø-di]", ru: "четверг", gender: "m", noun: "jeudi" },
            { fr: "on", ru: "неопределенно-личное местоимение" },
            { fr: "on sonne", ru: "звонят, звонок" },
            { fr: "d'abord", ru: "сначала" },
            { fr: "nous", ru: "нам, нас" },
            { fr: "bonjour", ru: "добрый день, здравствуйте" },
            { fr: "nous disons (dire, 3e gr.)", ru: "мы говорим" },
            { fr: "conjuguer qch", ru: "спрягать" },
            { fr: "nous faisons [fǝ-zɔ̃] (faire, 3e gr.)", ru: "мы делаем" },
            { fr: "la télévision", ru: "телевидение", gender: "f", noun: "télévision" },
            { fr: "une émission de télévision", ru: "телепередача", gender: "f", noun: "émission de télévision" },
            { fr: "les curiosités f pl", ru: "достопримечательности" },
            { fr: "le film", ru: "фильм", gender: "m", noun: "film" },
            { fr: "le magnétophone", ru: "магнитофон", gender: "m", noun: "magnétophone" },
            { fr: "le speaker [lǝ-spi-kœ:r]", ru: "диктор", gender: "m", noun: "speaker" },
            { fr: "montrer qch", ru: "показывать что-л." },
            { fr: "poser qch", ru: "задать (вопрос)" },
            { fr: "une question", ru: "вопрос", gender: "f", noun: "question" },
            { fr: "nous répondons (répondre, 3e gr.)", ru: "мы отвечаем" },
            { fr: "les progrès m pl", ru: "успехи" },

            // Рамка (Выражения к тексту)
            { fr: "Nord", ru: "Север" }, // Выведено из контекста заголовков при наличии
            { fr: "Nous sommes jeudi.", ru: "Сегодня четверг." },
            { fr: "dire bonjour", ru: "здороваться" },
            { fr: "des exercices de grammaire", ru: "грамматические упражнения" },
            { fr: "une émission de télévision (de radio) sur ...", ru: "передача по телевидению (по радио) о ..." },
            { fr: "regarder la télévision (la télé)", ru: "смотреть телепередачу (телевизор)" },
            { fr: "poser une question", ru: "задать вопрос" },
            { fr: "répondre à une question", ru: "отвечать на вопрос" },
            { fr: "faire des progrès", ru: "делать успехи, добиваться успехов" },

            // Слова после диалога (Блок a)
            { fr: "on va au cinéma?", ru: "пошли (пойдем) в кино" },
            { fr: "alors", ru: "тогда, в таком случае" },
            { fr: "être d'accord", ru: "быть согласным" },
            { fr: "c'est d'accord", ru: "хорошо, ладно, договорились" },
            { fr: "d'accord", ru: "ладно, договорились" },
            { fr: "on se retrouve", ru: "встречаемся" },
            { fr: "la fac", ru: "студ. арго, сокр. от faculté", gender: "f", noun: "fac" },
            { fr: "bon", ru: "хорошо, ладно" },
            { fr: "à tout à l'heure!", ru: "до скорой встречи!" },
            { fr: "salut!", ru: "привет! пока!" },

            // Слова после диалога (Блок b)
            { fr: "j'ai à faire", ru: "у меня дела" },
            { fr: "c'est possible", ru: "возможно, может быть" },
            { fr: "je ne dis pas non", ru: "согласен, я не против" },
            { fr: "appeler", ru: "звонить кому-либо по телефону" },
            { fr: "à midi", ru: "в двенадцать часов (дня)" }
        ]
    },
    "lesson12": {
        title: "Урок 12 (douzième)",
        words: [
            // Слова к фразам
            { fr: "l'écrivain m", ru: "писатель", gender: "m", noun: "écrivain" },
            { fr: "le peintre", ru: "художник", gender: "m", noun: "peintre" },
            { fr: "l'ingénieur m", ru: "инженер", gender: "m", noun: "ingénieur" },
            { fr: "la peinture", ru: "живопись", gender: "f", noun: "peinture" },
            { fr: "préféré, -е", ru: "любимый, -ая" },
            { fr: "l'intérêt m", ru: "интерес", gender: "m", noun: "intérêt" },
            { fr: "tous [tus]", ru: "местоимение все" },
            { fr: "s'intéresser à qch", ru: "интересоваться чем-л." },
            { fr: "l'art m", ru: "искусство", gender: "m", noun: "art" },
            { fr: "bien", ru: "наречие хорошо" },
            { fr: "appliqué, -е", ru: "прилежный, старательный, -ая" },
            { fr: "travailler", ru: "учиться, заниматься" },
            { fr: "il revient (revenir, 3e gr.)", ru: "он возвращается" },
            { fr: "l'institut m", ru: "институт", gender: "m", noun: "institut" },
            { fr: "quatre", ru: "четыре" },
            { fr: "vingt", ru: "двадцать" },
            { fr: "il prévient (prévenir, 3e gr.)", ru: "он предупреждает" },
            { fr: "une visite", ru: "визит", gender: "f", noun: "visite" },
            { fr: "elles viennent (venir, 3e gr.)", ru: "1) они идут; 2) они приходят" },
            { fr: "le magasin", ru: "магазин", gender: "m", noun: "magasin" },

            // Рамка (Выражения к фразам)
            { fr: "avec intérêt", ru: "с интересом" },

            // Слова к тексту
            { fr: "cinq", ru: "пять" },
            { fr: "une faculté", ru: "факультет", gender: "f", noun: "faculté" },
            { fr: "la médecine", ru: "медицина", gender: "f", noun: "médecine" },
            { fr: "le médecin", ru: "врач", gender: "m", noun: "médecin" },
            { fr: "une decade", ru: "год" },
            { fr: "une année", ru: "год", gender: "f", noun: "année" },
            { fr: "terminer qch", ru: "оканчивать что-л." },
            { fr: "devenir (3e gr.)", ru: "становиться" },
            { fr: "dès", ru: "предлог с, от; начиная с; уже" },
            { fr: "le matin", ru: "1) утро; 2) утром", gender: "m", noun: "matin" },
            { fr: "premier, première", ru: "первый, -ая" },
            { fr: "l'examen m [lεg-za-`mε]", ru: "экзамен", gender: "m", noun: "examen" },
            { fr: "décrocher (le téléphone)", ru: "снять трубку" },
            { fr: "appeler (au téléphone)", ru: "звонить кому-л., вызывать, просить к телефону" },
            { fr: "elle l'appelle", ru: "она ему звонит" },
            { fr: "mardi m", ru: "вторник", gender: "m", noun: "mardi" },
            { fr: "demain", ru: "наречие завтра" },
            { fr: "après-demain", ru: "наречие послезавтра" },
            { fr: "quinze", ru: "пятнадцать" },

            // Рамка (Выражения к тексту)
            { fr: "la Faculté de médecine", ru: "медицинский факультет", gender: "f", noun: "Faculté de médecine" },
            { fr: "cette année", ru: "в этом году" },
            { fr: "terminer ses études", ru: "заканчивать учебу" },
            { fr: "il va devenir médecin", ru: "(скоро) он станет врачом" },
            { fr: "travailler ferme", ru: "упорно, много заниматься" },
            { fr: "dès le matin", ru: "с (самого) утра" },
            { fr: "préparer son examen", ru: "готовиться к экзамену" },

            // Слова после диалога
            { fr: "et vous-même?", ru: "а вы, а как у вас дела? а как вы поживаете?" },
            { fr: "nouveau, nouvelle", ru: "новый, -ая" },
            { fr: "une exposition", ru: "выставка", gender: "f", noun: "exposition" },
            { fr: "volontiers", ru: "охотно" },

            // Пояснения к тексту (пункт 1)
            { fr: "Où allez-vous?", ru: "Куда вы идете?" },
            { fr: "D'où venez-vous?", ru: "Откуда вы идете?" },
            { fr: "Je vais au magasin.", ru: "Я иду в магазин." },
            { fr: "Je viens du magasin.", ru: "Я иду из магазина." },

            // Пояснения к тексту (пункты 2-4)
            { fr: "Il veut devenir architecte.", ru: "Он хочет стать архитектором." },
            { fr: "Je vais revenir.", ru: "Я сейчас вернусь." },
            { fr: "Le train va arriver.", ru: "Поезд сейчас придет." },
            { fr: "Que vas-tu faire? — Je vais lire.", ru: "Что ты будешь (собираешься) делать? — Я буду читать." },
            { fr: "ça va?", ru: "как дела? как поживаешь (поживаете)? все в порядке?" },
            { fr: "vous allez bien?", ru: "см. Пояснения к тексту, п. 4 / как дела? как поживаешь (поживаете)? все в порядке?" },

            // Пояснения к тексту (пункт 5)
            { fr: "Après les cours je reste travailler à l'institut.", ru: "После лекций я остаюсь заниматься (готовиться к занятиям) в институте." },
            { fr: "Ma fille travaille bien à l'école.", ru: "Моя дочь хорошо учится." },

            // Грамматика с восклицательным знаком (!) и примечания
            { fr: "Pierre va chez sa mère. Sa mère est malade.", ru: "Пьер идет к своей матери. Его мать больна." },
            { fr: "Marie écrit à sa mère. Sa mère habite Lille.", ru: "Мария пишет своей матери. Ее мать живет в Лилле." },
            { fr: "Chaque matin, je lis mon journal.", ru: "Каждое утро я читаю газету." },
            { fr: "Je veux téléphoner à ma sœur.", ru: "Я хочу позвонить сестре." }
        ]
    },
    "lesson13": {
        title: "Урок 13 (treizième)",
        words: [
            // Примеры (Звук [œ̃])
            { fr: "un", ru: "[один]", gender: "m", noun: "un" },
            { fr: "parfum", ru: "[духи]", gender: "m", noun: "parfum" },

            // Слова к фразам
            { fr: "un", ru: "1) числительное один; 2) неопределенный артикль мужского рода ед. числа" },
            { fr: "un chapeau", ru: "шляпа", gender: "m", noun: "chapeau" },
            { fr: "brun, brune", ru: "коричневый, -ая; темный, каштановый (о волосах)" },
            { fr: "il y a [i-lja]", ru: "есть, находится" },
            { fr: "un dictionnaire", ru: "словарь", gender: "m", noun: "dictionnaire" },
            { fr: "text_ru", ru: "неопределенное прилагательное несколько" }, // Очищено под fr/ru
            { fr: "quelques", ru: "неопределенное прилагательное несколько" },
            { fr: "une serviette", ru: "портфель", gender: "f", noun: "serviette" },
            { fr: "là", ru: "наречие там, тут" },
            { fr: "un attaché-case [œ-na-ta-ʃe-`kε:z] (портфель)", ru: "дипломат", gender: "m", noun: "attaché-case" },
            { fr: "je voudrais", ru: "мне хотелось бы (условное наклонение)" },
            { fr: "vous voudriez", ru: "вам хотелось бы" },
            { fr: "le Louvre", ru: "Лувр", gender: "m", noun: "Louvre" },
            { fr: "tenir qch (3e gr.)", ru: "держать что-л." },
            { fr: "la compagnie", ru: "1) общество; 2) компания", gender: "f", noun: "compagnie" },
            { fr: "le plaisir", ru: "удовольствие", gender: "m", noun: "plaisir" },
            { fr: "un article", ru: "1) грам. артикль; 2) статья", gender: "m", noun: "article" },
            { fr: "quelqu'un, сокр. qn", ru: "неопределенное местоимение кто-то, кто-нибудь, кто-либо" },

            // Рамка (Конструкции к фразам)
            { fr: "il n'y a pas", ru: "нет, не имеется" },
            { fr: "y a-t-il?", ru: "есть ли?, имеется ли?" },
            { fr: "qu'y a-t-il?", ru: "что там есть?, что случилось?" },
            { fr: "qu'est-ce qu'il y a?", ru: "что там есть?, что случилось?" },

            // Рамка (Выражения к фразам)
            { fr: "voudriez-vous?", ru: "вам хотелось бы? вы хотели бы?" },
            { fr: "tenir compagnie à qn", ru: "составить компанию кому-л.; быть, побыть с кем-л., проводить время с кем-л." },
            { fr: "avec plaisir", ru: "с удовольствием" },

            // Слова к тексту
            { fr: "Verdun-sur-Meuse", ru: "Верден (город на реке Маас)" },
            { fr: "la retraite", ru: "пенсия", gender: "f", noun: "retrait" },
            { fr: "un jardin", ru: "сад", gender: "m", noun: "jardin" },
            { fr: "cultiver qch", ru: "выращивать, разводить что-л." },
            { fr: "adorer qch, qn; faire qch", ru: "обожать, очень любить что-л., кого-л.; делать что-л." },
            { fr: "jardiner", ru: "заниматься копаться в саду" },
            { fr: "le mari", ru: "муж", gender: "m", noun: "mari" },
            { fr: "le caractère", ru: "характер, нрав", gender: "m", noun: "caractère" },
            { fr: "paisible", ru: "мирный, -ая, тихий, -ая, спокойный, -ая" },
            { fr: "pêcher", ru: "ловить рыбу, рыбачить" },
            { fr: "bricoler", ru: "мастерить, заниматься поделками (дома)" },
            { fr: "le fils [lǝ-fis]", ru: "сын", gender: "m", noun: "fils" },
            { fr: "lundi m", ru: "понедельник, в понедельник", gender: "m", noun: "lundi" },
            { fr: "l'anniversaire m", ru: "день рождения", gender: "m", noun: "anniversaire" },
            { fr: "se réunir (2e gr., ils se réunissent)", ru: "собираться" },
            { fr: "un repas", ru: "еда, завтрак, обед, ужин, прием пищи", gender: "m", noun: "repas" },
            { fr: "offrir qch à qn (3e gr., il offre)", ru: "дарить что-л. кому-л." },
            { fr: "des parfums m pl", ru: "духи" },
            { fr: "chacun, chacune", ru: "неопределенное местоимение каждый, -ая" },

            // Рамка (Выражения к тексту)
            { fr: "être à la retraite", ru: "быть на пенсии" },
            { fr: "ce jour-là", ru: "в этот день" },
            { fr: "un repas de family", ru: "семейный обед (ужин)" },
            { fr: "faire plaisir à qn", ru: "доставлять удовольствие кому-л." },

            // Слова после диалога
            { fr: "la «une», la «deux»", ru: "первая, вторая программы телевидения" },
            { fr: "contre", ru: "предлог против" },
            { fr: "un feuilleton", ru: "телесериал", gender: "m", noun: "feuilleton" },
            { fr: "américain, -е", ru: "американский, -ая" },
            { fr: "si", ru: "наречие нет, есть (утвердительный ответ на вопрос в отрицательной форме)" },
            { fr: "italien, italienne", ru: "итальянский, -ая" },
            { fr: "Canal+ [ka-nal-plys]", ru: "«Канал+» (плюс) (название программы телевидения)", gender: "m", noun: "Canal+" },
            { fr: "mais", ru: "союз но" },
            { fr: "tard", ru: "наречие поздно" },

            // Список глаголов (из конца урока)
            { fr: "venir", ru: "1) приходить, приезжать, прибывать (куда-нибудь, откуда-нибудь); 2) идти (откуда-нибудь)" },
            { fr: "revenir", ru: "возвращаться" },
            { fr: "devenir", ru: "становиться, делаться" },
            { fr: "prévenir qn (de qch)", ru: "предупреждать кого-л. (о чем-л.)" },
            { fr: "tenir qch", ru: "держать (à la main в руке)" },
            { fr: "retenir qch", ru: "запоминать что-л." },
            { fr: "retenir qn", ru: "задерживать кого-л." }
        ]
    },
 "theme_days": {
        title: "Дни недели (Les jours de la semaine)",
        words: [
            { fr: "lundi", ru: "понедельник", gender: "m", noun: "lundi" },
            { fr: "mardi", ru: "вторник", gender: "m", noun: "mardi" },
            { fr: "mercredi", ru: "среда", gender: "m", noun: "mercredi" },
            { fr: "jeudi", ru: "четверг", gender: "m", noun: "jeudi" },
            { fr: "vendredi", ru: "пятница", gender: "m", noun: "vendredi" },
            { fr: "samedi", ru: "суббота", gender: "m", noun: "samedi" },
            { fr: "dimanche", ru: "воскресенье", gender: "m", noun: "dimanche" }
        ]
    },
    "theme_months": {
        title: "Месяцы (Les mois de l'année)",
        words: [
            { fr: "janvier", ru: "январь", gender: "m", noun: "janvier" },
            { fr: "février", ru: "февраль", gender: "m", noun: "février" },
            { fr: "mars", ru: "март", gender: "m", noun: "mars" },
            { fr: "avril", ru: "апрель", gender: "m", noun: "avril" },
            { fr: "mai", ru: "май", gender: "m", noun: "mai" },
            { fr: "juin", ru: "июнь", gender: "m", noun: "juin" },
            { fr: "juillet", ru: "июль", gender: "m", noun: "juillet" },
            { fr: "août", ru: "август", gender: "m", noun: "août" },
            { fr: "septembre", ru: "сентябрь", gender: "m", noun: "septembre" },
            { fr: "octobre", ru: "октябрь", gender: "m", noun: "octobre" },
            { fr: "novembre", ru: "ноябрь", gender: "m", noun: "novembre" },
            { fr: "décembre", ru: "декабрь", gender: "m", noun: "décembre" }
        ]
    },
       "theme_numbers": {
        title: "Числительные (Les nombres)",
        words: [
            { fr: "zéro", ru: "ноль", gender: "m", noun: "zéro" },
            { fr: "un", ru: "один" },
            { fr: "deux", ru: "два" },
            { fr: "trois", ru: "три" },
            { fr: "quatre", ru: "четыре" },
            { fr: "cinq", ru: "пять" },
            { fr: "six", ru: "шесть" },
            { fr: "sept", ru: "семь" },
            { fr: "huit", ru: "восемь" },
            { fr: "neuf", ru: "девять" },
            { fr: "dix", ru: "десять" },
            { fr: "onze", ru: "одиннадцать" },
            { fr: "douze", ru: "двенадцать" },
            { fr: "treize", ru: "тринадцать" },
            { fr: "quatorze", ru: "четырнадцать" },
            { fr: "quinze", ru: "пятнадцать" },
            { fr: "seize", ru: "шестнадцать" },
            { fr: "dix-sept", ru: "семнадцать" },
            { fr: "dix-huit", ru: "восемнадцать" },
            { fr: "dix-neuf", ru: "девятнадцать" },
            { fr: "vingt", ru: "двадцать" },
            { fr: "vingt et un", ru: "двадцать один" },
            { fr: "vingt-deux", ru: "двадцать два" },
            { fr: "vingt-trois", ru: "двадцать три" },
            { fr: "vingt-quatre", ru: "двадцать четыре" },
            { fr: "vingt-cinq", ru: "двадцать пять" },
            { fr: "vingt-six", ru: "двадцать шесть" },
            { fr: "vingt-sept", ru: "двадцать семь" },
            { fr: "vingt-huit", ru: "двадцать восемь" },
            { fr: "vingt-neuf", ru: "двадцать девять" },
            { fr: "trente", ru: "тридцать" }            ,
            { fr: "trente et un", ru: "тридцать один" },
            { fr: "trente-deux", ru: "тридцать два" },
            { fr: "trente-trois", ru: "тридцать три" },
            { fr: "trente-quatre", ru: "тридцать четыре" },
            { fr: "trente-cinq", ru: "тридцать пять" },
            { fr: "trente-six", ru: "тридцать шесть" },
            { fr: "trente-sept", ru: "тридцать семь" },
            { fr: "trente-huit", ru: "тридцать восемь" },
            { fr: "trente-neuf", ru: "тридцать девять" },
            { fr: "quarante", ru: "сорок" },
            { fr: "quarante et un", ru: "сорок один" },
            { fr: "quarante-deux", ru: "сорок два" },
            { fr: "quarante-trois", ru: "сорок три" },
            { fr: "quarante-quatre", ru: "сорок четыре" },
            { fr: "quarante-cinq", ru: "сорок пять" },
            { fr: "quarante-six", ru: "сорок шесть" },
            { fr: "quarante-sept", ru: "сорок семь" },
            { fr: "quarante-huit", ru: "сорок восемь" },
            { fr: "quarante-neuf", ru: "сорок девять" },
            { fr: "cinquante", ru: "пятьдесят" },
            { fr: "cinquante et un", ru: "пятьдесят один" },
            { fr: "cinquante-deux", ru: "пятьдесят два" },
            { fr: "cinquante-trois", ru: "пятьдесят три" },
            { fr: "cinquante-quatre", ru: "пятьдесят четыре" },
            { fr: "cinquante-cinq", ru: "пятьдесят пять" },
            { fr: "cinquante-six", ru: "пятьдесят шесть" },
            { fr: "cinquante-sept", ru: "пятьдесят гемь" }, // Опечатка исправлена на верный вариант: пятьдесят семь
            { fr: "cinquante-sept", ru: "пятьдесят семь" },
            { fr: "cinquante-huit", ru: "пятьдесят восемь" },
            { fr: "cinquante-neuf", ru: "пятьдесят девять" },
            { fr: "soixante", ru: "шестьдесят" }            ,
            { fr: "soixante et un", ru: "шестьдесят один" },
            { fr: "soixante-deux", ru: "шестьдесят два" },
            { fr: "soixante-trois", ru: "шестьдесят три" },
            { fr: "soixante-quatre", ru: "шестьдесят четыре" },
            { fr: "soixante-cinq", ru: "шестьдесят пять" },
            { fr: "soixante-six", ru: "шестьдесят шесть" },
            { fr: "soixante-sept", ru: "шестьдесят семь" },
            { fr: "soixante-huit", ru: "шестьдесят восемь" },
            { fr: "soixante-neuf", ru: "шестьдесят девять" },
            { fr: "soixante-dix", ru: "семьдесят" },
            { fr: "soixante et onze", ru: "семьдесят один" },
            { fr: "soixante-douze", ru: "семьдесят два" },
            { fr: "soixante-treize", ru: "семьдесят три" },
            { fr: "soixante-quatorze", ru: "семьдесят четыре" },
            { fr: "soixante-quinze", ru: "семьдесят Template:Пять" }, // Исправлено на чистый русский вариант ниже
            { fr: "soixante-quinze", ru: "семьдесят пять" },
            { fr: "soixante-seize", ru: "семьдесят шестнадцать" }, // Во французском счете это 76
            { fr: "soixante-dix-sept", ru: "семьдесят семь" },
            { fr: "soixante-dix-huit", ru: "семьдесят восемь" },
            { fr: "soixante-dix-neuf", ru: "семьдесят девять" },
            { fr: "quatre-vingts", ru: "восемьдесят" },
            { fr: "quatre-vingt-un", ru: "восемьдесят один" },
            { fr: "quatre-vingt-deux", ru: "восемьдесят два" },
            { fr: "quatre-vingt-trois", ru: "восемьдесят три" },
            { fr: "quatre-vingt-quatre", ru: "восемьдесят четыре" },
            { fr: "quatre-vingt-cinq", ru: "восемьдесят пять" },
            { fr: "quatre-vingt-six", ru: "восемьдесят шесть" },
            { fr: "quatre-vingt-sept", ru: "восемьдесят семь" },
            { fr: "quatre-vingt-huit", ru: "восемьдесят восемь" },
            { fr: "quatre-vingt-neuf", ru: "восемьдесят девять" },
            { fr: "quatre-vingt-dix", ru: "девяносто" }            ,
            { fr: "quatre-vingt-onze", ru: "девяносто один" },
            { fr: "quatre-vingt-douze", ru: "девяносто два" },
            { fr: "quatre-vingt-treize", ru: "девяносто три" },
            { fr: "quatre-vingt-quatorze", ru: "девяносто четыре" },
            { fr: "quatre-vingt-quinze", ru: "девяносто пять" },
            { fr: "quatre-vingt-seize", ru: "девяносто шестнадцать" },
            { fr: "quatre-vingt-dix-sept", ru: "девяносто семь" },
            { fr: "quatre-vingt-dix-huit", ru: "девяносто восемь" },
            { fr: "quatre-vingt-dix-neuf", ru: "девяносто девять" },
            { fr: "cent", ru: "сто" },
            { fr: "cent un", ru: "сто один" },
            { fr: "deux cents", ru: "двести" },
            { fr: "trois cents", ru: "триста" },
            { fr: "quatre cents", ru: "четыреста" },
            { fr: "cinq cents", ru: "пятьсот" },
            { fr: "six cents", ru: "шестьсот" },
            { fr: "sept cents", ru: "семьсот" },
            { fr: "huit cents", ru: "восемьсот" },
            { fr: "neuf cents", ru: "девятьсот" },
            { fr: "mille", ru: "тысяча" }
            ,
            { fr: "un million", ru: "миллион", gender: "m", noun: "million" },
            { fr: "un milliard", ru: "миллиард", gender: "m", noun: "milliard" }
        ]        
    },
"verb_core_present": {
        title: "Основные глаголы (Présent)",
        words: [
            // être
 { fr: "je suis", ru: "я есть", verb: "être" }, 
        { fr: "tu es", ru: "ты есть", verb: "être" },
        { fr: "il est", ru: "он есть", verb: "être" }, 
        { fr: "nous sommes", ru: "мы есть", verb: "être" },
        { fr: "vous êtes", ru: "вы есть", verb: "être" }, 
        { fr: "ils sont", ru: "они есть", verb: "être" },
        // avoir
        { fr: "j'ai", ru: "я имею", verb: "avoir" }, 
        { fr: "tu as", ru: "ты имеешь", verb: "avoir" },
        { fr: "il a", ru: "он имеет", verb: "avoir" }, 
        { fr: "nous avons", ru: "мы имеем", verb: "avoir" },
        { fr: "vous avez", ru: "вы имеете", verb: "avoir" }, 
        { fr: "ils ont", ru: "они имеют", verb: "avoir" },
        // ouvrir
        { fr: "j'ouvre", ru: "я открываю", verb: "ouvrir" },
        { fr: "tu ouvres", ru: "ты открываешь", verb: "ouvrir" },
        { fr: "il ouvre", ru: "он открывает", verb: "ouvrir" },
        { fr: "nous ouvrons", ru: "мы открываем", verb: "ouvrir" },
        { fr: "vous ouvrez", ru: "вы открываете", verb: "ouvrir" },
        { fr: "ils ouvrent", ru: "они открывают", verb: "ouvrir" },
                    // parler (1 группа — говорить)
            { fr: "je parle", ru: "я говорю (parler)" },
            { fr: "tu parles", ru: "ты говоришь (parler)" },
            { fr: "il parle", ru: "он говорит (parler)" },
            { fr: "nous parlons", ru: "мы говорим (parler)" },
            { fr: "vous parlez", ru: "вы говорите (parler)" },
            { fr: "ils parlent", ru: "они говорят (parler)" },

            // aimer (1 группа — любить)
            { fr: "j'aime", ru: "я люблю (aimer)" },
            { fr: "tu aimes", ru: "ты любишь (aimer)" },
            { fr: "il aime", ru: "он любит (aimer)" },
            { fr: "nous aimons", ru: "мы любим (aimer)" },
            { fr: "vous aimez", ru: "вы любите (aimer)" },
            { fr: "ils aiment", ru: "они любят (aimer)" },

            // marcher (1 группа — идти, шагать)
            { fr: "je marche", ru: "я иду (marcher)" },
            { fr: "tu marches", ru: "ты идешь (marcher)" },
            { fr: "il marche", ru: "он идет (marcher)" },
            { fr: "nous marchons", ru: "мы идем (marcher)" },
            { fr: "vous marchez", ru: "вы идете (marcher)" },
            { fr: "ils marchent", ru: "они идут (marcher)" },

            // traverser (1 группа — пересекать, переходить)
            { fr: "je traverse", ru: "я перехожу (traverser)" },
            { fr: "tu traverses", ru: "ты переходишь (traverser)" },
            { fr: "il traverse", ru: "он переходит (traverser)" },
            { fr: "nous traversons", ru: "мы переходим (traverser)" },
            { fr: "vous traversez", ru: "вы переходите (traverser)" },
            { fr: "ils traversent", ru: "они переходят (traverser)" },

            // повторение mettre (3 группа — класть, надевать) для надежности базы
            { fr: "je mets", ru: "я кладу (mettre)" },
            { fr: "tu mets", ru: "ты кладешь (mettre)" },
            { fr: "il met", ru: "он кладет (mettre)" },
            { fr: "nous mettons", ru: "мы кладем (mettre)" },
            { fr: "vous mettez", ru: "вы кладете (mettre)" },
            { fr: "ils mettent", ru: "они кладут (mettre)" },
                        ,
            // habiter (1 группа — жить)
            { fr: "j'habite", ru: "я живу (habiter)" },
            { fr: "tu habites", ru: "ты живешь (habiter)" },
            { fr: "il habite", ru: "он живет (habiter)" },
            { fr: "nous habitons", ru: "мы живем (habiter)" },
            { fr: "vous habitez", ru: "вы живете (habiter)" },
            { fr: "ils habitent", ru: "они живут (habiter)" },

            // chercher (1 группа — искать)
            { fr: "je cherche", ru: "я ищу (chercher)" },
            { fr: "tu cherches", ru: "ты ищешь (chercher)" },
            { fr: "il cherche", ru: "он ищет (chercher)" },
            { fr: "nous cherchons", ru: "мы ищем (chercher)" },
            { fr: "vous cherchez", ru: "вы ищете (chercher)" },
            { fr: "ils cherchent", ru: "они ищут (chercher)" },

            // fermer (1 группа — закрывать)
            { fr: "je ferme", ru: "я закрываю (fermer)" },
            { fr: "tu fermes", ru: "ты закрываешь (fermer)" },
            { fr: "il ferme", ru: "он закрывает (fermer)" },
            { fr: "nous fermons", ru: "мы закрываем (fermer)" },
            { fr: "vous fermez", ru: "вы закрываете (fermer)" },
            { fr: "ils ferment", ru: "они закрывают (fermer)" },

            // préparer (1 группа — готовить)
            { fr: "je prépare", ru: "я готовлю (préparer)" },
            { fr: "tu prépares", ru: "ты готовишь (préparer)" },
            { fr: "il prépare", ru: "он готовит (préparer)" },
            { fr: "nous préparons", ru: "мы готовим (préparer)" },
            { fr: "vous préparez", ru: "вы готовите (préparer)" },
            { fr: "ils préparent", ru: "они готовят (préparer)" },

            // rester (1 группа — оставаться)
            { fr: "je reste", ru: "я остаюсь (rester)" },
            { fr: "tu restes", ru: "ты остаешься (rester)" },
            { fr: "il reste", ru: "он остается (rester)" },
            { fr: "nous restons", ru: "мы остаемся (rester)" },
            { fr: "vous restez", ru: "вы остаетесь (rester)" },
            { fr: "ils restent", ru: "они остаются (rester)" },
            ,
            // se lever (1 группа — вставать)
            { fr: "je me lève", ru: "я встаю (se lever)" },
            { fr: "tu te lèves", ru: "ты встаешь (se lever)" },
            { fr: "il se lève", ru: "он встает (se lever)" },
            { fr: "nous nous levons", ru: "мы встаем (se lever)" },
            { fr: "vous vous levez", ru: "вы встаете (se lever)" },
            { fr: "ils se lèvent", ru: "они встают (se lever)" },

            // acheter (1 группа — покупать)
            { fr: "j'achète", ru: "я покупаю (acheter)" },
            { fr: "tu achètes", ru: "ты покупаешь (acheter)" },
            { fr: "il achète", ru: "он покупает (acheter)" },
            { fr: "nous achetons", ru: "мы покупаем (acheter)" },
            { fr: "vous achetez", ru: "вы покупаете (acheter)" },
            { fr: "ils achètent", ru: "они покупают (acheter)" },

            // s'appeler (1 группа — называться, зваться)
            { fr: "je m'appelle", ru: "меня зовут (s'appeler)" },
            { fr: "tu t'appelles", ru: "тебя зовут (s'appeler)" },
            { fr: "il s'appelle", ru: "его зовут (s'appeler)" },
            { fr: "nous nous appelons", ru: "нас зовут (s'appeler)" },
            { fr: "vous vous appelez", ru: "вас зовут (s'appeler)" },
            { fr: "ils s'appellent", ru: "их зовут (s'appeler)" },

            // servir (3 группа — подавать на стол, служить)
            { fr: "je sers", ru: "я подаю на стол (servir)" },
            { fr: "tu sers", ru: "ты подаешь на стол (servir)" },
            { fr: "il sert", ru: "он подает на стол (servir)" },
            { fr: "nous servons", ru: "мы подаем на стол (servir)" },
            { fr: "vous servez", ru: "вы подаете на стол (servir)" },
            { fr: "ils servent", ru: "они подают на стол (servir)" },
            ,
            // étudier (1 группа — учиться, изучать)
            { fr: "j'étudie", ru: "я учусь (étudier)" },
            { fr: "tu étudies", ru: "ты учишься (étudier)" },
            { fr: "il étudie", ru: "он учится (étudier)" },
            { fr: "nous étudions", ru: "мы учимся (étudier)" },
            { fr: "vous étudiez", ru: "вы учитесь (étudier)" },
            { fr: "ils étudient", ru: "они учатся (étudier)" },

            // fumer (1 группа — курить)
            { fr: "je fume", ru: "я курю (fumer)" },
            { fr: "tu fumes", ru: "ты куришь (fumer)" },
            { fr: "il fume", ru: "он курит (fumer)" },
            { fr: "nous fumons", ru: "мы курим (fumer)" },
            { fr: "vous fumez", ru: "вы курите (fumer)" },
            { fr: "ils fument", ru: "они курят (fumer)" },

            // visiter (1 группа — посещать, осматривать)
            { fr: "je visite", ru: "я посещаю (visiter)" },
            { fr: "tu visites", ru: "ты посещаешь (visiter)" },
            { fr: "il visite", ru: "он посещает (visiter)" },
            { fr: "nous visitons", ru: "мы посещаем (visiter)" },
            { fr: "vous visitez", ru: "вы посещаете (visiter)" },
            { fr: "ils visitent", ru: "они посещают (visiter)" },

            // vouloir (3 группа — хотеть)
            { fr: "je veux", ru: "я хочу (vouloir)" },
            { fr: "tu veux", ru: "ты хочешь (vouloir)" },
            { fr: "il veut", ru: "он хочет (vouloir)" },
            { fr: "nous voulons", ru: "мы хотим (vouloir)" },
            { fr: "vous voulez", ru: "вы хотите (vouloir)" },
            { fr: "ils veulent", ru: "они хотят (vouloir)" },

            // téléphoner (1 группа — звонить по телефону)
            { fr: "je téléphone", ru: "я звоню по телефону (téléphoner)" },
            { fr: "tu téléphones", ru: "ты звонишь по телефону (téléphoner)" },
            { fr: "il téléphone", ru: "он звонит по телефону (téléphoner)" },
            { fr: "nous téléphonons", ru: "мы звоним по телефону (téléphoner)" },
            { fr: "vous téléphonez", ru: "вы звоните по телефону (téléphoner)" },
            { fr: "ils téléphonent", ru: "они звонят по телефону (téléphoner)" },

            // bavarder (1 группа — болтать)
            { fr: "je bavarde", ru: "я болтаю (bavarder)" },
            { fr: "tu bavardes", ru: "ты болтаешь (bavarder)" },
            { fr: "il bavarde", ru: "он болтает (bavarder)" },
            { fr: "nous bavardons", ru: "мы болтаем (bavarder)" },
            { fr: "vous bavardez", ru: "вы болтаете (bavarder)" },
            { fr: "ils bavardent", ru: "они болтают (bavarder)" },
            ,
            // proposer (1 группа — предлагать)
            { fr: "je propose", ru: "я предлагаю (proposer)" },
            { fr: "tu proposes", ru: "ты предлагаешь (proposer)" },
            { fr: "il propose", ru: "он предлагает (proposer)" },
            { fr: "nous proposons", ru: "мы предлагаем (proposer)" },
            { fr: "vous proposez", ru: "вы предлагаете (proposer)" },
            { fr: "ils proposent", ru: "они предлагают (proposer)" },

            // copier (1 группа — списывать, переписывать)
            { fr: "je copie", ru: "я списываю (copier)" },
            { fr: "tu copies", ru: "ты списываешь (copier)" },
            { fr: "il copie", ru: "он списывает (copier)" },
            { fr: "nous copions", ru: "мы списываем (copier)" },
            { fr: "vous copiez", ru: "вы списываете (copier)" },
            { fr: "ils copient", ru: "они списывают (copier)" },

            // corriger (1 группа — исправлять)
            { fr: "je corrige", ru: "я исправляю (corriger)" },
            { fr: "tu corriges", ru: "ты исправляешь (corriger)" },
            { fr: "il corrige", ru: "он исправляет (corriger)" },
            { fr: "nous corrigeons", ru: "мы исправляем (corriger)" },
            { fr: "vous corrigez", ru: "вы исправляете (corriger)" },
            { fr: "ils corrigent", ru: "они исправляют (corriger)" },

            // causer (1 группа — беседовать, болтать)
            { fr: "je cause", ru: "я беседую (causer)" },
            { fr: "tu causes", ru: "ты беседуешь (causer)" },
            { fr: "il cause", ru: "он беседует (causer)" },
            { fr: "nous causons", ru: "мы беседуем (causer)" },
            { fr: "vous causez", ru: "вы беседуете (causer)" },
            { fr: "ils causent", ru: "они беседуют (causer)" },

            // dessiner (1 группа — рисовать)
            { fr: "je dessine", ru: "я рисую (dessiner)" },
            { fr: "tu dessines", ru: "ты рисуешь (dessiner)" },
            { fr: "il dessine", ru: "он рисует (dessiner)" },
            { fr: "nous dessinons", ru: "мы рисуем (dessiner)" },
            { fr: "vous dessinez", ru: "вы рисуете (dessiner)" },
            { fr: "ils dessinent", ru: "они рисуют (dessiner)" },

            // s'amuser (1 группа — развлекаться, играть)
            { fr: "je m'amuse", ru: "я развлекаюсь (s'amuser)" },
            { fr: "tu t'amuses", ru: "ты развлекаешься (s'amuser)" },
            { fr: "il s'amuse", ru: "он развлекается (s'amuser)" },
            { fr: "nous nous amusons", ru: "мы развлекаемся (s'amuser)" },
            { fr: "vous vous amusez", ru: "вы развлекаетесь (s'amuser)" },
            { fr: "ils s'amusent", ru: "они развлекаются (s'amuser)" },

            // jouer (1 группа — играть)
            { fr: "je joue", ru: "я играю (jouer)" },
            { fr: "tu joues", ru: "ты играешь (jouer)" },
            { fr: "il joue", ru: "он играет (jouer)" },
            { fr: "nous jouons", ru: "мы играем (jouer)" },
            { fr: "vous jouez", ru: "вы играете (jouer)" },
            { fr: "ils jouent", ru: "они играют (jouer)" },
            ,
            // savoir (3 группа — знать, уметь)
            { fr: "je sais", ru: "я знаю (savoir)" },
            { fr: "tu sais", ru: "ты знаешь (savoir)" },
            { fr: "il sait", ru: "он знает (savoir)" },
            { fr: "nous savons", ru: "мы знаем (savoir)" },
            { fr: "vous savez", ru: "вы знаете (savoir)" },
            { fr: "ils savent", ru: "они знают (savoir)" },

            // compter (1 группа — считать)
            { fr: "je compte", ru: "я считаю (compter)" },
            { fr: "tu comptes", ru: "ты считаешь (compter)" },
            { fr: "il compte", ru: "он считает (compter)" },
            { fr: "nous comptons", ru: "мы считаем (compter)" },
            { fr: "vous comptez", ru: "вы считаете (compter)" },
            { fr: "ils comptent", ru: "они считают (compter)" },

            // prononcer (1 группа — произносить)
            { fr: "je prononce", ru: "я произношу (prononcer)" },
            { fr: "tu prononces", ru: "ты произносишь (prononcer)" },
            { fr: "il prononce", ru: "он произносит (prononcer)" },
            { fr: "nous prononçons", ru: "мы произносим (prononcer)" },
            { fr: "vous prononcez", ru: "вы произносите (prononcer)" },
            { fr: "ils prononcent", ru: "они произносят (prononcer)" },

            // conjuguer (1 группа — спрягать)
            { fr: "je conjugue", ru: "я спрягаю (conjuguer)" },
            { fr: "tu conjugues", ru: "ты спрягаешь (conjuguer)" },
            { fr: "il conjugue", ru: "он спрягает (conjuguer)" },
            { fr: "nous conjuguons", ru: "мы спрягаем (conjuguer)" },
            { fr: "vous conjuguez", ru: "вы спрягаете (conjuguer)" },
            { fr: "ils conjuguent", ru: "они спрягают (conjuguer)" },

            // montrer (1 группа — показывать)
            { fr: "je montre", ru: "я показываю (montrer)" },
            { fr: "tu montres", ru: "ты показываешь (montrer)" },
            { fr: "il montre", ru: "он показывает (montrer)" },
            { fr: "nous montrons", ru: "мы показываем (montrer)" },
            { fr: "vous montrez", ru: "вы показываете (montrer)" },
            { fr: "ils montrent", ru: "они показывают (montrer)" },

            // terminer (1 группа — оканчивать, завершать)
            { fr: "je termine", ru: "я оканчиваю (terminer)" },
            { fr: "tu termines", ru: "ты оканчиваешь (terminer)" },
            { fr: "il termine", ru: "он оканчивает (terminer)" },
            { fr: "nous terminons", ru: "мы оканчиваем (terminer)" },
            { fr: "vous terminez", ru: "вы оканчиваете (terminer)" },
            { fr: "ils terminent", ru: "они оканчивают (terminer)" },

            // adorer (1 группа — обожать, очень любить)
            { fr: "j'adore", ru: "я обожаю (adorer)" },
            { fr: "tu adores", ru: "ты обожаешь (adorer)" },
            { fr: "il adore", ru: "он обожает (adorer)" },
            { fr: "nous adorons", ru: "мы обожаем (adorer)" },
            { fr: "vous adorez", ru: "вы обожаете (adorer)" },
            { fr: "ils adorent", ru: "они обожают (adorer)" },

            // jardiner (1 группа — заниматься садом)
            { fr: "je jardine", ru: "я занимаюсь садом (jardiner)" },
            { fr: "tu jardines", ru: "ты занимаешься садом (jardiner)" },
            { fr: "il jardine", ru: "он занимается садом (jardiner)" },
            { fr: "nous jardinons", ru: "мы занимаемся садом (jardiner)" },
            { fr: "vous jardinez", ru: "вы занимаетесь садом (jardiner)" },
            { fr: "ils jardinent", ru: "они занимаются садом (jardiner)" },

            // bricoler (1 группа — мастерить)
            { fr: "je bricole", ru: "я мастерю (bricoler)" },
            { fr: "tu bricoles", ru: "ты мастеришь (bricoler)" },
            { fr: "il bricole", ru: "он мастерит (bricoler)" },
            { fr: "nous bricolons", ru: "мы мастерим (bricoler)" },
            { fr: "vous bricolez", ru: "вы мастерите (bricoler)" },
            { fr: "ils bricolent", ru: "они мастерят (bricoler)" },

            // offrir (3 группа — дарить)
            { fr: "j'offre", ru: "я дарю (offrir)" },
            { fr: "tu offres", ru: "ты даришь (offrir)" },
            { fr: "il offre", ru: "он дарит (offrir)" },
            { fr: "nous offrons", ru: "мы дарим (offrir)" },
            { fr: "vous offrez", ru: "вы дарите (offrir)" },
            { fr: "ils offrent", ru: "они дарят (offrir)" }
        ]
    }
};

// ==========================================
// ТЕХНИЧЕСКАЯ ЧАСТЬ: ПЕРЕМЕННЫЕ И МЕНЮ (ЧАСТЬ 1)
// ==========================================

let currentWords = [];
let currentIndex = 0;
let score = 0;
let gameMode = 'quiz'; 
let langMode = 'fr-ru'; 
let selectedModuleKey = "all_lessons"; 
let currentCategory = 'lessons';       

// Экраны приложения
const screenSettings = document.getElementById('screen-settings');
const screenGame = document.getElementById('screen-game');
const screenResults = document.getElementById('screen-results');

// Стартовый экран
const startBtn = document.getElementById('start-btn');

// Игровой экран
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');
const progressBarFill = document.getElementById('progress-bar-fill');
const targetWordElement = document.getElementById('target-word');
const quizOptionsContainer = document.getElementById('quiz-options');
const inputContainer = document.getElementById('input-container');
const userAnswerInput = document.getElementById('user-answer');
const submitBtn = document.getElementById('submit-btn');
const feedbackElement = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const quitBtn = document.getElementById('quit-btn');

// Экран результатов
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');

function initializeApp() {
    const modeInputs = document.querySelectorAll('input[name="game-mode"]');
    const langGroup = document.getElementById('lang-mode-group');

    // ФУНКЦИЯ ДЛЯ СВЕРКИ И СКРЫТИЯ/ПОКАЗА БЛОКА НАПРАВЛЕНИЯ ПЕРЕВОДА
    // ФУНКЦИЯ ДЛЯ СВЕРКИ И СКРЫТИЯ/ПОКАЗА БЛОКА НАПРАВЛЕНИЯ ПЕРЕВОДА
    function toggleLangModeVisibility() {
        if (!langGroup) return;
        
        // Находим активный тип задания
        const checkedGameMode = document.querySelector('input[name="game-mode"]:checked');
        
        // СКРЫВАЕМ ПЛАШКУ, если выбрано «Определение рода» (gender) ИЛИ «Режим чтения» (learn)
        if (checkedGameMode && (checkedGameMode.value === 'gender' || checkedGameMode.value === 'learn')) {
            langGroup.classList.add('hidden');
        } else {
            // Для остальных режимов (Тест «quiz») — показываем обратно
            langGroup.classList.remove('hidden');
        }
    }

    // 1. Установка обработчиков на кнопки меню категорий («шапка сайта»)
    const catButtons = document.querySelectorAll('.category-btn');
    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.getAttribute('data-cat');
            renderModuleSelect(); // Мгновенно перерисовываем выпадающий список

            // Умное скрытие всего блока "Тип задания" для глаголов, чтобы не было пустой плашки
            // Прячем только сами карточки заданий (Тест, Род, Чтение), оставляя плашку перевода доступной
            const gameModeInput = document.querySelector('input[name="game-mode"]');
            if (gameModeInput) {
                const taskTypeGroup = gameModeInput.closest('.setting-group');
                if (taskTypeGroup) {
                    if (currentCategory === 'verbs') {
                        taskTypeGroup.classList.add('hidden'); // Скрываем блок типов заданий для глаголов
                        
                        // Если был выбран не quiz (например, learn или gender), сбрасываем на quiz
                        const quizInput = Array.from(modeInputs).find(i => i.value === 'quiz');
                        if (quizInput) {
                            quizInput.checked = true;
                            modeInputs.forEach(l => l.parentElement.classList.remove('selected-card'));
                            quizInput.parentElement.classList.add('selected-card');
                        }
                    } else {
                        taskTypeGroup.classList.remove('hidden'); // Показываем для уроков и тем
                    }
                }
            }

            // АВТОМАТИЧЕСКОЕ СКРЫТИЕ ПЛАШКИ РОДА ДЛЯ ГЛАГОЛОВ
            modeInputs.forEach(input => {
                if (input.value === 'gender') {
                    const genderCard = input.parentElement;
                    if (currentCategory === 'verbs') {
                        genderCard.classList.add('hidden'); // Прячем род
                    } else {
                        genderCard.classList.remove('hidden'); // Показываем для уроков и тем
                    }
                }
            });

            // Проверяем видимость направления перевода при смене категории
            toggleLangModeVisibility();
        });
    });


    // 2. Первичный вывод выпадающего списка уроков
    renderModuleSelect();

    // 3. Динамическая подсветка плиток "Тип задания" и "Направление"
    const gameModeLabels = document.querySelectorAll('#game-mode-options label');
    const learnLabel = document.getElementById('mode-learn-label');

    modeInputs.forEach(input => {
        input.addEventListener('change', () => {
            // Вызываем проверку скрытия блока перевода при любом изменении радиокнопок заданий
            toggleLangModeVisibility();
        });
    });

    gameModeLabels.forEach(label => {
        label.addEventListener('click', () => {
            // Гасим старые кнопки внутри контейнера
            gameModeLabels.forEach(l => l.classList.remove('selected-card'));
            
            // ПРИНУДИТЕЛЬНО ГАСИМ новую кнопку "Просмотр слов"
            if (learnLabel) learnLabel.classList.remove('selected-card');
            
            label.classList.add('selected-card');
        });
    });

    // ОТДЕЛЬНЫЙ КЛИК ПО ПЛИТКЕ "ПРОСМОТР СЛОВ"
    if (learnLabel) {
        learnLabel.addEventListener('click', () => {
            // Принудительно гасим первые две кнопки
            gameModeLabels.forEach(l => l.classList.remove('selected-card'));
            
            // Подсвечиваем только кнопку просмотра слов
            learnLabel.classList.add('selected-card');
            
            // Сами прожимаем радио-кнопку внутри неё, чтобы JS понял режим
            const radioInside = learnLabel.querySelector('input[type="radio"]');
            if (radioInside) {
                radioInside.checked = true;
                // Триггерим событие изменения, чтобы скрытие/показ отработали корректно
                toggleLangModeVisibility();
            }
        });
    }

    // ЛОГИКА ОТКРЫТИЯ/ЗАКРЫТИЯ КАСТОМНОГО СПИСКА
    const dropdownSelected = document.getElementById('dropdown-selected');
    const customDropdown = document.getElementById('custom-dropdown');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (dropdownSelected && customDropdown && dropdownMenu) {
        dropdownSelected.addEventListener('click', (e) => {
            e.stopPropagation();
            customDropdown.classList.toggle('open');
            dropdownMenu.classList.toggle('hidden');
        });

        // Закрытие списка при клике в любое другое место экрана
        document.addEventListener('click', () => {
            customDropdown.classList.remove('open');
            dropdownMenu.classList.add('hidden');
        });
    }

    // Первичная проверка при инициализации приложения (на случай, если по умолчанию выбран род)
    toggleLangModeVisibility();
}
// ==========================================
// ТЕХНИЧЕСКАЯ ЧАСТЬ: ВЫПАДАЮЩИЙ СПИСОК И СТАРТ (ЧАСТЬ 2)
// ==========================================

// ФУНКЦИЯ ДИНАМИЧЕСКОЙ ГЕНЕРАЦИИ КАСТОМНОГО ВЫПАДАЮЩЕГО СПИСКА
function renderModuleSelect() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    const dropdownSelected = document.getElementById('dropdown-selected');
    const customDropdown = document.getElementById('custom-dropdown');
    
    if (!dropdownMenu || !dropdownSelected || !customDropdown) return;
    dropdownMenu.innerHTML = '';
    customDropdown.classList.remove('open');
    dropdownMenu.classList.add('hidden');

    // 1. Создаем группу Специальные режимы
    const specialTitle = document.createElement('div');
    specialTitle.className = 'dropdown-group-title';
    specialTitle.textContent = "Специальные режимы";
    dropdownMenu.appendChild(specialTitle);

    const specialOptions = [
        { key: "all_lessons", text: "Все слова из этого раздела" },
        { key: "random_lesson", text: "Случайный выбор темы" }
    ];

    specialOptions.forEach(opt => createDropdownItem(opt.key, opt.text));

    // 2. Создаем заголовок для Конкретных тем
    const itemsTitle = document.createElement('div');
    itemsTitle.className = 'dropdown-group-title';
    if (currentCategory === 'lessons') itemsTitle.textContent = "Уроки из учебника Поповой, Казаковой, Ковальчук";
    if (currentCategory === 'verbs') itemsTitle.textContent = "Спряжения глаголов";
    if (currentCategory === 'themes') itemsTitle.textContent = "Тематические подборки";
    dropdownMenu.appendChild(itemsTitle);

    // Фильтруем базу vocabularyData
    Object.keys(vocabularyData).forEach((moduleKey) => {
        let isMatch = false;
        if (currentCategory === 'lessons' && moduleKey.startsWith('lesson')) isMatch = true;
        if (currentCategory === 'verbs' && moduleKey.startsWith('verb')) isMatch = true;
        if (currentCategory === 'themes' && moduleKey.startsWith('theme')) isMatch = true;

        if (isMatch) {
            createDropdownItem(moduleKey, vocabularyData[moduleKey].title);
        }
    });

    // Сбрасываем выбранное значение на дефолтное
    selectedModuleKey = "all_lessons";
    dropdownSelected.textContent = "Все слова из этого раздела";

    // Вспомогательная функция сборки элемента списка
    function createDropdownItem(key, text) {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        if (key === selectedModuleKey) item.classList.add('selected');
        item.textContent = text;
        item.setAttribute('data-value', key);

        item.addEventListener('click', (e) => {
            e.stopPropagation();
            selectedModuleKey = key;
            dropdownSelected.textContent = text;
            
            dropdownMenu.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            
            customDropdown.classList.remove('open');
            dropdownMenu.classList.add('hidden');
        });

        dropdownMenu.appendChild(item);
    }
}

// ЛОГИКА ЗАПУСКА ТРЕНИРОВКИ (ИСПРАВЛЕННАЯ)
startBtn.addEventListener('click', () => {
    // Безопасное считывание режима игры
    if (currentCategory === 'verbs') {
        gameMode = 'quiz';
    } else {
        const checkedGameMode = document.querySelector('input[name="game-mode"]:checked');
        gameMode = checkedGameMode ? checkedGameMode.value : 'quiz';
    }
    
    const langInput = document.querySelector('input[name="lang-mode"]:checked');
    langMode = langInput ? langInput.value : 'fr-ru';

    let sourceWords = [];

    // Определяем пулы данных в зависимости от выбранного пункта селекта
    if (selectedModuleKey === "all_lessons") {
        Object.keys(vocabularyData).forEach(key => {
            if (currentCategory === 'lessons' && key.startsWith('lesson')) sourceWords.push(...vocabularyData[key].words);
            if (currentCategory === 'verbs' && key.includes('verb')) sourceWords.push(...vocabularyData[key].words); // ИСПРАВЛЕНО: key.includes вместо startsWith
            if (currentCategory === 'themes' && key.startsWith('theme')) sourceWords.push(...vocabularyData[key].words);
        });
    } else if (selectedModuleKey === "random_lesson") {
        const availableKeys = Object.keys(vocabularyData).filter(key => {
            if (currentCategory === 'lessons') return key.startsWith('lesson');
            if (currentCategory === 'verbs') return key.includes('verb'); // ИСПРАВЛЕНО: key.includes вместо startsWith
            if (currentCategory === 'themes') return key.startsWith('theme');
            return false;
        });
        const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];
        sourceWords = [...vocabularyData[randomKey].words];
    } else {
        if (!vocabularyData[selectedModuleKey]) return;
        sourceWords = [...vocabularyData[selectedModuleKey].words];
    }

    if (gameMode === 'gender') {
        currentWords = sourceWords.filter(item => item.gender !== undefined);
        if (currentWords.length === 0) {
            alert("В выбранном разделе нет существительных с определенным родом!");
            return;
        }
    } else {
        currentWords = [...sourceWords];
    }

    // Перемешиваем массив слов
    currentWords.sort(() => Math.random() - 0.5);

    // ДИНАМИЧЕСКИЙ РАСЧЕТ ДЛИНЫ РАУНДА
    let maxQuestions = 10;

    if (selectedModuleKey === "all_lessons") {
        maxQuestions = 30;
    } else if (selectedModuleKey === "random_lesson") {
        maxQuestions = 20;
    } else {
        const totalAvailable = sourceWords.length;
        if (totalAvailable >= 45) {
            maxQuestions = 25;
        } else if (totalAvailable >= 25) {
            maxQuestions = 20;
        } else if (totalAvailable >= 15) {
            maxQuestions = 15;
        } else {
            maxQuestions = totalAvailable;
        }
    }

    if (currentWords.length > maxQuestions) {
        currentWords = currentWords.slice(0, maxQuestions);
    }

    currentIndex = 0;
    score = 0;

    // Скрываем экран настроек
    screenSettings.classList.add('hidden');

    if (gameMode === 'learn') {
        // Если выбрана учеба — открываем экран списка слов
        const screenLearn = document.getElementById('screen-learn');
        if (screenLearn) screenLearn.classList.remove('hidden');
        showVocabularyList(sourceWords);
    } else {
        // Иначе запускаем обычную тренировку
        screenGame.classList.remove('hidden');
        showQuestion();
    }

});
// ==========================================
// ТЕХНИЧЕСКАЯ ЧАСТЬ: ИГРА И РЕЗУЛЬТАТЫ (ЧАСТЬ 3)
// ==========================================

// ОТОБРАЖЕНИЕ ТЕКУЩЕГО ВОПРОСА (С ОЧИСТКОЙ ПОДСКАЗОК)
function showQuestion() {
    feedbackElement.className = 'feedback-box hidden';
    feedbackElement.innerHTML = '';
    nextBtn.classList.add('hidden');
    
    progressText.textContent = 'Вопрос ' + (currentIndex + 1) + ' из ' + currentWords.length;
    scoreText.textContent = 'Счёт: ' + score;

    const progressPercent = ((currentIndex + 1) / currentWords.length) * 100;
    progressBarFill.style.width = progressPercent + '%';

    const currentWordObj = currentWords[currentIndex];

    if (gameMode === 'gender') {
        targetWordElement.textContent = '__ ' + currentWordObj.noun;
        quizOptionsContainer.classList.remove('hidden');
        inputContainer.classList.add('hidden');
        generateGenderOptions(currentWordObj.gender);
    } else {
        const displayWord = langMode === 'fr-ru' ? currentWordObj.fr : currentWordObj.ru;
        const correctAnswer = langMode === 'fr-ru' ? currentWordObj.ru : currentWordObj.fr;

        // ИСПРАВЛЕНО: Если мы переводим с русского на французский (RU -> FR),
        // автоматически вырезаем инфинитивные подсказки в скобках из текста вопроса
        let cleanDisplayWord = displayWord;
        if (langMode === 'ru-fr') {
            cleanDisplayWord = displayWord.replace(/\s*\(.*?\)\s*/g, ' ').trim();
        }

        targetWordElement.textContent = cleanDisplayWord;

        quizOptionsContainer.classList.remove('hidden');
        inputContainer.classList.add('hidden');
        generateQuizOptions(correctAnswer);
    }
}

// ГЕНЕРАЦИЯ ВАРИАНТОВ ОТВЕТОВ ДЛЯ ТЕСТА
function generateQuizOptions(correctAnswer) {
    quizOptionsContainer.innerHTML = '';
    let wrongAnswersPool = [];

    // Вспомогательная функция, которая достает чистое первое слово (местоимение) без скобок и знаков
    function getCleanFirstWord(str) {
        if (!str) return '';
        return str.trim().split(/\s+/)[0].replace(/[()]/g, '').toLowerCase();
    }

    // 1. НАДЕЖНО СОБИРАЕМ АБСОЛЮТНО ВСЕ СЛОВА ИЗ ТЕКУЩЕЙ БАЗЫ ДАННЫХ ДЛЯ ГЛОБАЛЬНОГО ПУЛА
    let globalPool = [];
    Object.keys(vocabularyData).forEach(key => {
        if (vocabularyData[key] && vocabularyData[key].words) {
            globalPool.push(...vocabularyData[key].words.map(item => langMode === 'fr-ru' ? item.ru : item.fr));
        }
    });

    // 2. ЕСЛИ КАТЕГОРИЯ ГЛАГОЛОВ АКТИВНА И В БАЗЕ ЕСТЬ ХОТЬ КАКИЕ-ТО ГЛАГОЛЫ
    if (typeof currentCategory !== 'undefined' && currentCategory === 'verbs') {
        const targetPrefix = getCleanFirstWord(correctAnswer);

        // Ищем среди всех слов базы те, которые начинаются на то же местоимение
        globalPool.forEach(answerText => {
            const itemPrefix = getCleanFirstWord(answerText);
            if (itemPrefix === targetPrefix) {
                wrongAnswersPool.push(answerText);
            }
        });
    } else {
        // Стандартная логика для уроков и тем (с защитой от отсутствия переменных)
        const activeModule = typeof selectedModuleKey !== 'undefined' ? selectedModuleKey : 'all_lessons';
        
        if (activeModule === "all_lessons" || activeModule === "random_lesson") {
            Object.keys(vocabularyData).forEach(key => {
                let isMatch = false;
                const activeCat = typeof currentCategory !== 'undefined' ? currentCategory : 'lessons';
                
                if (activeCat === 'lessons' && key.startsWith('lesson')) isMatch = true;
                if (activeCat === 'themes' && key.startsWith('theme')) isMatch = true;
                if (activeCat === 'verbs' && key.startsWith('verb')) isMatch = true;
                
                // Если база старая и префиксы не делятся, берем всё подряд, чтобы не ломать игру
                if (!key.startsWith('lesson') && !key.startsWith('theme') && !key.startsWith('verb')) isMatch = true;

                if (isMatch && vocabularyData[key] && vocabularyData[key].words) {
                    wrongAnswersPool.push(...vocabularyData[key].words.map(item => langMode === 'fr-ru' ? item.ru : item.fr));
                }
            });
        } else {
            if (vocabularyData[activeModule] && vocabularyData[activeModule].words) {
                wrongAnswersPool = vocabularyData[activeModule].words.map(item => langMode === 'fr-ru' ? item.ru : item.fr);
            }
        }
    }
    
    // Очищаем пул от правильного ответа и дубликатов
    wrongAnswersPool = wrongAnswersPool.filter(ans => ans.trim().toLowerCase() !== correctAnswer.trim().toLowerCase());
    wrongAnswersPool = [...new Set(wrongAnswersPool)];

    // 3. ЖЕСТКАЯ СТРАХОВКА: Если вариантов не набралось (например, в старой базе или мало совпадений)
    if (wrongAnswersPool.length < 3) {
        // Если мы в режиме глаголов и пула не хватает, генерируем искусственные похожие формы
        if (typeof currentCategory !== 'undefined' && currentCategory === 'verbs') {
            const parts = correctAnswer.trim().split(/\s+/);
            const pronoun = parts[0] || ''; 
            
            const fallbackVerbs = ["имеете", "есть", "идете", "делаете", "читаете", "говорите", "пишете", "открываете", "можете", "закрываете"];
            const fallbackVerbsFr = ["avez", "êtes", "allez", "faites", "lisez", "dites", "écrivez", "ouvrez", "pouvez", "fermez"];
            const listToUse = langMode === 'fr-ru' ? fallbackVerbs : fallbackVerbsFr;

            listToUse.forEach(verbAction => {
                const generatedOption = pronoun ? `${pronoun} ${verbAction}` : verbAction;
                if (wrongAnswersPool.length < 3 && generatedOption.toLowerCase() !== correctAnswer.trim().toLowerCase()) {
                    wrongAnswersPool.push(generatedOption);
                }
            });
        }
        
        // Если даже после этого (или для обычных уроков) вариантов всё ещё меньше 3, просто досыпаем случайные слова из базы
        if (wrongAnswersPool.length < 3) {
            let extraFallback = globalPool.filter(ans => ans.trim().toLowerCase() !== correctAnswer.trim().toLowerCase());
            wrongAnswersPool = [...new Set([...wrongAnswersPool, ...extraFallback])];
        }
    }

    // Перемешиваем варианты ответов и берем ровно 3 штуки
    wrongAnswersPool.sort(() => Math.random() - 0.5);
    const selectedWrongAnswers = wrongAnswersPool.slice(0, 3);

    // Собираем финальный массив из 4 кнопок (1 правильная + 3 неправильные)
    const finalOptions = [correctAnswer, ...selectedWrongAnswers];
    finalOptions.sort(() => Math.random() - 0.5);

    // Отрисовываем кнопки на экране, автоматически очищая их от подсказок в скобках
    finalOptions.forEach(optionText => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        // Регулярное выражение удаляет пробел и всё, что находится внутри круглых скобок ()
        const cleanText = optionText.replace(/\s*\(.*?\)\s*/g, ' ').trim();
        
        btn.textContent = cleanText;
        btn.addEventListener('click', () => handleAnswerSelection(btn, optionText, correctAnswer));
        quizOptionsContainer.appendChild(btn);
    });

}

// ГЕНЕРАЦИЯ ВАРИАНТОВ ОТВЕТОВ ДЛЯ ВЫБОРА РОДА (LE/LA)
function generateGenderOptions(correctGender) {
    quizOptionsContainer.innerHTML = '';

    const genders = [
        { code: 'm', label: 'Le (Мужской)' },
        { code: 'f', label: 'La (Женский)' }
    ];

    genders.forEach(g => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = g.label;
        btn.addEventListener('click', () => handleGenderSelection(btn, g.code, correctGender));
        quizOptionsContainer.appendChild(btn);
    });
}

// ОБРАБОТКА ВЫБОРА ВАРИАНТА ОТВЕТА (ТЕСТ)
function handleAnswerSelection(selectedBtn, chosenAnswer, correctAnswer) {
    const allButtons = quizOptionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (chosenAnswer === correctAnswer) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        allButtons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    scoreText.textContent = 'Счёт: ' + score;
    nextBtn.classList.remove('hidden');
}

// ОБРАБОТКА ВЫБОРА РОДА (LE/LA)
function handleGenderSelection(selectedBtn, chosenGender, correctGender) {
    const allButtons = quizOptionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (chosenGender === correctGender) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        allButtons.forEach(btn => {
            if ((correctGender === 'f' && btn.textContent.includes('La')) || 
                (correctGender === 'm' && btn.textContent.includes('Le'))) {
                btn.classList.add('correct');
            }
        });
    }
    scoreText.textContent = 'Счёт: ' + score;
    nextBtn.classList.remove('hidden');
}

// ПЕРЕХОД К СЛЕДУЮЩЕМУ ВОПРОСУ
function goToNextQuestion() {
    currentIndex++;
    if (currentIndex < currentWords.length) {
        showQuestion();
    } else {
        showResultsScreen();
    }
}

// ВЫВОД ЭКРАНА ИТОГОВЫХ РЕЗУЛЬТАТОВ
function showResultsScreen() {
    screenGame.classList.add('hidden');
    screenResults.classList.remove('hidden');

    finalScoreElement.textContent = score + ' / ' + currentWords.length;

    const percentage = (score / currentWords.length) * 100;
    if (percentage === 100) {
        resultMessageElement.textContent = "Невероятно! Идеальный результат, вы выучили все слова!";
        finalScoreElement.style.color = "#15803d";
    } else if (percentage >= 70) {
        resultMessageElement.textContent = "Хорошая работа! Отличные знания лексики уроков!";
        finalScoreElement.style.color = "#2563eb";
    } else if (percentage >= 40) {
        resultMessageElement.textContent = "Неплохо, но стоит еще немного повторить материал.";
        finalScoreElement.style.color = "#d97706";
    } else {
        resultMessageElement.textContent = "Нужно подучить слова и попробовать снова!";
        finalScoreElement.style.color = "#b91c1c";
    }
}

// НАЗНАЧЕНИЕ ГЛОБАЛЬНЫХ СЛУШАТЕЛЕЙ СОБЫТИЙ ДЛЯ НАВИГАЦИИ
nextBtn.addEventListener('click', goToNextQuestion);

quitBtn.addEventListener('click', () => {
    screenGame.classList.add('hidden');
    screenSettings.classList.remove('hidden');
});

restartBtn.addEventListener('click', () => {
    screenResults.classList.add('hidden');
    screenSettings.classList.remove('hidden');
});

// Автоматический старт инициализации всего приложения при загрузке скрипта
    // Подсветка для новой плитки "Просмотр / Учеба"
    const learnLabel = document.getElementById('mode-learn-label');
    if (learnLabel) {
        learnLabel.addEventListener('click', () => {
            // Находим все карточки режимов в этой группе и снимаем с них выделение
            const allLabels = learnLabel.parentElement.querySelectorAll('label');
            allLabels.forEach(l => l.classList.remove('selected-card'));
            // Добавляем выделение нашей кнопке
            learnLabel.classList.add('selected-card');
        });
    }
// ФУНКЦИЯ ОТОБРАЖЕНИЯ СПИСКА СЛОВ ДЛЯ ИЗУЧЕНИЯ
// ФУНКЦИЯ ОТОБРАЖЕНИЯ СПИСКА СЛОВ ДЛЯ ИЗУЧЕНИЯ (ОБНОВЛЕННЫЙ ПРЕМИУМ-ДИЗАЙН)
function showVocabularyList(words) {
    const learnWordsContainer = document.getElementById('learn-words-container');
    const learnTitleText = document.getElementById('learn-title-text');
    const quitLearnBtn = document.getElementById('quit-learn-btn');
    const screenLearn = document.getElementById('screen-learn');
    const screenSettings = document.getElementById('screen-settings');

    if (!learnWordsContainer) return;
    learnWordsContainer.innerHTML = '';
    
    // Подтягиваем красивое название темы/урока в заголовок
    const selectEl = document.getElementById('lesson-select');
    if (selectEl && learnTitleText) {
        learnTitleText.textContent = selectEl.options[selectEl.selectedIndex].text;
    }

    if (words.length === 0) {
        learnWordsContainer.innerHTML = '<div style="text-align:center; color:#64748b; padding:40px; font-weight:500;">В этом разделе пока нет слов</div>';
        return;
    }

    // Добавляем красивый кастомный скроллбар для контейнера через CSS
    learnWordsContainer.style.cssText = `
        display: flex; 
        flex-direction: column; 
        gap: 10px; 
        margin: 25px 0; 
        max-height: 420px; 
        overflow-y: auto; 
        padding-right: 8px;
    `;

    // Выводим слова в новом стиле
    words.forEach((item, index) => {
        const row = document.createElement('div');
        row.style.cssText = `
            display: grid;
            grid-template-columns: 40px 1fr 1fr;
            align-items: center;
            gap: 16px;
            padding: 14px 18px; 
            background: #ffffff; 
            border: 1px solid #e2e8f0; 
            border-radius: 14px;
            box-shadow: 0 2px 4px rgba(148, 163, 184, 0.03);
            transition: all 0.2s ease;
        `;

        // Эффект легкого подсвечивания при наведении мышки
        row.addEventListener('mouseenter', () => {
            row.style.borderColor = '#cbd5e1';
            row.style.background = '#f8fafc';
        });
        row.addEventListener('mouseleave', () => {
            row.style.borderColor = '#e2e8f0';
            row.style.background = '#ffffff';
        });
        
        row.innerHTML = `
            <!-- Номер слова -->
            <span style="font-size: 13px; font-weight: 700; color: #94a3b8; background: #f1f5f9; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; border-radius: 50%; flex-shrink: 0;">${index + 1}</span>
            
            <!-- Французское слово -->
            <span style="font-size: 16px; font-weight: 700; color: #0f172a; word-break: break-word; line-height: 1.4; padding-right: 10px;">${item.fr}</span>
            
            <!-- Русский перевод (УВЕЛИЧЕН ШРИФТ И СДЕЛАН ЯРЧЕ) -->
            <span style="font-size: 16px; font-weight: 500; color: #334155; word-break: break-word; line-height: 1.4; border-left: 2px solid #e2e8f0; padding-left: 16px; height: 100%; display: flex; align-items: center;">${item.ru}</span>
        `;
        learnWordsContainer.appendChild(row);
    });

    // Настраиваем кнопку возврата "Назад в меню"
    if (quitLearnBtn && screenLearn && screenSettings) {
        const newQuitBtn = quitLearnBtn.cloneNode(true);
        quitLearnBtn.parentNode.replaceChild(newQuitBtn, quitLearnBtn);
        
        newQuitBtn.addEventListener('click', () => {
            screenLearn.classList.add('hidden');
            screenSettings.classList.remove('hidden');
        });
    }
}

initializeApp();