import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../Contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  error: String = '';
  contact: Contact = {firstName: '', lastName: '', email: '', status: ''};

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  saveContact() {
  this.contactService.saveContact(this.contact).subscribe((data: Contact) => {
        this.router.navigate(['/contact']);
    },
    (err: any) => {
      console.log('error', err);
      this.error = 'This feature is temporarily unavailable. Please try after sometime.';
    });
  }
}
