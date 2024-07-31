
// массив с комментариями
const messages = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

// Массив с именами пользователей
const names = [
  "Артём",
  "Мария",
  "Дмитрий",
  "Елена",
  "Сергей",
  "Анна",
  "Иван",
  "Ольга",
  "Павел",
  "Татьяна"
];

// Массив с описаниями фото
const descriptions = [
  "Удивительный закат над морем.",
  "Момент радости на празднике.",
  "Прекрасный пейзаж гор.",
  "Счастливые моменты с друзьями.",
  "Невероятная архитектура старого города.",
  "Красивая природа в лесу.",
  "Забавные моменты с домашними животными.",
  "Теплые воспоминания о летнем отдыхе.",
  "Восхитительный вид на озеро.",
  "Нежные цветы в саду.",
  "Зимняя сказка в горах.",
  "Спокойствие утреннего тумана.",
  "Яркие краски осени.",
  "Солнечный день на пляже.",
  "Захватывающий момент на концерте.",
  "Улыбки детей на празднике.",
  "Тихий вечер у камина.",
  "Приключения в путешествии.",
  "Семейные традиции на празднике.",
  "Вдохновение от искусства.",
  "Незабываемые моменты с любимыми.",
  "Смех и радость в кругу друзей.",
  "Творческий процесс за работой.",
  "Долгожданная встреча с близкими.",
  "Волшебство зимних праздников."
];

// Конфигурация диапазонов
const ranges = {
  photos: { MIN: 1, MAX: 25 },
  likes: { MIN: 15, MAX: 200 },
  comments: { MIN: 0, MAX: 30 },
  avatars: { MIN: 1, MAX: 6 },
};

export { messages, names, descriptions, ranges };

