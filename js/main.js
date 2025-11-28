// Простая логика для модального окна и навигации
document.addEventListener('DOMContentLoaded', ()=>{
  const modal = document.getElementById('modal');
  const btnBook = document.getElementById('book-now');
  const btnHeaderBook = document.getElementById('btn-book');
  const close = document.getElementById('modal-close');
  const cancel = document.getElementById('modal-cancel');
  const form = document.getElementById('booking-form');
  const btnContact = document.getElementById('btn-contact');

  function openModal(){ modal.setAttribute('aria-hidden','false'); }
  function closeModal(){ modal.setAttribute('aria-hidden','true'); }

  if(btnBook) btnBook.addEventListener('click', openModal);
  if(btnHeaderBook) btnHeaderBook.addEventListener('click', openModal);
  if(close) close.addEventListener('click', closeModal);
  if(cancel) cancel.addEventListener('click', closeModal);

  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // Здесь можно добавить отправку на сервер. Пока — локальный отклик.
      alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      form.reset();
      closeModal();
    });
  }

  if(btnContact){
    btnContact.addEventListener('click', ()=>{
      const contacts = document.getElementById('contacts');
      contacts && contacts.scrollIntoView({behavior:'smooth'});
    });
  }

  // Плавная прокрутка для навигации
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
      }
    });
  });
});