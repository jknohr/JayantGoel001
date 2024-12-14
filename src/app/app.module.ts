import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { environment } from "../environments/environment";
import { AppConfig } from './app.config';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerImmediately'
        })
    ],
    providers: [
        {
            provide: 'APP_CONFIG',
            useValue: AppConfig    
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }