import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() bgColor: string = "";
  @Input() isButton: boolean = false;
  @Input() logoColor: string ='';


  constructor() { }

  ngOnInit() {
    console.log('teste', this.logoColor)
  }

}
