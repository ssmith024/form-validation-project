document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  //prevents form submission if validation fails

        //validation functions
        function validateName(name){
            return /^[a-zA-Z]{2,}$/.test(name);
        }

        function validateFacilitator(facilitator) {
            const validFacilitators = ['Jen', 'Behdad', 'Chris', 'Christian', 'Josh'];
            return validFacilitators.includes(facilitator);
        }

        //get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const facilitator = document.getElementById('facilitator').value;

        //perform validation
        if(
        validateName(firstName) &&
        validateName(lastName) &&
        validateFacilitator(facilitator)
    ){

    //if all fields pass validation, submit the form
    form.submit();
    } else {
        alert('Please check your inputs and try again');
    }
});
});
        
