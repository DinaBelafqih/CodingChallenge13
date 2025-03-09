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