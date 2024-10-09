
// Add
const totalUnitHtml = document.querySelector('#html-units')
const gpaHtml = document.querySelector('#html-gwa')
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

// remove
document.addEventListener("click", (event) => {
    if(event.target.classList.contains('delete-but')) {
        const formToRemove = event.target.closest('.input-box-field')
        if (formToRemove) {
            formToRemove.remove()
        }
    } 
})

// reset 
const resetBtn = document.querySelector('#reset-btn')
resetBtn.addEventListener("click", () => {
    const textField = document.querySelectorAll('.text-field')

    console.log(textField)
    textField.forEach(fields => {
        fields.value = ''
        totalUnitHtml.innerHTML = 'Total Number of Units: 0'
        gpaHtml.innerHTML = 'GWA: 0'
    });
})

// compute
const computeBtn = document.querySelector('#compute-btn')
computeBtn.addEventListener("click", () => {
    
    let totalNumberOfUnits = 0
    let productTotal = 0
    const numberOfUnits = document.querySelectorAll('.number-of-units')
    const gradesObtained = document.querySelectorAll('.grades-obtained')

    let productArray = []
    let numberOfUnitsArray = Array.from(numberOfUnits)
    let gradesObtainedArray = Array.from(gradesObtained)
    
    for(let i = 0; i < numberOfUnitsArray.length; i++) {
        productArray[i] = numberOfUnitsArray[i].value * gradesObtainedArray[i].value  
        productTotal += productArray[i]
    }

    numberOfUnits.forEach(unit => {
        totalNumberOfUnits += Number(unit.value)
    })
    totalUnitHtml.innerHTML = `Total Number of Units: ${totalNumberOfUnits}`

    let finalGWA = productTotal / totalNumberOfUnits

    gpaHtml.innerHTML = `GWA: ${finalGWA.toFixed(4)}`
})
