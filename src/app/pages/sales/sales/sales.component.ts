import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  @Input() data!:any[];

  formatDate(fecha: Date){
    return (new Date(fecha)).toISOString().substring(0,10);
  }
}
