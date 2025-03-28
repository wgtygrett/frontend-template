import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atoms/button/button.component';
import { HintTextComponent } from './atoms/hint-text/hint-text.component';
import { LabelComponent } from './atoms/label/label.component';
import { CheckboxComponent } from './molecules/checkbox/checkbox.component';
import { DialogComponent } from './molecules/dialog/dialog.component';
import { RadioButtonComponent } from './molecules/radio-button/radio-button.component';
import { SelectComponent } from './molecules/select/select.component';
import { TableComponent } from './molecules/table/table.component';
import { TextInputComponent } from './molecules/text-input/text-input.component';
import { HeaderComponent } from './organisms/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TemplateComponent } from './pages/template/template.component';
import { SideNavComponent } from './organisms/side-nav/side-nav.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SlideRightComponent } from './animations/slide-right/slide-right.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HintTextComponent,
    LabelComponent,
    CheckboxComponent,
    DialogComponent,
    RadioButtonComponent,
    SelectComponent,
    TableComponent,
    TextInputComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    TemplateComponent,
    SideNavComponent,
    AboutMeComponent,
    SlideRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
