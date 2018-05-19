import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../Contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  error: String = '';
  contact: Contact;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  this.getContact(this.route.snapshot.params['id']);
  }

  getContact(id: number) {
  this.contactService.getContact(id).subscribe((data: Contact) => {
          this.contact = data;
    },
    (err: any) => {
      console.log('error', err);
    });
  }

  updateContact(id: number) {
  this.contactService.updateContact(id, this.contact).subscribe((data: Contact) => {
        this.router.navigate(['/contact']);
    },
    (err: any) => {
      console.log('error', err);
      this.error = 'This feature is temporarily unavailable. Please try after sometime.';
    });
  }

}
