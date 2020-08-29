
import { Component, OnInit, OnDestroy } from '@angular/core';
import { JsonApiService } from '../../services/JsonApiService.service';
import { User } from '../../model/user'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffList implements OnInit, OnDestroy {

  contactoeditar: null;
  contacto: null;
  data: Subscription=null;
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

  //variable que almacena errores
  errorMessage: string = 'default'

  // encontrar solo empleados
  findEmployer = (employer: User): boolean => employer.roles.admin === false;

  //traer usuarios
  receiveUsers() {
    return this.json.getUser().subscribe((data: User[]) => {
      
      this.users = data.filter(this.findEmployer)
    }, err => {
        switch (err.status) {
          case 401: this.errorMessage = 'no hay cabecera de autenticación'
            break;
          case 403: this.errorMessage = 'no es admin'
            break;
          default: this.errorMessage = 'se produjo un error, intente de nuevo'
            break;
        }
      })
  }

  //eliminar un usuario
  lessUser(idUser): void {
    this.json.deleteUser(idUser).subscribe((response: any) => {
      this.users = this.users.filter(e => e.id !== idUser)
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

  constructor(private json: JsonApiService) { }

  ngOnInit(): void {
    this.json.refreshList$.subscribe(() => {
        this.receiveUsers();
        console.log('ngOnInit Subscribe!')
      });
    this.data = this.receiveUsers()
  }

  onEditar(cont) {
    this.contactoeditar = cont
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
    this.data.unsubscribe();
  }
}
