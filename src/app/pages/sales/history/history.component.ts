import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  @Input() data!:any[];
  cantTotal!:number;
  ventaTotal:number=0;

  ngOnInit(){
    setTimeout(()=>{
      this.money();
    },500);
  }

  money(){
    const cuantityArray:number[]= this.data.map(sale=>+sale.cantidad);
    this.cantTotal = cuantityArray.reduce((a,b)=>a+b,0);
    
    const price:number[] = this.data.map(sale=>+sale.precio);
    
    for (let i = 0; i < this.data.length; i++) {
      this.ventaTotal= this.ventaTotal+(price[i]*cuantityArray[i])
      console.log(this.ventaTotal);
    }
    
  }
}
