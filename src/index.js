const resetButton = document.getElementById('reset');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const form = document.querySelector('form');

let tipPercentage = 0;

const handleInput = (e) => {
  if (parseInt(e.target.value) < 0) {
    e.target.value = 0;
  }

  if (e.target.value === '0') {
    document.querySelector(`.input-error.${e.target.id}`).style.display =
      'block';
    e.target.style.outlineColor = 'hsl(13, 70%, 61%)';
  } else {
    document.querySelector(`.input-error.${e.target.id}`).style.display =
      'none';
    e.target.style.outlineColor = 'hsl(172, 67%, 45%)';
  }
};

const displayResults = () => {
  if (amount.value && people.value && people.value !== '0') {
    tipAmountPerPerson.textContent = (
      (parseFloat(amount.value) * tipPercentage) /
      100 /
      parseInt(people.value)
    ).toFixed(2);
    totalPerPerson.textContent = (
      (parseFloat(amount.value) * (1 + tipPercentage / 100)) /
      parseInt(people.value)
    ).toFixed(2);
  }
}

people.addEventListener('input', (e) => handleInput(e));

customTip.addEventListener('focus', () => {
  if (customTip.value) {
    radioButtons.forEach((radio) => (radio.checked = false));
    customTip.style.background = 'hsl(172, 67%, 45%)';
    tipPercentage = parseInt(customTip.value);
    displayResults()
  }
})

customTip.addEventListener('input', (e) => {
  if (parseInt(e.target.value) >= 0) {
    radioButtons.forEach((radio) => (radio.checked = false));
    e.target.style.background = 'hsl(172, 67%, 45%)';
    tipPercentage = parseInt(e.target.value);
  } else {
    e.target.style.background = 'hsl(189, 41%, 97%)';
  }
});

radioButtons.forEach(radio => {
  radio.addEventListener('input', e => {
    tipPercentage = parseInt(e.target.id);
    custom
    customTip.style.background = 'hsl(189, 41%, 97%)';
  })
})

form.addEventListener('input', () => {
  resetButton.disabled = false;
  displayResults()
});

resetButton.addEventListener('click', () => {
  setTimeout(() => {
    resetButton.disabled = true;
    customTip.style.background = 'hsl(189, 41%, 97%)';
    tipAmountPerPerson.textContent = '0.00';
    totalPerPerson.textContent = '0.00';
  }, 10);
});
