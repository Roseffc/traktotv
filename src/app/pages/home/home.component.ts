import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listMenu:any = [
    {title: 'Material didático',img: 'assets/images/ic_materialdidatico.svg', dash:'bg-blue' },
    {title: 'Quiz',img: 'assets/images/ic_materialdidatico2.svg', dash:'bg-green'},
    {title: 'Desenho',img: 'assets/images/ic_materialdidatico3.svg', dash:'bg-purple'},
    {title: 'Youtube',img: 'assets/images/ic_materialdidatico4.svg', dash:'bg-danger'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
