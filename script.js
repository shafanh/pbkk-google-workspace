const scriptURL = 'https://script.google.com/macros/s/AKfycbwtLOUVaGBd5xWA3F9swPYGMMsKQKi7JPwd0oeLhMWL7xm-QPmrCLW84k71Yx9veI0p/exec'

const form = document.forms['feedback-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})