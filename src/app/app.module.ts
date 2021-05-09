import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { MainModule } from './components/main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileFormModule } from './components/profile-form/profile-form.module';
import { SubmittedDataModule } from './components/submitted-data/submitted-data.module';
import { UserProfileModule } from './components/user-profile/user-profile.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MainModule,
    BrowserAnimationsModule,
    SubmittedDataModule,
    UserProfileModule,
    ProfileFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
