
const btnAddSub = document.querySelector('#add-btn')
const inputWrapper = document.querySelector('.input-wrapper')
btnAddSub.addEventListener("click", addNewSub)
function addNewSub() {
    const newForm = document.createElement('div')
    newForm.classList.add('section')
    newForm.classList.add('input-box-field')

    newForm.innerHTML = `
        <div class="input-box-contents">
            <div class="class-name-container">
                <input class="text-field class-name" type="text">
            </div>

            <div class="number-of-units-conainter">
                <input class="text-field number-of-units" type="number">
            </div>

            <div class="grades-obtained-container">
                <input class="text-field grades-obtained" type="number">
            </div>

            <div class="column-container-4">
                <span class="material-symbols-outlined delete-but">
                    delete
                </span>
            </div>
        </div>
    `
    console.log(newForm)
    inputWrapper.appendChild(newForm)
}



document.addEventListener("click", removeSub)
function removeSub( event ) {
    if (event.target.classList.contains('delete-but')) {
        // Get the parent form element and remove it
        const formToRemove = event.target.closest('.input-box-field');
        if (formToRemove) {
            formToRemove.remove();
        }
    }
}


const btnReset = document.querySelector('.reset-btn')
btnReset.addEventListener("click", reset)
function reset() {
    const selectFields = document.querySelectorAll('.fields')

    selectFields.forEach( fields => {
        fields.value = ''
        gpa.innerHTML = `GWA : 0`
        totalUnitHTML.innerHTML = `Total Number of Units: 0`
    });
}

const btnCompute = document.querySelector('.compute-btn')
btnCompute.addEventListener("click", compute)
let gpa = document.getElementById('gwa-value')
let totalUnitHTML = document.getElementById('units-total')
function compute() {
    const units = document.getElementsByClassName('unit-value')
    const listOfUnits = []
    let totalUnits = 0

    for(let i = 0; i < units.length; i++) {
        listOfUnits.push(parseFloat(units[i].value))
    }

    listOfUnits.forEach((e) => {
        totalUnits += e
    });

    
    totalUnitHTML.innerHTML = `Total Number of Units: ${totalUnits}`
    

    const grades = document.getElementsByClassName('grade-value')
    const listOfGrades = []
    let gradeTotal = 0
    let finalGPA = 0

    for(let i = 0; i < grades.length; i++) {
        listOfGrades.push(parseFloat(grades[i].value))
    }

    for(let i = 0; i < grades.length; i++) {
        gradeTotal += listOfUnits[i] * listOfGrades[i]  
    }
    
    finalGPA = gradeTotal / totalUnits
    gpa.innerHTML = `GWA : ${finalGPA.toPrecision(5)}`
}
