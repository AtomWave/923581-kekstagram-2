const MAX_HASHTAGS = 5; // Максимальное количество хэштегов
const MAX_SYMBOLS = 20; // Максимальная длина одного хэштега

let errorMessage = ''; // Сообщение об ошибке
const error = () => errorMessage; // Функция для получения сообщения об ошибке

const isHashtagsValid = (value) => {
  errorMessage = ''; // Сброс сообщения об ошибке
  const inputText = value.toLowerCase().trim(); // Приведение текста к нижнему регистру и удаление пробелов

  // Проверка на пустой ввод
  if (!inputText) {
    return true; // Если ввод пустой, считаем его валидным
  }

  const inputArray = inputText.split(/\s+/); // Разделение текста на массив хэштегов

  const rules = [ // Массив правил для проверки
    {
      check: inputArray.some((item) => item.length === 0), // Проверка на пустые хэштеги
      error: 'Не может быть пустых хэштегов',
    },
    {
      check: inputArray.some((item) => item.slice(1).includes('#')), // Проверка на наличие символа '#' в середине хэштега
      error: 'Хэштеги не могут содержать символ \'#\' в середине',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'), // Проверка, что каждый хэштег начинается с символа '#'
      error: 'Каждый хэштег должен начинаться с символа \'#\'',
    },
    {
      check: inputArray.some((item, num, array) => array.indexOf(item) !== num), // Проверка на дубликаты
      error: 'Хэштеги не могут повторяться',
    },
    {
      check: inputArray.some((item) => item.length > MAX_SYMBOLS), // Проверка длины каждого хэштега
      error: `Максимальная длина одного хэштега ${MAX_SYMBOLS} символов, пожалуйста, исправьте`,
    },
    {
      check: inputArray.length > MAX_HASHTAGS, // Проверка на количество хэштегов
      error: `Нельзя использовать больше ${MAX_HASHTAGS} хэштегов`,
    },
    {
      check: inputArray.some((item) => !/^#[a-zA-Z0-9éА-Яа-яЁё]{1,19}$/i.test(item)), // Проверка формата хэштегов с поддержкой кириллицы
      error: 'Некорректный формат хэштега',
    },
  ];

  return rules.every((rule) => { // Проверяем все правила
    const isInvalid = rule.check; // Определяем, есть ли ошибка по текущему правилу
    if (isInvalid) {
      errorMessage = rule.error; // Установка сообщения об ошибке
    }
    return !isInvalid; // Возвращаем true, если нет ошибок
  });
};

export { error, isHashtagsValid }; // Экспортируем функции
