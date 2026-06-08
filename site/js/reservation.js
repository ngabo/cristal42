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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    // Loading state
    submit.disabled = true;
    submit.textContent = 'Envoi en cours…';

    const data = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/ngabochampion@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });

      if (res.ok) {
        // Success
        form.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        submit.textContent = '✓ Envoyé !';
        submit.style.background = '#16a34a';
      } else {
        throw new Error('Erreur serveur');
      }
    } catch {
      submit.disabled = false;
      submit.textContent = 'Envoyer ma demande →';
      alert('Une erreur est survenue. Veuillez réessayer ou nous appeler directement au 07 53 38 71 68.');
    }
  });

});
