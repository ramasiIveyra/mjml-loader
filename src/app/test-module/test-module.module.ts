import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideTestModuleComponentComponent } from './inside-test-module-component/inside-test-module-component.component'; //



@NgModule({
  declarations: [
    InsideTestModuleComponentComponent //
  ],
  imports: [
  
    CommonModule
  ],
  exports:[
    InsideTestModuleComponentComponent // export zidta
  ]
})

//export class InsideTestModuleComponent { } 
export class TestModuleModule { }
