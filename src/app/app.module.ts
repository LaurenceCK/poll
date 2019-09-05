import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ArrayComponent } from './array/array.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


@NgModule({
  imports:      [ 
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase,'poll'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    DragDropModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule
   ],
  declarations: [ AppComponent, HelloComponent, ArrayComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
