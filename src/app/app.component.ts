import { AfterViewInit, Component, OnInit } from '@angular/core';
import { loadExternalResource } from './loadExternalResource';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit, OnInit {
    public readonly title = 'NOHR (nohr-neuralreef)\'s secagi modules';

    constructor(private swUpdate: SwUpdate) {}

    ngOnInit(): void {
        // Load animate.css first, then initialize other resources
        loadExternalResource('assets/css/animate.min.css')
            .then(() => {
                this.setupServiceWorker();
                this.setupCanonicalLink();
                this.logApplicationInfo();
            })
            .catch(error => console.error('Failed to load animate.css:', error));
    }

    private setupServiceWorker(): void {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.versionUpdates
                .pipe(
                    filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
                )
                .subscribe(() => {
                    if (confirm('New version available. Load new version?')) {
                        window.location.reload();
                    }
                });
        }
    }

    private setupCanonicalLink(): void {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', document.URL);
        document.head.appendChild(link);
    }

    private logApplicationInfo(): void {
        console.log(`%c${this.title}`, 'color:#F56540; font-size:27px');
        console.log('%chttps://github.com/nohr-neuralreef/nohr-neuralreef.github.io', 
                   'font-size:17px');
    }

    ngAfterViewInit(): void {
        // Add animated class to splash screen elements
        const loader = document.getElementById('loader');
        const splash = document.getElementById('splash');
        const rightSection = document.getElementById('section-right');
        const leftSection = document.getElementById('section-left');

        if (loader && splash && rightSection && leftSection) {
            loader.classList.add('animated');
            splash.classList.add('animated');
            rightSection.classList.add('animated');
            leftSection.classList.add('animated');
       // Wait for animations to complete
       setTimeout(() => {
        // Remove splash first
        splash.remove();
        
        // Then transition the sections
        rightSection.style.transform = 'translateX(100%)';
        leftSection.style.transform = 'translateX(-100%)';
        
        // Finally remove the loader after transitions complete
        setTimeout(() => {
            loader.remove();
        }, 800); // Match the transition timing in CSS (.8s)
            }, 2000); // Show splash animation for 2 seconds
        }
    }
}
