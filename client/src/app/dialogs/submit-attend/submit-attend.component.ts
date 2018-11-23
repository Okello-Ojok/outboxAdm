import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-submit-attend',
  templateUrl: './submit-attend.component.html',
  styleUrls: ['./submit-attend.component.scss']
})
export class SubmitAttendComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<SubmitAttendComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string ) { }


  ngOnInit() {
  }

  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }


}
