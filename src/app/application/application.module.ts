import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { QuoteComponent } from '../quote/quote.component';
import { FooterComponent } from '../footer/footer.component';
import { ApplicationComponent } from './application.component';
import { ContactComponent } from '../contact/contact.component';
import { VisionComponent } from '../vision/vision.component';
import { SocialComponent } from '../social/social.component';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgbTooltipModule,
        ApplicationComponent,
        HomeComponent,
        AboutComponent,
        QuoteComponent,
        FooterComponent,
        ContactComponent,
        SocialComponent,
        VisionComponent
    ],
    exports: [
        ApplicationComponent
    ]
})
export class ApplicationModule { }