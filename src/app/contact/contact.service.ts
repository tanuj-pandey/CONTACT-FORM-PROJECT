import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'http://localhost:4004/contact';

  constructor(private http: HttpClient) { }

  getContactList() {
    return this
            .http
            .get(`${this.url}`);
  }

  getContact(id: number) {
    return this
            .http
            .get(`${this.url}/${id}`);
  }

  updateContact(id: number, contact: Contact) {
  return this
            .http
            .put(`${this.url}/${id}`, contact);
  }

  saveContact(contact: Contact) {
  return this
            .http
            .post(`${this.url}`, contact);
  }

  deleteContact(id: number) {
  console.log('In delete service');
  return this
            .http
            .delete(`${this.url}/${id}`);
  }
}
