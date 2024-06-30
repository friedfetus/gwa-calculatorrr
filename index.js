
const btnAddSub = document.querySelector('.add-but')
btnAddSub.addEventListener("click", addNewSub)
function addNewSub() {
    const newForm = document.createElement('form')
    newForm.classList.add('input-row')

    const newFields = `
        <div class="input" >
            <div class="input-container">
                <input type="text" name="subject" class="fields text-field">
                <input type="number" min="1" max="5" name="unit" class="fields unit-value num-field">
                <input type="number" name="grade" class="fields grade-value num-field">
                <button class="del-but">X</button>
            </div>
        </div>
    `
    newForm.innerHTML = newFields
    document.querySelector('.input-row').appendChild(newForm)
}

document.addEventListener("click", removeSub)
function removeSub( event ) {
    if (event.target.classList.contains('del-but')) {
        // Get the parent form element and remove it
        const formToRemove = event.target.closest('.input');
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
