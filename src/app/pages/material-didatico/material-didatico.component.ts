import { Component, OnInit } from '@angular/core';
import { TraktoService } from 'src/app/services/trakto.service';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.scss']
})
export class MaterialDidaticoComponent implements OnInit {

  documents = [];

  constructor(private traktoService: TraktoService) { }

  ngOnInit() {
    this.getDocuments()
  }

  getDocuments(){
    this.traktoService.getDocument()
      .subscribe({
        next: (result: any) => {
          this.documents = result.data;
         console.log(result)
        },
        error: (error) => {
          console.log(error);
        },
      });
  }


}
