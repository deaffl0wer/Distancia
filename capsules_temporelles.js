document.addEventListener("DOMContentLoaded", () => {
  const letters = Array.from(document.querySelectorAll('.letter'));
  const today = new Date().toISOString().split('T')[0];
  const container = document.getElementById('letters-container');
  const messageBox = document.getElementById('message');

  // Trier les lettres du plus récent au plus ancien
  letters.sort((a, b) => {
    return new Date(a.dataset.date) - new Date(b.dataset.date);
  });

  letters.forEach(letter => container.appendChild(letter));

  letters.forEach(letter => {
    const openDate = letter.dataset.date;
    const title = letter.dataset.title;
    const file = letter.dataset.file;
    const letterDate = new Date(openDate);
    const dateStr = letterDate.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

    letter.textContent = title;

    if (today < openDate) {
      // Lettre à venir
      letter.classList.add('upcoming');
      letter.addEventListener('click', () => {
        showMessage(`📅 Cette lettre sera disponible le ${dateStr}.`);
      });
    } else {
      // Lettre accessible
      letter.classList.add('available');
      if (today === openDate) {
        letter.classList.add('today');
      }
      letter.addEventListener('click', () => {
        window.open(file, '_blank');
      });
    }
  });

    function showMessage(text) {
        const messageBox = document.getElementById('message');
        messageBox.textContent = text;
        messageBox.classList.add("show");

        // Cacher après 3 secondes
        setTimeout(() => {
            messageBox.classList.remove("show");
        }, 3000);
    }
});
