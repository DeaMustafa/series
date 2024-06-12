// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><svg class="progress-ring" width="80" height="80"><circle class="progress-ring__circle-background" r="35" cx="40" cy="40"></circle><circle class="progress-ring__circle" r="35" cx="40" cy="40"></circle></svg></span>';
        },
    },
});
