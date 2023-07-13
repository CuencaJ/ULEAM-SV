import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  formLog: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLog = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }
  
  onSubmit() {
    this.userService.login(this.formLog.value)
    .then(response => {console.log(response);
      alert("Login Exitoso");
    this.router.navigate(['inicio'])})
    .catch(error =>{ console.log( error)
    alert("Ocurrió un error. Por favor, verifique sus credenciales y vuelva a intentar. De no estar registrado, Registrese.");
    })
  }

  validarFormulario(event: Event)
  {
    event.preventDefault();

    const email =  (<HTMLInputElement>document.getElementById('correo_index')).value;
    const password = (<HTMLInputElement>document.getElementById('clave_index')).value;
    const emailError = document.querySelector('.correo_ins .warnings')!;
    const passwordError = document.querySelector('.contraseña_ins .warnings')!;

    //Email
    if (!email)
    {
      emailError.innerHTML = 'Correo Obligatorio';
    }
    else if (!this.validarEmail(email))
    {
      emailError.innerHTML = 'Correo no valido';
    }
    else
    {
      emailError.innerHTML = '';
    }
    //Password
    if (!password)
    {
      passwordError.innerHTML = 'Contraseña Obligatoria';
    }
    else
    {
      passwordError.innerHTML = '';
    }
  }
    //Validacion de los caracteres del email
    validarEmail(email: string): boolean 
    {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
}
  



