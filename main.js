const mainContent = document.querySelector('.js-main-content');
const inputEl = document.querySelector('.js-input');
const btnSend = document.querySelector('.js-btn-send');

inputEl.addEventListener('change', onInputData);

let inputText;

function onInputData (e) {
  const { value } = e.target;
  inputText = value.trim();
}

btnSend.addEventListener('click', onCreateMessage);

function onCreateMessage (e) {
  const { currentTarget } = e;

  if (!inputText) return;

  mainContent.insertAdjacentHTML('beforeend', createMarkap());

  const messageList = [...mainContent.children];

  if (!(messageList.length % 2)) {
    messageList[messageList.length - 1].classList.add('main-content__message-wrapper_active');
  } else {
    messageList[messageList.length - 1].classList.remove('main-content__message-wrapper_active');
  }

  inputEl.value = '';
  inputText = '';
}

function createMarkap () {
  return `
    <div class="main-content__message-wrapper">
      <p class="main-content__message">${inputText}</p>
    </div>`;
}