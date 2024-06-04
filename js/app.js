document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btn');
    const audio = document.getElementById('audio');
    const extraContent = document.getElementById('extra-content');

    btn.addEventListener('click', function() {
        audio.play();
        extraContent.style.display = 'block';
        btn.style.display = 'none';
    });
});
