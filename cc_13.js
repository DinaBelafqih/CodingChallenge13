// Task 2 - Employee Cards Dynamic Addition
function addEmployeeCard(name, position) {
    // main employee card container
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card'); // class for style

    const heading = document.createElement('h3'); // name as heading
    heading.textContent = name;

    const paragraph = document.createElement('h3'); // position is a paragragh
    paragraph.textContent = position;

    const removeButton = document.createElement('button'); // making remove button
    removeButton.textContent = 'Remove';

    const editButton = document.createElement('button'); // makeing edit button - task 5
    editButton.textContent = 'Edit';

    // appending elements to the card
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);

    // appending card to employee container
    document.getElementById('employeeContainer').appendChild(card);

    // remove functionality
    removeButton.addEventListener('click', function(event) {
        // Task 4 - Employee Card Removal with Event Bubbling
        console.log('Remove button has been clicked');
        event.stopPropagation();
        card.remove();
    });

     // Task 5 - Inline Editing for Employee Cards
     editButton.addEventListener('click', function() {
        const nameInput = document.createElement('input');
        nameInput.value = heading.textContent;

        const positionInput = document.createElement('input');
        positionInput.value = paragraph.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        card.appendChild(positionInput);

        // appending new functions
        card.innerHTML = '';
        card.appendChild(nameInput);
        card.appendChild(position);
        card.appendChild(saveButton);
        card.appendChild(removeButton);

        // save button listener
        saveButton.addEventListener('click', function() {
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value;

            card.innerHTML = '';
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton);
            card.appendChild(removeButton);
        }); // event listener for save button and inner text appending
    });
}

// Test Case- Task 2

addEmployeeCard('Samantha Jones', 'Data Analyst');
addEmployeeCard('Talia Lopez', 'Marketing Manager');
addEmployeeCard('Jude Agrebi', 'Software Engineer');