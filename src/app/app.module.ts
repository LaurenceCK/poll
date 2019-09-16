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
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressComponent } from './progress/progress.component';
import { NgCircleProgressModule } from 'ng-circle-progress';




@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),

    // ngx charts
    NgxChartsModule,
    AngularFireModule.initializeApp(environment.firebase,'poll'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    DragDropModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    
   ],
  declarations: [ AppComponent, HelloComponent, ArrayComponent, ChartComponent, ProgressComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
