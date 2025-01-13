const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please insert valid height ${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please insert valid weight ${weight}`;
} else {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //show the result
    let bmiCategory = '';

        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = 'Normal Range';
        } else {
            bmiCategory = 'Overweight';
        }

        results.innerHTML = `<span>${bmi}</span><br><strong>Weight Category:</strong> ${bmiCategory}`;
}
});