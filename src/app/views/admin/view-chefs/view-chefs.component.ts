import { Component, OnInit } from '@angular/core';
  // import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-chefs',
  templateUrl: './view-chefs.component.html',
  styleUrls: ['./view-chefs.component.scss']
})
export class ViewChefsComponent implements OnInit {


datoHijo:number =444;
 constructor(){

 }
  // constructor(private route: ActivatedRoute) {
  //   console.log(route.snapshot.params['id'])
  // }
  ngOnInit(): void {
  }
  funcambiar(e){
    console.log(e)
    this.datoHijo=e;
  }

}
