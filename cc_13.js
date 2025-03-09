// Task 2 - Employee Cards Dynamic Addition
function addEmployeeCard(name, position) {
    // main employee card container
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card'); // class for style

    const heading = document.createElement('h3'); // name as heading
    heading.textContent = name;

    const paragraph = document.createElement('h3'); // position is a paragragh
    paragraph.textContent = position;