// Генерируем случайное целое число в заданном диапазоне.
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Возвращаем случайный элемент из переданного массива.
const getRandomElement = arr => arr[getRandomInt(0, arr.length - 1)];

// Конфигурация диапазонов
const ranges = {
  photos: { MIN: 1, MAX: 25 },
  likes: { MIN: 15, MAX: 200 },
  comments: { MIN: 0, MAX: 30 },
  avatars: { MIN: 1, MAX: 6 },
};

// Создаем массив комментариев со случайными сообщениями и именами
function generateComments() {
  const messages = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
  ];

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

  const commentsCount = getRandomInt(ranges.comments.MIN, ranges.comments.MAX);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push({
      id: i + 1, // Идентификатор комментария
      avatar: `img/avatar-${getRandomInt(ranges.avatars.MIN, ranges.avatars.MAX)}.svg`, // Аватарка
      message: getRandomElement(messages), // Сообщение
      name: getRandomElement(names) // Имя
    });
  }

  return comments;
}

// Создаем массив фотографий со случайными описаниями фото, списком комментариев и лайками.
function generatePhotos() {
  const photos = [];
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

  for (let i = ranges.photos.MIN; i <= ranges.photos.MAX; i++) {
    photos.push({
      id: i, // Идентификатор фотографии
      url: `photos/${i}.jpg`, // URL фотографии
      description: descriptions[i - 1], // Описание
      likes: getRandomInt(ranges.likes.MIN, ranges.likes.MAX), // Количество лайков
      comments: generateComments() // Список комментариев
    });
  }

  return photos;
}

// Генерация массива фотографий
const photoArray = generatePhotos();
console.log(photoArray);
