// Add
const totalUnitHtml = document.querySelector('#html-units')
const gpaHtml = document.querySelector('#html-gwa')
const btnAddSub = document.querySelector('#add-btn')
const inputWrapper = document.querySelector('.input-wrapper')
const userInput = document.getElementById('user-input')
btnAddSub.addEventListener("click", addNewSub)
btnAddSub.disabled = true;

userInput.addEventListener('input', () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue) {
        btnAddSub.disabled = false;
    } else {
        btnAddSub.disabled = true;
    }
});


function addNewSub() {
    const userInputValue = userInput.value.trim();

    const newForm = document.createElement('div');
    newForm.classList.add('section');
    newForm.classList.add('input-box-field');
    newForm.innerHTML = `
        <div class="input-box-contents grid grid-cols-3 grid-flow-col p-3">
            <div class="class-name-container ml-2 mr-2">
                <p class="class-name p-2 font-poppins font-medium truncate">${userInputValue}</p>
            </div>
            <div class="number-of-units-container ml-2 mr-2">
                <input class="number-of-units w-full rounded-lg p-2 
                            focus:outline-none focus:border-blue-500 
                            border-b-4 border-r-4 border-t-2 border-l-2 border-black font-bold"
                             type="number" placeholder="${Math.floor(Math.random() * 5) + 1}">
            </div>
            <div class="grades-obtained-container ml-2 mr-2">
                <input class="grades-obtained w-full rounded-lg p-2 
                            focus:outline-none focus:border-blue-500 
                            border-b-4 border-r-4 border-t-2 border-l-2 border-black font-bold"
                             type="number" placeholder="3.00">
            </div>
            <div class="column-container-4">
                <box-icon type='solid' class="delete-but mt-2.5" name='trash'></box-icon>
            </div>
        </div>
    `;

    inputWrapper.appendChild(newForm);
    userInput.value = ''; 
    btnAddSub.disabled = true;
}



// Remove an appended sub
document.addEventListener("click", (event) => {
    if(event.target.classList.contains('delete-but')) {
        const formToRemove = event.target.closest('.input-box-field')
        if (formToRemove) {
            formToRemove.remove()
        }
    } 
})


// GWA Computation Logic
const computeBtn = document.querySelector('#compute-btn');
computeBtn.addEventListener("click", () => {
    let totalNumberOfUnits = 0;
    let productTotal = 0;

    const numberOfUnits = document.querySelectorAll('.number-of-units');
    const gradesObtained = document.querySelectorAll('.grades-obtained');

    let productArray = [];
    let numberOfUnitsArray = Array.from(numberOfUnits);
    let gradesObtainedArray = Array.from(gradesObtained);

    for (let i = 0; i < numberOfUnitsArray.length; i++) {
        const unitsValue = Number(numberOfUnitsArray[i].value);
        const gradesValue = Number(gradesObtainedArray[i].value);

        // Only calculate if both values are present
        if (unitsValue && gradesValue) {
            productArray[i] = unitsValue * gradesValue;  
            productTotal += productArray[i];
        }
    }

    numberOfUnits.forEach(unit => {
        totalNumberOfUnits += Number(unit.value);
    });

    totalUnitHtml.innerHTML = `Total Units: ${totalNumberOfUnits}`;

    // prevent NaN HAHAHAHA
    let finalGWA = totalNumberOfUnits ? (productTotal / totalNumberOfUnits) : 0;

    gpaHtml.innerHTML = `GWA: ${finalGWA.toFixed(4)}`;
});

// Reset Forms & Computation
const resetBtn = document.querySelector('#reset-btn')
resetBtn.addEventListener("click", () => {
    const numberOfUnitsFields = document.querySelectorAll('.number-of-units');
    const gradesObtainedFields = document.querySelectorAll('.grades-obtained');

    numberOfUnitsFields.forEach(field => {
        field.value = '';  
    });

    gradesObtainedFields.forEach(field => {
        field.value = '';  
    });

    totalUnitHtml.innerHTML = 'Total Units: 0';
    gpaHtml.innerHTML = 'GWA: 0';
});
