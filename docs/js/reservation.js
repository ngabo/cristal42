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

  // Always hidden on page load
  success.hidden = true;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    // Collect values
    const nom      = document.getElementById('nom').value.trim();
    const email    = document.getElementById('email').value.trim();
    const tel      = document.getElementById('telephone').value.trim();
    const svc      = document.getElementById('service');
    const svcLabel = svc.options[svc.selectedIndex].text;
    const details  = document.getElementById('details').value.trim();

    // Build a clean email body
    const body = [
      '=== Nouvelle demande de devis Cristal42 ===',
      '',
      'Nom complet   : ' + nom,
      'E-mail        : ' + email,
      'Téléphone     : ' + (tel || 'non renseigné'),
      'Service       : ' + svcLabel,
      '',
      'Détails :',
      details || '(aucun détail)',
      '',
      '---',
      'Envoyé depuis le site Cristal42'
    ].join('\n');

    const subject = encodeURIComponent('🧹 Nouveau devis Cristal42 – ' + svcLabel);
    const bodyEnc = encodeURIComponent(body);

    // Open native email client pre-filled
    window.location.href =
      'mailto:ngabochampion@gmail.com?subject=' + subject + '&body=' + bodyEnc;

    // Show success message & reset form
    setTimeout(() => {
      success.hidden = false;
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      form.querySelectorAll('input:not([type=hidden]), select, textarea')
          .forEach(el => el.value = '');
      submit.innerHTML  = '✓ Demande envoyée !';
      submit.style.background = '#16a34a';
      submit.disabled = true;
    }, 400);
  });

});
