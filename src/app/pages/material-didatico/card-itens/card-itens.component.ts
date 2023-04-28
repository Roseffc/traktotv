import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-itens',
  templateUrl: './card-itens.component.html',
  styleUrls: ['./card-itens.component.scss']
})
export class CardItensComponent implements OnInit {

  @Input() document:any = {};

  constructor() { }

  ngOnInit() {
  }

}
