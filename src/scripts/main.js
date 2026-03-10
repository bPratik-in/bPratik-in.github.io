/**
 * Contact details are assembled in JS to reduce crawler harvesting.
 * Fragments are not stored as plain mailto/tel in the HTML.
 */
(function () {
  // const emailParts = ['hi', '@', 'gmail', '.', 'com'];
  // const phoneDigits = ['+', '44', '7111', '111', '111'];

  // function assembleEmail() {
  //   return emailParts.join('');
  // }

  // function assemblePhone() {
  //   return phoneDigits.join('');
  // }

  // function initContact() {
  //   const emailEl = document.getElementById('contact-email');
  //   const phoneEl = document.getElementById('contact-phone');
  //   if (emailEl) {
  //     const email = assembleEmail();
  //     emailEl.href = 'mailto:' + email;
  //     emailEl.textContent = email;
  //   }
  //   if (phoneEl) {
  //     const phone = assemblePhone();
  //     phoneEl.href = 'tel:' + phone;
  //     phoneEl.textContent = phone;
  //   }
  // }

  function initYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      // initContact();
      initYear();
    });
  } else {
    // initContact();
    initYear();
  }
})();
