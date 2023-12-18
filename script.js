
    
    document.addEventListener('DOMContentLoaded', function() {
      // Form validation
      const form = document.querySelector('form');

      form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('Email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('meassage').value.trim();

        if (!name || !email || !phone || !message) {
          alert('Please fill in all the fields.');
          event.preventDefault(); // Prevent form submission
        }
      });
    });
    