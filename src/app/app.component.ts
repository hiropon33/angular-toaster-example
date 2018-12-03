import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-toastr';

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showError() {
    const config = {
      closeButton: true,
      disableTimeOut: true,
      tapToDismiss: false
    };
    this.toastr.error('This is error message. Fix me!', 'Error', config);
  }
  showWarning() {
    this.toastr.warning('Warning!', 'Warning');
  }
  showInfo() {
    this.toastr.info('Info message.');
  }
}
