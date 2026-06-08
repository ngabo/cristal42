document.addEventListener('DOMContentLoaded', () => {

  // Pre-select service from URL query param e.g. ?service=airbnb
  const params  = new URLSearchParams(location.search);
  const service = params.get('service');
  if (service) {
    const sel = document.getElementById('service');
    if (sel) sel.value = service;
  }

  const form    = document.getElementById('devisForm');
  const success = document.getElementById('formSuccess');
  const submit  = form ? form.querySelector('.res-form__submit') : null;
  if (!form) return;

  // Always hide success on load
  success.hidden = true;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    // Loading state
    const origText   = submit.innerHTML;
    submit.disabled  = true;
    submit.innerHTML = 'Envoi en cours…';

    const data = new FormData(form);

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method : 'POST',
        body   : data
      });
      const json = await res.json();

      if (json.success) {
        // Show success message, clear fields
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        form.querySelectorAll('input:not([type=hidden]), select, textarea')
            .forEach(el => el.value = '');
        submit.innerHTML = '✓ Envoyé !';
        submit.style.background = '#16a34a';
      } else {
        throw new Error(json.message || 'Erreur inconnue');
      }
    } catch (err) {
      console.error('Erreur envoi :', err);
      submit.disabled  = false;
      submit.innerHTML = origText;
      alert('Une erreur est survenue. Veuillez réessayer ou nous appeler au 07 53 38 71 68.');
    }
  });

});
