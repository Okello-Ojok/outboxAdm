import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from '../../events.service';
import { Event } from '../../events.model';
import { SubmitEventComponent } from '../../dialogs/submit-event/submit-event.component';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  paid = null;
  payment = ["Yes", "No"];
  isLoading = false;
  event: Event;
  private mode = "create";
  private eventID: string;
  eventDate;
  dates: Event[];
  data = "";


  constructor(public eventsService: EventsService, public route: ActivatedRoute,
    public dialog: MatDialog) { }


  ngOnInit() {
    this.eventDate = new Date();

    this.eventsService.getEventDates()
      .subscribe(data => {
        this.dates = data
        console.log(data);
      })
    
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('eventID')) {
        this.mode = 'edit';
        this.eventID = paramMap.get('eventID');
        this.isLoading = true;
        this.eventsService.getEvent(this.eventID).subscribe(eventData => {
          this.isLoading = false;
          this.event = { id: eventData._id, eventname: eventData.eventname, eventDate: eventData.eventDate, eventPaid: eventData.eventPaid, facilitators: eventData.facilitators };
        })

      } else {
        this.mode = 'create';
        this.eventID = null;
      }

    });
    // setTimeout(() => {
    //   this.openDialog() 
    //  }, 500);
    
  }



  onAddEvent(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.eventsService.addEvent(form.value.eventname, form.value.eventDate, form.value.payment, form.value.facilitators);
    }
    else {
      this.eventsService.updateEvent(
        this.eventID,
        form.value.eventname,
        form.value.eventDate,
        form.value.payment,
        form.value.facilitators
      );
    }
    form.resetForm();
  }


  
  openDialog() {
    const dialogRef = this.dialog.open(SubmitEventComponent,
      {
        width: '400px',
        data: 'This is the data'
      })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.data = result;
    });

    // dialogRef.close('Pizza!');
  }

  

}
