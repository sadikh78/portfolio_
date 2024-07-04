var typed = new Typed(".text", {
    strings: ["Aspiring Web Designer", "Aspiring Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
    progressBar.addEventListener('click', () => {
        const percentage = progressBar.querySelector('.percentage');


        progressBars.forEach(pb => {
            const pbPercentage = pb.querySelector('.percentage');
            if (pbPercentage !== percentage) {
                pbPercentage.classList.remove('show');
            }
        });


        percentage.classList.toggle('show');
    });
});
