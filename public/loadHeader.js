async function loadHeader() {
  try {
      const response = await fetch('header.html');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.text();
      document.getElementById('header-container').innerHTML = data;
  } catch (error) {
      console.error('Error loading header:', error);
  }
}

// Call the function to load the header when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadHeader);
