import { Component, ChangeDetectorRef, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Event } from '../../events.model';
import { Observable, observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SubmitAttendComponent } from '../../dialogs/submit-attend/submit-attend.component';



import { FormControl } from '@angular/forms';

import { EventsService } from '../../events.service';
import { Attendee } from '../../events.model';


@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./event-register.component.scss']
})
export class EventRegisterComponent implements OnInit {
 


  events: Event[]
  sex = null;
  gender = ["Male", "Female"];

  isLoading = false;
  attendee: Attendee;
  private mode = "create";
  private attendeeID: string;

  occupation = null;
  occupations = ["Student", "Proffessional", "Other"];
  data = "";


  constructor(private eventsService: EventsService, public route: ActivatedRoute, private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog) { }


  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(data => {
        this.events = data
        this.changeDetectorRefs.detectChanges();
        console.log(data);

      }, err => {
        console.log(err);

      });
    console.log(this.events);

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('attendeeID')) {
        this.mode = 'edit';
        this.attendeeID = paramMap.get('attendeeID');
        this.isLoading = true;
        this.eventsService.getAttendee(this.attendeeID).subscribe(attendeeData => {
          this.isLoading = false;
          this.attendee = {id: attendeeData.id, firstname: attendeeData.firstname, lastname: attendeeData.lastname, email: attendeeData.email, phone: attendeeData.phone, 
            gender: attendeeData.gender, occupation: attendeeData.occupation, eventAtt: attendeeData.eventAtt};
        })

      } else{
        this.mode = 'create';
        this.attendeeID = null;
      }

    });  

  }


  onAddAttendee(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.eventsService.addAttendee(form.value.firstname, form.value.lastname, form.value.email, form.value.phone, form.value.gender, form.value.occupation, form.value.ourEvents);
    } 
    // else {
    //   this.eventsService.updateAttendee(
    //     this.eventID,
    //     form.value.eventname, 
    //     form.value.eventDate, 
    //     form.value.payment, 
    //     form.value.facilitators
    //   );
    // }
    form.resetForm();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SubmitAttendComponent,
      {
        width: '400px',
        data: 'You have successfully registered for an event. Thank you!!!'
      })


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.data = result;
    })

    
  }


  
}
