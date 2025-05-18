if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    
    const $ = (id) => document.getElementById(id);
const config_view = $('configuration-container');

// Use event delegation for all dynamic elements
document.addEventListener('click', function(e) {
  // Handle menu buttons
  const menuBtn = e.target.closest('.menu-btn');
  if (menuBtn) {
    e.preventDefault();
    const content = menuBtn.dataset.content || `${menuBtn.textContent} Clicked`;
    config_view.textContent = content;
  }
  
  // Handle selectable elements
  const selectable = e.target.closest('.selectable');
  if (selectable) {
    e.preventDefault();
    selectable.classList.toggle('selected-element');
  }
});

// Initialize menu buttons with data attributes in your HTML
// Example HTML:
// <button class="menu-btn" data-content="Template Content">Template</button>
// <button class="menu-btn" data-content="Font Content">Font</button>

}