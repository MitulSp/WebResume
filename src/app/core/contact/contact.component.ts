import { Component, NgZone, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  model: any = {
    firstName: null,
    email: null
  };

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  fnOpenInNewTab(type: number) {
    switch (type) {
      case 1:
        window.open('https://www.instagram.com/mitulsp_/', '_blank');
        break;

      case 2:
        window.open('whatsapp://send?text=Hey!&phone=+919904976798', '_blank');
        break;

      case 3:
        window.open('https://linkedin.com/in/mitulkumar-patel-0a803083', '_blank');
        break;

      case 4:
        window.open('tel:+9904976798', '_blank');
        break;

      case 5:
        window.open('mailto:mitul.1315@gmail.com', '_blank');
        break;
    }
  }

  async onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    alert('Something went wrong')
    /*  Email.send({
       Host: "smtp.gmail.com",
       Username: "xxxxx@gmail.com",
       Password: "xxxxxxx",
       To: 'rahulpatel3588@gmail.com',
       From: "rahulpatel3588@gmail.com",
       Subject: "New message on contact from " + name,
       Body: Body
     }).then(
       message => {
         //console.log (message);
         if (message == 'OK') {
           alert('Your mail has been send. Thank you for connecting.');
         }
         else {
           console.error(message);
           alert('There is error at sending message. ')
 
         }
 
       }
     ); */
  }
  /* let name = $('#Name').val();
  let email = $('#Sender').val();
  let subject = $('#Subject').val();
  let message = $('#Message').val(); */

  // let body = $('#body').val();

  // let Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;/*  */
  //console.log(name, phone, email, message);

  /*   */

}
