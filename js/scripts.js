// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


//Hero section Start
//Counter Start
function countdown() {
  const countdownElements = document.querySelectorAll('.countdown');
  let minutes = 10;
  let seconds = 0;

  function updateCountdown() {
    countdownElements.forEach(element => {
      element.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });

    if (minutes === 0 && seconds === 0) {
      clearInterval(countdownInterval);
      hideDiscountSection();
    } else {
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
}

function hideDiscountSection() {
  const discountSection = document.querySelector('.discount-section');
  discountSection.style.display = 'none';
}

countdown();
// Counter end

// Modal Start
// Модальное окно
function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

  const body = document.body

  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'flex'
    body.classList.add('locked')
  });
  close.addEventListener('click', () => {
    modal.style.display = 'none'
     body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
       body.classList.remove('locked')
    }
  })
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')

const paymentItems = document.querySelectorAll('.pay__section-item');
const paymentContents = document.querySelectorAll('.payment-content');

function handleItemClick(item) {
  const selectedPayment = item.dataset.payment;
  const targetContent = document.getElementById(item.dataset.target);

  paymentItems.forEach(item => {
    item.classList.remove('active');
  });

  paymentContents.forEach(content => {  
    content.classList.remove('active');
  });

  item.classList.add('active');
  targetContent.classList.add('active');
}

paymentItems.forEach(item => {
  item.addEventListener('click', () => {
    handleItemClick(item);
  });

  item.addEventListener('mouseenter', () => {
    item.classList.add('active');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('active');
  });
});

// При відкритті модального вікна
document.body.classList.add('modal-open');

// При закритті модального вікна
document.body.classList.remove('modal-open');



//Credit card scripts
const creditNumberInput = document.querySelector('.creditNumber');

creditNumberInput.addEventListener('input', (e) => {
  let input = e.target.value;
  input = input.replace(/\s/g, ''); // Видаляємо пробіли з введеного тексту
  let formattedInput = '';
  
  for (let i = 0; i < input.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedInput += ' '; // Додаємо пробіл після кожних 4 цифр
    }
    formattedInput += input[i];
  }
  
  e.target.value = formattedInput;
});


// modal

// Popup
// Отримання всіх чекбоксів в попапі
// Отримання всіх елементів попапу
const checkboxes = document.querySelectorAll('.popup__checkbox');
const popupItems = document.querySelectorAll('.popup__item');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });

      popupItems.forEach((popupItem) => {
        popupItem.classList.remove('active');
      });

      const popupItem = checkbox.closest('.popup__item');
      popupItem.classList.add('active');
    }
  });
});

popupItems.forEach((popupItem) => {
  popupItem.addEventListener('click', (event) => {
    const target = event.target;
    const isCheckbox = target.classList.contains('popup__checkbox');

    if (!isCheckbox) {
      const checkbox = popupItem.querySelector('.popup__checkbox');
      checkbox.checked = !checkbox.checked;

      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });

      popupItems.forEach((item) => {
        item.classList.remove('active');
      });

      popupItem.classList.add('active');
    }
  });
});

// Popup end

// Accordion start

// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          const parent = item.parentNode
          if (parent.classList.contains('accordion__item-active')) {
              parent.classList.remove('accordion__item-active')
          } else {
              document
                  .querySelectorAll('.accordion__item')
                  .forEach(child => child.classList.remove('accordion__item-active'))   
              parent.classList.add('accordion__item-active')
          }
      })
  })
}
accordion() 
// Accordion end


var countdown = document.getElementById('countdown');
var navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
  var offset = countdown.offsetTop;

  if (window.pageYOffset >= offset) {
    countdown.classList.add('fixed');
    navbar.style.display = 'none'; // Hide the navbar
  } else {
    countdown.classList.remove('fixed');
    navbar.style.display = 'flex'; // Show the navbar
  }
});



