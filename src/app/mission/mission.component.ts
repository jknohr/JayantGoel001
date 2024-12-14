import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

interface MissionStyle {
    left: string;
    top: string;
}

interface DevelopTime {
    time: string;
    style: MissionStyle;
}

interface Moon {
    dot: string[];
    name: string[];
}

interface Mission {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    link: string;
    class: string;
}

interface MissionData {
    background: string;
    sun: string[];
    developTime: DevelopTime[];
    moon: Moon;
    mission: Mission[][];
}

declare var data: {
    mission: MissionData;
};

@Component({
    selector: 'app-mission',
    templateUrl: './mission.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./mission.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NgbTooltipModule
    ]
})
export class MissionComponent implements OnInit {
    public missionData: MissionData = data['mission'];
    public darkTheme = true;

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        changeDetectorRef.detach();
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
        setInterval(() => {
            this.darkTheme = !this.darkTheme;
            this.changeDetectorRef.detectChanges();
        }, 7100);
    }
}