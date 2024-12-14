import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";

interface MousePosition {
    top: string;
    left: string;
}

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./page-not-found.component.css'],
    standalone: false
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
    public position: MousePosition = {
        top: '0px',
        left: '0px'
    };

    private mouseMoveListener: (event: MouseEvent) => void;

    constructor(
        public router: Router,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        changeDetectorRef.detach();
        this.mouseMoveListener = this.handleMouseMove.bind(this);
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
        document.addEventListener('mousemove', this.mouseMoveListener);
    }

    ngOnDestroy(): void {
        document.removeEventListener('mousemove', this.mouseMoveListener);
    }

    private handleMouseMove(event: MouseEvent): void {
        this.position = {
            top: `${event.pageY}px`,
            left: `${event.pageX}px`
        };
        this.changeDetectorRef.detectChanges();
    }

    public navigateHome(): void {
        this.router.navigate(['/']);
    }
}
