import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

interface HomeData {
    typedElement: string[];
    introduction: string;
    resumeLink: string;
}

declare var Typed: {
    new(selector: string, options: {
        stringsElement: string;
        typeSpeed: number;
        backDelay: number;
        loop: boolean;
    }): void;
};

declare var particlesJS: {
    load: (elementId: string) => void;
};

declare var data: {
    Home: HomeData;
};

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NgbTooltipModule
    ]
})
export class HomeComponent implements OnInit, AfterViewInit {
    public homeData: HomeData = data['Home'];

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        changeDetectorRef.detach();
    }

    ngOnInit(): void {
        try {
            particlesJS.load('particles-js');
            this.changeDetectorRef.detectChanges();
        } catch (error) {
            console.error('Failed to load particles:', error);
        }
    }

    ngAfterViewInit(): void {
        try {
            new Typed("#element", {
                stringsElement: '#typed-strings',
                typeSpeed: 100,
                backDelay: 3000,
                loop: true
            });
        } catch (error) {
            console.error('Failed to initialize Typed:', error);
        }
    }
}