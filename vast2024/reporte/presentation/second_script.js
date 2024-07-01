document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function previousSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize the first slide
    showSlide(currentSlide);

    // Add navigation buttons
    document.body.insertAdjacentHTML('beforeend', `
        <button id="prevSlide">Previous</button>
        <button id="nextSlide">Next</button>
    `);

    document.getElementById('nextSlide').addEventListener('click', nextSlide);
    document.getElementById('prevSlide').addEventListener('click', previousSlide);

    // Plotly chart for Slide 2
    const trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        mode: 'markers',
        type: 'scatter'
    };

    const data1 = [trace1];

    Plotly.newPlot('plot', data1);

    // Existing Plotly chart for Slide 3
    const trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: 'bar'
    };

    const data2 = [trace2];

    Plotly.newPlot('existingPlot', data2);
});

