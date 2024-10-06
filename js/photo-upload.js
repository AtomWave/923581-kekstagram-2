
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.img-upload__start input[type = file]');
const preview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  console.log('object');
  if (matches) {
    console.log('object');
    preview.src = URL.createObjectURL(file);
  }
});
