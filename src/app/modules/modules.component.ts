import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

interface ModuleProject {
    project: string;
    description: string;
    animationClass: string;
    delay: string;
    placement: string;
}

declare var data: {
    modules: ModuleProject[];
};

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./modules.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NgbTooltipModule
    ]
})
export class ModulesComponent implements OnInit {
    public modulesData: ModuleProject[] = data['modules'];

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        changeDetectorRef.detach();
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
    }
}