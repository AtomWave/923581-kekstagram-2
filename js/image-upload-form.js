import { isEscapeKey } from './util.js';
import { resetSlider } from './effect-level-slider.js';
import { updateScale, initScaleControls } from './image-utils.js';
import { isValid, hashtagInput, descriptionInput, reset as resetValidation } from './image-upload-form-validator.js';
import { sendData } from './api.js';
import { openPopup } from './popup.js';
import {setEscapeControl, removeEscapeControl} from './escape-control.js';
// Инициализация управления масштабом фотографии
initScaleControls();

// Определение элементов формы
const uploadForm = document.querySelector('.img-upload__form');
const imageEditingForm = document.querySelector('.img-upload__overlay');
const uploadFileStart = uploadForm.querySelector('#upload-file');
const imageEditingFormClose = uploadForm.querySelector('#upload-cancel');
const effectLevelControl = uploadForm.querySelector('.img-upload__effect-level');
const submitButton = uploadForm.querySelector('#upload-submit');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

// Обработчик закрытия формы редактирования
const onCloseButtonClick = () => {
  closeImageEditor();
  removeEscapeControl();
}

// Обработчик нажатий клавиш
// const onDocumentKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     if (document.activeElement === hashtagInput || document.activeElement === descriptionInput) {
//       evt.stopPropagation();
//     } else {
//       closeImageEditor();
//     }
//   }
// };

// Функция закрытия формы редактирования
function closeImageEditor() {
  document.body.classList.remove('modal-open');
  imageEditingForm.classList.add('hidden');
  effectLevelControl.classList.add('hidden');
  uploadForm.reset();
  resetValidation();

  // Удаление обработчиков событий
  removeEventListeners();
}

// Добавление обработчиков событий
function addEventListeners() {
  imageEditingFormClose.addEventListener('click', onCloseButtonClick);
  // document.addEventListener('keydown', onDocumentKeydown);
}

// Удаление обработчиков событий
function removeEventListeners() {
  // document.removeEventListener('keydown', onDocumentKeydown);
  imageEditingFormClose.removeEventListener('click', onCloseButtonClick);
}

const canCloseForm = () => !(document.activeElement === hashtagInput || document.activeElement === descriptionInput);

// Функция выбора фотографии
const onPhotoSelect = () => {
  document.body.classList.add('modal-open');
  imageEditingForm.classList.remove('hidden');
  resetSlider();
  updateScale(true);

  // Добавляем обработчики событий при открытии формы редактирования
  addEventListeners();
  setEscapeControl(closeImageEditor, canCloseForm);
};

// Добавление обработчиков событий к элементам формы
uploadFileStart.addEventListener('change', onPhotoSelect);
// uploadForm.addEventListener('submit', onFormSubmit);

const blockSubmitButton = (isBlocked = true) => {
  console.log(submitButton)
  submitButton.disabled = isBlocked;
  console.log(submitButton.disabled)
  submitButton.textContent = isBlocked ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

// const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isValid()) {
      blockSubmitButton(true);
      sendData(new FormData(evt.target))
        .then((() => {
          closeImageEditor();
          removeEscapeControl();
          openPopup('success');
        }))
        .catch(() => {
          openPopup('error');
        })
        .finally(() => blockSubmitButton(false));
    }
  });
// };

export { closeImageEditor };
