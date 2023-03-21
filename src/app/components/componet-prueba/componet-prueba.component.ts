import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-componet-prueba',
  templateUrl: './componet-prueba.component.html',
  styleUrls: ['./componet-prueba.component.css']
})
export class ComponetPruebaComponent implements OnInit {

  @Input() titulo : string | undefined;


  constructor() { }

  ngOnInit(): void {

  }

}
