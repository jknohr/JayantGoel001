import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// Export interfaces
export interface ContactLink {
    type: string;
    title: string;
}

export interface ContactItem {
    title: string;
    icon: string;
    animationClass: string;
    links: ContactLink[];
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private contactData: ContactItem[] = [
        {
            title: 'Email',
            icon: 'fas fa-envelope',
            animationClass: 'Right',
            links: [
                {
                    type: 'mailto:',
                    title: 'example@email.com'
                }
            ]
        }
    ];

    getContactData(): Observable<ContactItem[]> {
        return of(this.contactData);
    }

    getContactTypes(): Observable<string> {
        return this.getContactData().pipe(
            map(contacts => contacts
                .map(contact => contact.title)
                .join(', ')
            )
        );
    }
}