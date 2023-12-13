import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenubarModule } from "primeng/menubar";
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
  
      MenubarModule
    ],
    providers: [],
    exports:[HeaderComponent]
  })
  export class ComponentsModule { }