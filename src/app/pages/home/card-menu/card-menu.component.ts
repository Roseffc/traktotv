import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  @Input() title:string | undefined = '';
  @Input() imgSrc:string | undefined = '';

  constructor() { }

  ngOnInit() {
  }

}
