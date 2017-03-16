  $(document).ready(function() {
    $('#registration_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            patient_name: {

                validators: {

                        stringLength: {
                        min: 3,
                        message:'First Name Must Be 3 Character Long'
                    },

                        notEmpty: {
                        message: 'Please insert your  name'
                    }


                }
            },
			 patient_phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'BA',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
			
			
            patient_address: {
                validators: {
                     stringLength: {
                        min: 4
                    },
                    notEmpty: {
                        message: 'Please supply your address'
                    }
                }
            }
            
            
           
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#registration_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
}); 



//another

  $(document).ready(function() {
    $('#egistration_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            doctor_name: {

                validators: {

                        stringLength: {
                        min: 3,
                        message:'First Name Must Be 3 Character Long'
                    },

                        notEmpty: {
                        message: 'Please supply your  name'
                    }


                }
            },
			 doctor_phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'BA',
                        message: 'Please supply a vaild phone number with area code'
                    }
                }
            },
			
			
            doctor_address: {
                validators: {
                     stringLength: {
                        min: 4
                    },
                    notEmpty: {
                        message: 'Please supply your address'
                    }
                }
            }
            
            
           
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#egistration_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
}); 

