const checkBtn=document.getElementById("check-btn");
const userInput=document.getElementById("user-input");
const resultDiv = document.getElementById("results-div");
const clearBtn=document.getElementById("clear-btn");

const checkNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)

  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultDiv.appendChild(pTag);
};

checkBtn.addEventListener('click',()=>{
  checkNumber(userInput.value)
  userInput.value='';
})

clearBtn.addEventListener('click',()=>{
  resultDiv.textContent='';
})