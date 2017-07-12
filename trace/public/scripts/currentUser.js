$(function() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$('nav .navbar-nav li.login').html('<a href="" title="Desloguearse" class=logout>Desloguearse</a>');
			$('footer .text-muted').html('Usuario activo: ' +  user.email);
			$('.logout').on("click", function() {
				firebase.auth().signOut().then(function() {
				  $('nav .navbar-nav li.login').html('<a href="login.html" title="Click para loguearse">Login</a>');
				  $('footer .text-muted').html('No hay un usuario activo.');
				}, function(error) {
				  console.log('ERROR: Something went wrong while trying to logout.');
				});
			});
		} else {
			$('nav .navbar-nav li.login').html('<a href="login.html" title="Loguearse">Loguearse</a>');
			$('footer .text-muted').html('No hay un usuario activo.');
		}
	});
});
