import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { ActivatedRoute, RouterModule, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsService } from 'src/app/services/products.service';

describe('ProductsListComponent', () => {
//   let component: ProductsListComponent;
//   let fixture: ComponentFixture<ProductsListComponent>;
// let activatedRoute
//   beforeEach(async(() => {
//     // const route= ProductsService
//     // const fakeRoute = {
//     //   snapshot: {
//     //     routeConfig: {
//     //       path: 'inventario',
//     //     },
//     //   } as Partial<ActivatedRouteSnapshot>,
//     // } as ActivatedRoute;

//     // component = new ProductsListComponent(route,fakeRoute);
//     // component.ngOnInit();
//     TestBed.configureTestingModule({
//       imports:[
//         HttpClientTestingModule,
//         RouterTestingModule.withRoutes([])
//     ],
//       declarations: [ ProductsListComponent ],
//       providers:[
//         ProductsService,
//         {
//             provide: ActivatedRoute,
//             useValue: {
//               snapshot: {
//                 routeConfig: {
//                     path: 'inventario',
//                 },

//               }
//             }
//           }
//       ]
//     })
//     .compileComponents().then(() => {
//         fixture = TestBed.createComponent(ProductsListComponent);
//         component = fixture.debugElement.componentInstance;
//         activatedRoute = TestBed.get(ActivatedRoute);
//         fixture.detectChanges();
//       });
//   }));
//   it('espera que devuleva la ruta inventario', async () => {
//     expect(activatedRoute.snapshot.routeConfig.path).toEqual('inventario');
//  });
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductsListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
});
