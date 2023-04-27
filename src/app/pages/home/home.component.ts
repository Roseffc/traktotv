import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listMenu = [
    {title: 'Material didático',img: 'assets/images/ic_materialdidatico.svg'},
    {title: 'Quiz',img: 'assets/images/ic_materialdidatico2.svg'},
    {title: 'Desenho',img: 'assets/images/ic_materialdidatico3.svg'},
    {title: 'Youtube',img: 'assets/images/ic_materialdidatico4.svg'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
