import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { QuoteComponent } from '../quote/quote.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ModulesComponent } from '../modules/modules.component';
import { ContactComponent } from '../contact/contact.component';
import { loadExternalResource } from "../loadExternalResource";

declare var WOW: any;

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        HomeComponent,
        AboutComponent,
        QuoteComponent,
        NavbarComponent,
        ModulesComponent,
        ContactComponent
    ]
})
export class ApplicationComponent implements OnInit {
    public checkScreenSize: boolean = screen.width >= 768;

    constructor() {}

    ngOnInit() {
        if (this.checkScreenSize) {
            loadExternalResource("assets/js/wow.min.js").then(() => {
                let wow = new WOW({
                    boxClass: 'wow', 
                    animateClass: 'animated', 
                    offset: 0
                });
                wow.init();
            }).catch(err => {
                console.error(err);
            });
        }
    }
}