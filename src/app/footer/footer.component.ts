import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialComponent } from '../social/social.component';

interface DevInfo {
    name: string;
    link: string;
    image: string;
}

interface Citation {
    animationClass: string;
    icon: string;
    name: string;
}

interface FooterData {
    dev: DevInfo;
    citation: Citation;
}

declare var data: {
    Footer: FooterData;
};

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        NgbTooltipModule,
        SocialComponent
    ]
})
export class FooterComponent implements OnInit {
    public footerData: FooterData = data['Footer'];

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        changeDetectorRef.detach();
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
    }
}