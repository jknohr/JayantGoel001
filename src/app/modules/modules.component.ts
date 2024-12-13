import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-modules',
	templateUrl: './modules.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./modules.component.css']
})
export class modulesComponent implements OnInit {
	public modulesData = data['modules'];

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}

}
