import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EventsService } from '../events.service';
import { Event } from '../events.model';


@Component({
  selector: 'app-our-nav',
  templateUrl: './our-nav.component.html',
  styleUrls: ['./our-nav.component.css']
})
export class OurNavComponent implements OnInit{

  countAtt;
  countEvt;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public eventsService: EventsService, private changeDetectorRefs: ChangeDetectorRef) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.eventsService.countAttendance()
    // .subscribe(data => {
    //   this.countAtt = data;
    //   console.log(data);
    //   this.changeDetectorRefs.detectChanges();
      
    // })

    // this.eventsService.countEvents()
    // .subscribe(data => {
    //   this.countEvt = data;
    //   console.log(data);
    //   this.changeDetectorRefs.detectChanges();
      
    // })
    this.refreshCards();
    
  }

  refreshCards(){
    this.eventsService.countEvents()
    .subscribe(data => {
      this.countEvt = data;
      console.log(data);
      this.changeDetectorRefs.detectChanges();
      
    })

    this.eventsService.countAttendance()
    .subscribe(data => {
      this.countAtt = data;
      console.log(data);
      this.changeDetectorRefs.detectChanges();
      
    })

  }

  
  }
