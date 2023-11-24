import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { HistoryComponent } from './history/history.component';
import { ParentComponent } from './parent/parent.component';
import { ServicesService } from 'src/app/template/services/services.service';
import { TemplateModule } from 'src/app/template/template.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SalesComponent,
    HistoryComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    HttpClientModule
  ],
  providers:[
    ServicesService
  ],
  exports:[
    ParentComponent
  ]
})
export class SalesModule { }
