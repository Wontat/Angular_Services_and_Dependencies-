import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyserviceService } from './myservice.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  declarations: [AppComponent, NewCmpComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
