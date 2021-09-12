import { createAction,props } from "@ngrx/store";



export const login = createAction(
    '[Login Page] Login',
    props<{ username: string; password: string }>()
  );

/*
La createAction función devuelve una función que, cuando 
se llama, devuelve un objeto con la forma de  Action interface. 
El props método se utiliza para definir cualquier
 metadato adicional necesario para el manejo de la acción
login-page.component.ts
 En este caso, el usuario hizo clic en un botón de inicio de sesión de la página de inicio de sesión para intentar
  autenticarse con un nombre de usuario y contraseña.
onSubmit(username: string, password: string) {
  store.dispatch(login({ username: username, password: password }));
}
El login creador de la acción recibe un objeto de 
usernamey password y devuelve un objeto JavaScript 
simple con una type propiedad de [Login Page] Login, 
con usernamey passwordcomo propiedades adicionales.
*/