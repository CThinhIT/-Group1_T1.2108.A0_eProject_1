$(document).ready(function() {
    $('#btnSubmit').click(function(e) {
        e.preventDefault();
        // var pass= documentElementById('Pass').value;
        // var confirm = documentElementById('ConfirmPass').value;
        // if(confirm != pass){
        //     Swal.fire({
        //         title: 'Password and Confirm Password are different ! '
        //     }) ;
        // }
        // else{

            Swal.fire({
                title: 'Congratulations, you have registered successfully !',
                showConfirmButton: true,
                timer: 2000,
                timerProgressBar: true
              })
        // }
    });
})

