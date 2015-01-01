import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestModuleModule } from './test-module/test-module.module'; // dossier w fichier ts ms bla extension
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import this line

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component'; // bla .ts


@NgModule({
  declarations: [ //Components
    AppComponent,
    TestComponentComponent, // component f nefs directory
  ],
  imports: [ //Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    TestModuleModule,
    ReactiveFormsModule // isim likhtarti metbo3 b Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
