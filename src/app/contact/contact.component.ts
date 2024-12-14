import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactService, ContactItem } from './contact.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, NgbTooltipModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    private contactService = new ContactService();
    protected contactData = toSignal(this.contactService.getContactData(), {
        initialValue: [] as ContactItem[]
    });
    protected contactTypes = toSignal(this.contactService.getContactTypes(), {
        initialValue: ''
    });
}