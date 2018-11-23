import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-submit-event',
  templateUrl: './submit-event.component.html',
  styleUrls: ['./submit-event.component.scss']
})
export class SubmitEventComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<SubmitEventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
  }

  // onCloseConfirm(){
  //   this.thisDialogRef.close('Close');
  // }

  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }

}
