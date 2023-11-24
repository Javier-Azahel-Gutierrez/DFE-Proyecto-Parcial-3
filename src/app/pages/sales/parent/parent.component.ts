import { Component } from '@angular/core';
import { ServicesService } from 'src/app/template/services/services.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  data!:any;

  constructor(private service:ServicesService){

  }
  ngOnInit(){
    this.service.getAll("sales").subscribe((res)=>{
      this.data = res;
      console.log(res);
    });
  }
}
