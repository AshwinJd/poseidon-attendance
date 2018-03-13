import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule, MatCheckboxModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  exports: [
    NavbarComponent,
    SidenavComponent
    
  ],
  providers: [],
})
export class SharedModule { }
