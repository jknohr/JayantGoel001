import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Add VanillaTilt type definition
declare const VanillaTilt: {
    init(elements: NodeListOf<Element> | HTMLElement[], options: {
        max: number;
        speed: number;
        startX: number;
        startY: number;
        scale: number;
    }): void;
};

interface ModuleItem {
    description: string;
    image: string;
    animationClass: string;
}

@Component({
    selector: 'app-vision',
    templateUrl: './vision.component.html',
    styleUrls: ['./vision.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NgbTooltipModule
    ]
})
export class VisionComponent implements OnInit, AfterViewInit {
    public modulesData: ModuleItem[] = [
        {
            description: 'Core System',
            image: 'core',
            animationClass: ' fadeInUp'
        },
        {
            description: 'Neural Networks',
            image: 'neural',
            animationClass: ' fadeInUp'
        },
        {
            description: 'Data Processing',
            image: 'data',
            animationClass: ' fadeInUp'
        }
    ];

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    ngAfterViewInit(): void {
        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
            const boxes = document.querySelectorAll('.box');
            if (typeof VanillaTilt !== 'undefined') {
                VanillaTilt.init(boxes, {
                    max: 25,
                    speed: 400,
                    startX: 0,
                    startY: 0,
                    scale: 1.03
                });
            }
        }
    }
}