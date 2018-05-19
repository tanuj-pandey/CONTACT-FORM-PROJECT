import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../Contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  error: String = '';
  contact: Contact;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getContact(this.route.snapshot.params['id']);
  }

  getContact(id: number) {
  this.contactService.getContact(id).subscribe((data: Contact) => {
          this.contact = data;
    },
    (err: any) => {
      console.log('error', err);
      this.error = 'This feature is temporarily unavailable. Please try after sometime.';
    });
  }

}
