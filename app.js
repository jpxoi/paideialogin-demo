const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

/* Login */
javascript:window.history.forward(history.length);
			
			
			netscapeAux = "";
			ver = navigator.appVersion; len = ver.length;
			for(var iln = 0; iln < len; iln++) if (ver.charAt(iln) == "(") break;
			netscapeAux = (ver.charAt(iln+1).toUpperCase() != "C");
			
			function keyUp(DnEvents) { 
				
				k = (netscapeAux) ? DnEvents.which : window.event.keyCode;
				if (k == 13) { 
					Validar();
				}
			}
			
			document.onkeyup = keyUp; 
			if (netscapeAux) document.captureEvents(Event.KEYDOWN|Event.KEYUP);
			
			
			var enviado=false;
			function pucpSubmit() {
				if (enviado==false) {
					enviado=true;
					return true; 
				} else {
					return false; 
				}
			}
			
			function Validar() {		 
				if(document.form.username.value == "" ) {
					alert('Debe ingresar su identificación de usuario.');
					document.form.username.focus();
				}  else if(document.form.password.value == "" ) {
					alert('Debe ingresar su contraseña.');
					document.form.password.focus();
				} else {				 
					if (pucpSubmit() == true) {
						document.form.submit();  
					}
				}
			}
			
			function ValidarEn() {		 
				if(document.form.username.value == "" ) {
					alert('You must enter your user.');
					document.form.username.focus();
				} else if(document.form.password.value == "" ) {
					alert('You must enter your password.');
					document.form.password.focus();
				} else {				 
					if (pucpSubmit() == true) {
						document.form.submit();  
					}
				}
			}