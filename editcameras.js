document.addEventListener('DOMContentLoaded', () => {
    // Event listener for the "Edit" button
    document.querySelectorAll('.editBtn').forEach((button) => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            const cells = row.querySelectorAll('td');

            // Populate modal fields with row data
            document.getElementById('camera_name').value = cells[0].textContent;
            document.getElementById('camera_id').value = cells[1].textContent;
            document.getElementById('camera_ip').value = cells[2].textContent;
            document.getElementById('camera_port').value = cells[3].textContent;
            document.getElementById('camera_model').value = cells[4].textContent;
            document.getElementById('soft_trigger').value = cells[5].textContent;
            document.getElementById('category').value = cells[6].textContent;
            document.getElementById('linked_lane').value = cells[7].textContent;

            // Show modal
            $('#kt_modal_update_email').modal('show');

            // Save button click event
            document.getElementById('saveBtn').onclick = function () {
                cells[0].textContent = document.getElementById('camera_name').value;
                cells[1].textContent = document.getElementById('camera_id').value;
                cells[2].textContent = document.getElementById('camera_ip').value;
                cells[3].textContent = document.getElementById('camera_port').value;
                cells[4].textContent = document.getElementById('camera_model').value;
                cells[5].textContent = document.getElementById('soft_trigger').value;
                cells[6].textContent = document.getElementById('category').value;
                cells[7].textContent = document.getElementById('linked_lane').value;

                // Hide modal
                $('#kt_modal_update_email').modal('hide');
            };
        });
    });
});
