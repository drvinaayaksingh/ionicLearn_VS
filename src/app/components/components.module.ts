import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { LoadingComponent} from './loading/loading.component';
import { MessagesComponent} from './messages/messages.component';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ],
  declarations: [
  
    CoursesCardListComponent,LoadingComponent, MessagesComponent
  ],
  exports: [
   
    CoursesCardListComponent,LoadingComponent, MessagesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentsModule {}
