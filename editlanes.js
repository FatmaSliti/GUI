document.addEventListener('DOMContentLoaded', () => {
    // Event listener for the "Edit" button
    document.querySelectorAll('.editBtn').forEach((button) => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            const cells = row.querySelectorAll('td');

            // Populate modal fields with row data
            document.getElementById('lane_name').value = cells[0].textContent;
            document.getElementById('lane_id').value = cells[1].textContent;
            document.getElementById('lane_type').value = cells[2].textContent;
            document.getElementById('early_request_timeout').value = cells[3].textContent;

            // Show modal
            $('#kt_modal_edit_lanes_row').modal('show');

            // Save button click event
            document.getElementById('saveBtn').onclick = function () {
                cells[0].textContent = document.getElementById('lane_name').value;
                cells[1].textContent = document.getElementById('lane_id').value;
                cells[2].textContent = document.getElementById('lane_type').value;
                cells[3].textContent = document.getElementById('early_request_timeout').value;

                // Hide modal
                $('#kt_modal_edit_lanes_row').modal('hide');
            };
        });
    });
});
