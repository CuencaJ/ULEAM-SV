import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.formReg.value)
    .then(response => {console.log(response);
    alert("Registro Exitoso");
    this.router.navigate(['/index'])})
    .catch(error => console.log(error));

  }
  validarFormulario(event: Event) 
  {
    event.preventDefault();

    const nombre = (<HTMLInputElement>document.getElementById('nombres_apellidos')).value;
    const telefono = (<HTMLInputElement>document.getElementById('telef')).value;
    const facultad= (<HTMLInputElement>document.getElementById('select')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    const confirma = (<HTMLInputElement>document.getElementById('confirma_contra')).value;

    const nombreError = document.querySelector('.nombre .warnings')!;
    const telefonoError = document.querySelector('.telefono .warnings')!;
    const facultadError = document.querySelector('.select .warnings')!;
    const emailError = document.querySelector('.email .warnings')!;
    const passwordError = document.querySelector('.password .warnings')!;
    const confirmaError = document.querySelector('.conf_contra .warnings')!;

    // Validar el nombre
    if (!nombre) {
      nombreError.innerHTML = 'Nombres no válidos';
    } else {
      nombreError.innerHTML = "";
    }
    
    if (!telefono) {
      telefonoError.innerHTML = 'Telefono no válido';
    } else {
      telefonoError.innerHTML = ' ';
    }

    if (facultad === '0' ) {
      facultadError.innerHTML = '*Seleccione la Facultad';
    } else {
      facultadError.innerHTML = ' ';
    }
    
  // Validar el correo electrónico
  if (!email) {
    emailError.innerHTML = 'Correo no válido';
  } else if (!this.validarEmail(email)) {
    emailError.innerHTML = 'Correo no válido';
  } else {
    emailError.innerHTML = ' ';
  }
  
  // Validar la contraseña
    if (!password) {
      passwordError.innerHTML = 'Contraseña no válida';
    } else {
      passwordError.innerHTML = ' ';
    }

    // Validar la repetición de contraseña
    if (!confirma) {
      confirmaError.innerHTML = 'Repita la contraseña';
    } else if (password !== confirma) {
      confirmaError.innerHTML = 'Las contraseñas no coinciden';
    } else {
      confirmaError.innerHTML = ' ';
    }


    if (nombre && telefono && facultad && email && password && confirma &&
   this.validarEmail(email)
    ) {
      alert("Registro Exitoso");
      this.router.navigateByUrl('/index');
    }
  }

  validarEmail(email: string): boolean {
    // Expresión regular para validar el formato de un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

    
}
