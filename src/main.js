const $ = (id) => document.getElementById(id);

$('menu-list').addEventListener('change', function(e) {
    htmx.ajax('GET', this.value, {
        target: '#main-section',
        swap: 'innerHTML'
    });
});