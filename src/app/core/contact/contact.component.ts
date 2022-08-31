import { Component, NgZone, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { BaseRequestService, globalConfig } from 'src/app/services/base-request.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  spinnerProp: any = {
    'bdColor': '',
    'fullScreen': false,
    'size': '',
    'color': '',
    'type': ''
  };
  model: any = {
    firstName: null,
    email: null,
    Subject: null,
    Message: null
  };
  spinnerSendMail = 'SendMail'

  constructor(private ngZone: NgZone, private baseRequest: BaseRequestService) {
    this.spinnerProp.bdColor = globalConfig.data.spinnerProp.bdColor;
    this.spinnerProp.fullScreen = globalConfig.data.spinnerProp.fullScreen;
    this.spinnerProp.size = globalConfig.data.spinnerProp.size;
    this.spinnerProp.color = globalConfig.data.spinnerProp.color;
    this.spinnerProp.type = globalConfig.data.spinnerProp.type;
  }

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
    try {
      // this.spinner.show(this.spinnerSendMail);
      const sendMail = {
        sendEmail: this.model.email,
        receiveEmail: 'me2lspatel@gmail.com',
        subject: this.model.Subject,
        html: this.model.message,
        name: this.model.firstName
      }
      const getAppSaveInfo: any = await this.baseRequest.fnpost('sendMail', sendMail).toPromise();
      console.log('getAppSaveInfo', getAppSaveInfo)
      if (getAppSaveInfo && getAppSaveInfo.statusCode === this.baseRequest.status.success) {
        console.log('getAppSaveInfo', getAppSaveInfo)
        // this.toastrService.success('Thank you for filling out your information!', 'Mail sent successfully');
        // this.spinner.hide(this.spinnerSendMail);
      } else if (getAppSaveInfo.statusCode === 'E002') {
        // this.toastrService.error(globalConfig.data.E002, 'Error');
        // this.spinner.hide(this.spinnerSendMail);
      } else {
        // this.toastrService.error(getAppSaveInfo.message, 'Error');
        // this.spinner.hide(this.spinnerSendMail);
      }
    } catch (error) {
      // this.toastrService.error(globalConfig.data.E002, 'Error');
      // this.spinner.hide(this.spinnerSendMail);
    }
  }
}
