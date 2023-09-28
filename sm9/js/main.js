// let block = document.getElementById('block');

// // Создаем объект для отслеживания состояния клавиш
// let keyState = {
//   r: false,
//   g: false,
//   b: false
// };

// // Функция для установки цвета фона
// function setBackgroundColor() {
//   if (keyState.r) block.style.backgroundColor = 'red';
//   if (keyState.g) block.style.backgroundColor = 'green';
//   if (keyState.b) block.style.backgroundColor = 'blue';
// }

// // Слушатели событий для нажатия и отжатия клавиш
// document.addEventListener('keydown', function(event) {
//   if (event.key.toLowerCase() === 'r') {
//     keyState.r = true;
//     setBackgroundColor();
//   }
//   if (event.key.toLowerCase() === 'g') {
//     keyState.g = true;
//     setBackgroundColor();
//   }
//   if (event.key.toLowerCase() === 'b') {
//     keyState.b = true;
//     setBackgroundColor();
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.key.toLowerCase() === 'r') {
//     keyState.r = false;
//     block.style.backgroundColor = ''; // Возвращаем фон в изначальное состояние
//   }
//   if (event.key.toLowerCase() === 'g') {
//     keyState.g = false;
//     block.style.backgroundColor = ''; // Возвращаем фон в изначальное состояние
//   }
//   if (event.key.toLowerCase() === 'b') {
//     keyState.b = false;
//     block.style.backgroundColor = ''; // Возвращаем фон в изначальное состояние
//   }
// });


let block = document.getElementById('block');
let x = 0;
let y = 0;

// Функция для обновления позиции блока
function updateBlockPosition() {
  block.style.transform = `translate(${x}px, ${y}px)`;
}

// Слушатели событий для клавиш W, D, S и A
document.addEventListener('keydown', function(event) {
  const step = 1;

  if (event.key == 'w') {
    y -= step; // W - вверх
  }
  if (event.key == 'd') {
    x += step; // D - направо
  }
  if (event.key == 's') {
    y += step; // S - вниз
  }
  if (event.key == 'a') {
    x -= step; // A - налево
  }

  updateBlockPosition();
});