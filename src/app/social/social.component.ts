import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

interface SocialLink {
    name: string;
    link: string;
    class: string;
    placement: string;
}

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NgbTooltipModule
    ]
})
export class SocialComponent implements OnInit {
    @Input() color: string = 'black';

    public socialData: SocialLink[][] = [
        [
            {
                name: 'GitHub',
                link: 'https://github.com/yourusername',
                class: 'fab fa-github',
                placement: 'top'
            },
            {
                name: 'LinkedIn',
                link: 'https://linkedin.com/in/yourusername',
                class: 'fab fa-linkedin-in',
                placement: 'top'
            }
        ],
        [
            {
                name: 'Twitter',
                link: 'https://twitter.com/yourusername',
                class: 'fab fa-twitter',
                placement: 'bottom'
            },
            {
                name: 'Instagram',
                link: 'https://instagram.com/yourusername',
                class: 'fab fa-instagram',
                placement: 'bottom'
            }
        ]
    ];

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        changeDetectorRef.detach();
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
    }
}