document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-requirement-form');
    const input = document.getElementById('requirement-input');
    const requirementsList = document.getElementById('requirements-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const requirementText = input.value.trim();

        if (requirementText !== '') {
            addRequirement(requirementText);
            input.value = '';
        }
    });

    function addRequirement(text) {
        const requirementItem = document.createElement('div');
        requirementItem.classList.add('requirement');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = text;

        requirementItem.appendChild(checkbox);
        requirementItem.appendChild(label);

        requirementsList.appendChild(requirementItem);
    }
});
