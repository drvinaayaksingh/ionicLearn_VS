import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
// import { ComponentsModule } from '../components/components.module';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
   // ComponentsModule
  ],
  declarations: [TabsPage],
  schemas: [ ]
})
export class TabsPageModule {}
