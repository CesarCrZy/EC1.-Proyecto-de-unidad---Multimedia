$ (document).ready (function () {
  var formInputs = $ ('input[type="email"],input[type="password"]');
  formInputs.focus (function () {
    $ (this).parent ().children ('p.formLabel').addClass ('formTop');
    $ ('div#formWrapper').addClass ('darken-bg');
    $ ('div.logo').addClass ('logo-active');
  });
  formInputs.focusout (function () {
    if ($.trim ($ (this).val ()).length == 0) {
      $ (this).parent ().children ('p.formLabel').removeClass ('formTop');
    }
    $ ('div#formWrapper').removeClass ('darken-bg');
    $ ('div.logo').removeClass ('logo-active');
  });
  $ ('p.formLabel').click (function () {
    $ (this).parent ().children ('.form-style').focus ();
  });
});

function login () {
  if (
    document.form.password.value == '1998cesar' &&
    document.form.email.value == 'mariachi@gmail.com'
  ) {
    document.form.submit ();
  } else {
    swal ('Oops', 'Usuario o Contraseña Incorrectos!', 'error');
  }
}
