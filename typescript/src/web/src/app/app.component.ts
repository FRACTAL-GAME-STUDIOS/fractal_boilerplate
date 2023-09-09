import { Component, HostListener, OnInit } from '@angular/core';
import { NUIService } from './services/nui.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Fractal Game Studios - ' + (window as any).GetParentResourceName(); // Get the resource name from the server

	visible: boolean = false;
	constructor(private NUI: NUIService) {}

	ngOnInit(): void {
		this.NUI.fromMessageAction<boolean>('setVisible').subscribe((visible: boolean) => {
			next: (value: boolean) => {
				this.visible = value;
			}
		});

		this.NUI.dispatchDebugMessages([
			{
				action: 'setVisible',
				data: true
			}
		]);
	}

	@HostListener('document:keydown.escape', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) {
		if (['Backspace', 'Escape'].includes(event.code)) {
			if (!this.NUI.isEnvBrowser()) this.NUI.fetchNUI('hideFrame');
			this.visible = false;
		}
	}
}
