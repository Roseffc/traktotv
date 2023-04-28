import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-conteudos',
  templateUrl: './card-conteudos.component.html',
  styleUrls: ['./card-conteudos.component.scss']
})
export class CardConteudosComponent implements OnInit {

  @Input() documents:any = {}

  constructor() { }

  ngOnInit() {
  }

}
