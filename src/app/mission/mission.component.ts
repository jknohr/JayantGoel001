import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
    selector: 'app-mission',
    templateUrl: './mission.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./mission.component.css'],
    standalone: false
})
export class missionComponent implements OnInit {
	public missionData = data['mission'];
	public darkTheme : boolean = true;

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
