import { Component, OnInit, AfterViewInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

interface AboutData {
    NavTabs: Array<{
        id: string;
        name: string;
        placement: string;
    }>;
    image: string;
    name: string;
    about: {
        'tech-stats': string;
        bio: string;
        'IDE, Editors & Tools': string[];
    };
    progresss: Array<Array<{
        name: string;    // Changed from progress to name
        value: number;   // Changed from progress to value
    }>>;
    roadmap: Array<{
        degree: string;
        college: string;
        duration: string;
        percentage: string;
        textAlignment: string;
        animationClass: string;
    }>;
}

declare var data: {
    About: AboutData;
};

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NgbTooltipModule
    ]
})
export class AboutComponent implements OnInit, AfterViewInit {
    public aboutData: AboutData = data['About'];
    public activeTab = 'story';
    public selector: HTMLElement | null = null;
    public activeElements: { [key: string]: HTMLElement } = {};

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        changeDetectorRef.detach();
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    ngAfterViewInit(): void {
        this.initializeTabElements();
        this.changeActiveTab(this.activeTab);
    }

    public changeActiveTab(tab: string): void {
        this.updateSelector(tab);
        this.activeTab = tab;
        this.changeDetectorRef.detectChanges();
    }

    private initializeTabElements(): void {
        for (const tab of this.aboutData.NavTabs) {
            const element = document.getElementById(`${tab.id}-tab`);
            if (element) {
                this.activeElements[tab.id] = element;
                element.addEventListener('click', (event) => event.preventDefault());
            }
        }
    }

    private updateSelector(tab: string): void {
        if (!this.selector) {
            this.selector = document.getElementById('selector');
        }
        
        if (this.selector && this.activeElements[tab]) {
            this.selector.style.width = `${this.activeElements[tab].offsetWidth}px`;
            this.selector.style.left = `${this.activeElements[tab].offsetLeft}px`;
        }
    }

    @HostListener('window:resize')
    onWindowResize(): void {
        this.updateSelector(this.activeTab);
    }
}