import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';
import { Contact } from './Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[];
  filteredContacts: any;
  error: String = '';

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  this.getContactList();
  }

  getContactList() {
  this.contactService.getContactList().subscribe((data: Contact[]) => {
          this.contacts = data;
          this.assignCopy();
    },
    (err: any) => {
      console.log('error', err);
      this.error = 'This feature is temporarily unavailable. Please try after sometime.';
    });
  }

  showDetail(index: number) {
    this.filteredContacts[index].viewDetails = (this.filteredContacts[index].viewDetails) ? false : true;
  }

  deleteContact(id: number) {
    if (confirm('Are you sure?')) {
      // Optimistic coding
      const elementPos = this.filteredContacts.map(function(x) {return x.id; }).indexOf(id);
      this.filteredContacts.splice(elementPos, 1);

      this.contactService.deleteContact(id).subscribe(
        (data: any) => {
          console.log('deleted successfully');
          this.contacts = Object.assign([], this.filteredContacts);
        },
        (err: any) => {
          console.log('error', err);
          this.assignCopy();
          this.error = 'This feature is temporarily unavailable. Please try after sometime.';
        }
     );
    }
  }

  assignCopy() {
    this.filteredContacts = Object.assign([], this.contacts);
  }

  filterContactList(evnt) {
    const value = evnt.target.value;
    if (!value) {
      this.assignCopy(); // when nothing has typed
    }
    this.filteredContacts = Object.assign([], this.contacts).filter(
       item => {
         return (item.firstName.toLowerCase().indexOf(value.toLowerCase()) > -1
         || item.lastName.toLowerCase().indexOf(value.toLowerCase()) > -1);
       }
    );
 }
}
