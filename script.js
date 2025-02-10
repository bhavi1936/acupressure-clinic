// Store the patient visits in an array
const patientVisits = [];

// Handle patient form submission
document.getElementById('patientForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const patientAge = document.getElementById('patientAge').value;
    const patientNumber = document.getElementById('patientNumber').value;

    if (patientName && patientAge && patientNumber) {
        // Save patient data
        alert('Patient added successfully');
        // Clear the form
        document.getElementById('patientForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle treatment form submission
document.getElementById('treatmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const treatmentDate = document.getElementById('treatmentDate').value;
    const therapiesSuggested = document.getElementById('therapiesSuggested').value;

    const patientName = document.getElementById('patientName').value; // Assuming the patient name from earlier form is used here

    if (treatmentDate && therapiesSuggested && patientName) {
        // Add treatment visit to the table
        const newVisit = {
            patientName,
            treatmentDate,
            therapiesSuggested
        };

        patientVisits.push(newVisit);
        updateTreatmentTable();
        alert('Treatment visit added successfully');

        // Clear the treatment form
        document.getElementById('treatmentForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Update the treatment table
function updateTreatmentTable() {
    const tableBody = document.querySelector('#treatmentTable tbody');
    tableBody.innerHTML = '';

    patientVisits.forEach(visit => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${visit.patientName}</td>
            <td>${visit.treatmentDate}</td>
            <td>${visit.therapiesSuggested}</td>
        `;
        tableBody.appendChild(row);
    });
}
