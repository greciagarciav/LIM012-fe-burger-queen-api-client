
import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonApiService } from '../../JsonApiService.service';
import { User } from '../../model/user';
import { Subscription, Subject, Observable, SubscriptionLike } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffList implements OnInit, OnDestroy {

  
  // destroy$: Subject<boolean> = new Subject<boolean>()
  // .pipe(takeUntil(this.destroy$))
  users: User[];
  //modal
  showModal = false;
  toggleModal = () => {
    this.showModal = !this.showModal;
  }
  // confirmacion de eliminar 
  popoverTitle = 'Eliminar';
  popoverMessage = 'Desea eliminar este usuario?';
  confirmClicked = false;
  cancelClicked = false;


  // controladores de los input de formulario
  emailCtrl = new FormControl('');
  passwordCtrl = new FormControl('');

  //variable que almacena errores
  errorMessage: string = 'default'

  // encontrar solo empleados
  findEmployer = (employer: User): boolean => employer.roles.admin === false;

  

  //traer usuarios
  receiveUsers() {
   return this.json.getUser().subscribe((data: User[]) => {
     console.log('onsuscribe');
        this.users = data.filter(this.findEmployer)
      },
        err => {
          switch (err.status) {
            case 401:
              this.errorMessage = 'no hay cabecera de autenticación'
              break;
            case 403:
              this.errorMessage = 'no es admin'
              break;
            default:
              this.errorMessage = 'se produjo un error, intente de nuevo'
              break;
          }
        })
  }

  //agregar nuevo usuario
//   addUser(): any {
//     const newUser: object = {
//       "email": this.emailCtrl.value, "roles": { "admin": false }, "password": this.passwordCtrl.value,
//     }
//     this.json.postUser(newUser).subscribe((data: any) => {
//       // if(data.status >= 200){// this.users.push(data.body)// }
//       this.receiveUsers()
//     },
//       err => {
//         switch (err.status) {
//           case 400:
//             this.errorMessage = 'no hay no se proveen `email` o `password` o ninguno de los dos'
//             break;
//           case 401:
//             this.errorMessage = 'no hay cabecera de autenticación'
//             break;
//           case 403:
//             this.errorMessage = 'ya existe usuaria con ese `email`'
//             break;
//           default:
//             this.errorMessage = 'se produjo un error, intente de nuevo'
//             break;
//         }

//       })
//   }

  //eliminar un usuario
  lessUser(idUser): void {
    this.json.deleteUser(idUser).subscribe((response: any) => {
      this.users = this.users.filter(e => e.id !== idUser)
      //  this.users.slice(i,1)// this.receiveUsers()
      
    },
      err => {
        switch (err.status) {
          case 401:
            this.errorMessage = 'no hay cabecera de autenticación'
            break;
          case 403:
            this.errorMessage = 'ya existe usuaria con ese `email`'
            break;
          case 404:
            this.errorMessage = 'usuario no encontrado'
            break;
          default:
            this.errorMessage = 'se produjo un error, intente de nuevo'
            break;
        }

      })
  }
  data:Subscription

  constructor( private json: JsonApiService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.json.refreshList$.
    subscribe(() => {
        this.receiveUsers();
        console.log('ngOnInit Subscribe!')
    });
  this.data= this.receiveUsers()
  }
  userFormData: User;

  dataEmployee(selectedUser: User): any {
    console.log('Usuario seleccionado:', selectedUser)
    this.userFormData = selectedUser;
    console.log("Set UserFormData", this.userFormData);
    // const userId = "bPkvR8t";
    //    const userId = selectedUser.id;
    //   this.json.getUserById(userId).subscribe((data: User[]) => {
    //     console.log('data - employee', data);
  }



  ngOnDestroy(): void {

    // this.nombreSuscripcion.unsubscribe()
    // this.destroy$.next(true);
    // Unsubscribe from the subject
    // this.destroy$.unsubscribe();console.log('this.ngOnDestroy')
    console.log('ondestroy');
    this.data.unsubscribe();
    // this.receiveUsers()
  }
}
