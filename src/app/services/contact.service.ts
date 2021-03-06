import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ContactSingletonGQL } from '../queries/Contact.singleton';

@Injectable({
	providedIn: 'root',
})
export class ContactService {
	constructor(private contactSingletonGQL: ContactSingletonGQL) {}

	public getSingleton() {
		return this.contactSingletonGQL.watch().valueChanges.pipe(map((res) => res.data.contactsPageSingleton));
	}
}
