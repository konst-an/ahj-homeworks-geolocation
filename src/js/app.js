import getCurrentPosition from './geo';
import parseCoordinates from './parser';

const input = document.querySelector('.message-input');
const timeline = document.querySelector('.timeline');

const modal = document.querySelector('.modal');
const modalInput = document.querySelector('.modal-input');

const okBtn = document.querySelector('.ok-btn');
const cancelBtn = document.querySelector('.cancel-btn');

let pendingText = '';

input.addEventListener('keydown', async (event) => {
  if (event.key !== 'Enter') {
    return;
  }

  const text = input.value.trim();

  if (!text) {
    return;
  }

  try {
    const coords = await getCurrentPosition();

    addPost(text, coords);

    input.value = '';
  } catch (error) {
    pendingText = text;

    openModal();
  }
});

okBtn.addEventListener('click', () => {
  try {
    const coords = parseCoordinates(modalInput.value);

    addPost(pendingText, coords);

    closeModal();

    input.value = '';

    modalInput.value = '';
  } catch (error) {
    alert('Введите координаты в правильном формате');
  }
});

cancelBtn.addEventListener('click', () => {
  closeModal();
});

function addPost(text, coords) {
  const post = document.createElement('div');

  post.className = 'post';

  post.innerHTML = `
    <div class="post-text">${text}</div>

    <div class="coords">
      [${coords.lat}, ${coords.lng}]
    </div>
  `;

  timeline.prepend(post);
}

function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}