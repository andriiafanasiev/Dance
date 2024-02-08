document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.burger-menu').addEventListener('click', function(){
        this.classList.toggle('active');
        document.querySelector('.header__nav').classList.toggle('open');
    })
    const submitButton = document.querySelector('.submit-button');
    const emailInput = document.getElementById('emailInput');

        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            alert('We send you information by mail: ' + email);
        } else {
            alert('Please enter a valid email address.');
        }
    
        });    
});

