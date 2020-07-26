
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonApiService } from '../../JsonApiService.service'
import { User } from '../../model/user';
// import { Subscription, Subject } from 'rxjs';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffList implements OnInit {

  // destroy$: Subject<boolean> = new Subject<boolean>()

  users: User[];
  // employed: any = {
  //   "email": "mir@gmail.com",
  //   "roles": {
  //     "admin": false
  //   },
  //   "password": '123456'
  // }
  // nombreSuscripcion: Subscription

  // emailCtrl = new FormControl('');
  // passwordCtrl = new FormControl('');


  // form: FormGroup;

  // buildForm(){
  //   this.form = new FormGroup({
  //     email: new FormControl(''),
  //     password: new FormControl(''),
  //   })
  // }

  // send(event: Event) {
  //   event.preventDefault();
  //   const value = this.form.value;
  //   console.log(value);
  // }

  constructor(
    private json: JsonApiService,
    public route: ActivatedRoute,
    private router: Router
  ) {
    // this.buildForm
  }
  //variable que almacena errores
  errorMessage: string = 'default'

  // encontrar solo empleados
  findEmployer = (employer: User): boolean => employer.roles.admin === false;

  //traer usuarios
  receiveUsers() {
    this.json.getUser()
      // .pipe(takeUntil(this.destroy$))
      .subscribe((data: User[]) => { //se le da el tipo de dato que va  a recibir
        this.users = data.filter(this.findEmployer)
        console.log(data)
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

  // addUser(): any {
  //   console.log(this.emailCtrl.value);
  //   const newUser: object = {
  //     "email": this.emailCtrl.value,
  //     "roles": {
  //       "admin": false
  //     },
  //     "password": this.passwordCtrl.value
  //   }
  //   this.json.postUser(newUser).subscribe((data: any) => {
  //     // console.log(data.statusText);
  //     console.log('data', data);
  //     if(data.status >= 200){
  //     console.log(data.status);
  //     this.users.push(data.body)
  //   }},
  //     err => {
  //       switch (err.status) {
  //         case 400:
  //           this.errorMessage = 'no hay no se proveen `email` o `password` o ninguno de los dos'
  //           break;
  //         case 401:
  //           this.errorMessage = 'no hay cabecera de autenticación'
  //           break;
  //         case 403:
  //           this.errorMessage = 'ya existe usuaria con ese `email`'
  //           break;
  //         default:
  //           this.errorMessage = 'se produjo un error, intente de nuevo'
  //           break;
  //       }

  //     })
  //   // }
  // }


  //agregar nuevo usuario


  ngOnInit(): void {

    this.json.refreshList$.
    subscribe(() => {
        this.receiveUsers();
        console.log('ngOnInit Subscribe!')
    });

    this.receiveUsers()
    // let id = +this.route.snapshot.paramMap.get('id');
    // console.log(id);

    // lessEmployed(): void {
    //   this.json.deleteEmployed('', this.id).subscribe((response: any) => {
    //     console.log(this.id);
    //   });
    //   this.dataLocal = this.dataLocal.filter(e => e.id !== this.id)

  }

  //modal

  showModal = false;
  toggleModal = () => {
    this.showModal = !this.showModal;
  }

  // ngOnDestroy(): void {

  //   // this.nombreSuscripcion.unsubscribe()
  //   this.destroy$.next(true);
  //   // Unsubscribe from the subject
  //   this.destroy$.unsubscribe();console.log('this.ngOnDestroy')
  // }
}
