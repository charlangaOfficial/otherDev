var user = firebase.auth().currentUser;

if (user) {
    $('header').text('Usuario: ' + user.email);
} else {
    $('header').html('<a href="login.html" title="Click para loguearse">Login</a>');
}