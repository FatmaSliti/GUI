// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('kt_modal_update_email_form');

//     form.addEventListener('submit', async (event) => {
//         event.preventDefault();

//         const formData = new FormData(event.target);
//         const jsonData = {};

//         // Iterate over form elements and collect their values
//         formData.forEach((value, key) => {
//             jsonData[key] = value;
//         });

//         try {
//             const response = await fetch('http://127.0.0.1:8000/submit-form', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(jsonData)
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to submit form');
//             }

//             alert('Form submitted successfully!');
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Failed to submit form');
//         }
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kt_modal_update_email_form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const jsonData = {};

        // Iterate over form elements and collect their values
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        try {
            const response = await fetch('http://127.0.0.1:8000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            alert('Form submitted successfully!');

            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit form');
        }
    });
});
