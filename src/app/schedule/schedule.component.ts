import { Component,OnInit,  ViewChild, forwardRef } from '@angular/core';
import { CalendarOptions, Calendar, EventClickArg, EventHoveringArg } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  menuOn = false;
  calendarOptions?: CalendarOptions;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;
   span = document.createElement('span');
  constructor() {
  }
  ngOnInit(): void {
    this.span.className = 'hoverEffect'
    this.span.textContent = 'BOOK';
    this.span.style.color = 'white';
    this.span.style.position = 'absolute';
    this.span.style.margin = '-25px 0px 00px 18px';
    // need for load calendar bundle first
    forwardRef(() => Calendar);


    this.calendarOptions = {
      plugins: [timeGridPlugin, interactionPlugin],
      initialView: 'timeGridWeek',
      height: '95%',
      slotLabelInterval: '00:15',
      slotDuration: '00:15',
      slotMinTime: '7:15',
      slotMaxTime: '22:30',
      allDaySlot: false,
      dayHeaderFormat: { weekday: 'short' },
      eventColor: '#859EAC',
      validRange:{
        start:'19:00',
        end: '9:00'

      },
      editable: true,
      events: [
        {
          title: 'Hip Openers At Move', startTime: '21:00', endTime: '22:00', daysOfWeek: [0]
          , url: 'https://www.instagram.com/move.egypt'
        },
        {
          title: 'Ashtanga Vinyasa At(Led) Osana', startTime: '7:15', endTime: '08:45', daysOfWeek: [1]
          , url: 'http://www.osanawellness.com/schedule/'
        },
        {
          title: 'Backbends & spine At BrassMonkeys', startTime: '20:30', endTime: '21:30', daysOfWeek: [4]
          , url: 'https://www.instagram.com/brassmonkeysstudios/'
        },
        {
          title: 'Ashtanga Vinyasa(Mysore) At Flexana', startTime: '17:00', endTime: '18:40', daysOfWeek: [6]
          , url: 'http://flexanaegypt.com/'
        },
        {
          title: 'Ashtanga Vinyasa(Led) At Osana', startTime: '19:45', endTime: '21:15', daysOfWeek: [6]
          , url: 'http://www.osanawellness.com/schedule/'
        },
        {
          title: 'work', startTime: '9:00', endTime: '18:00', daysOfWeek: [0,2,4]
         , display: 'background'
        },
        {
          title: 'work', startTime: '9:00', endTime: '14:00', daysOfWeek: [1,3]
         , display: 'background'
        },
        {
          title: 'vacation', startTime: '7:15', endTime: '22:30', daysOfWeek: [5]
         , display: 'background'
        },
      ],
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this),
      eventMouseEnter: this.handleEventHover.bind(this),
      eventMouseLeave: this.handleEventHoverLeave.bind(this),
    };
  }
  handleDateClick(arg: DateClickArg) {
    console.log(arg);
  }

  handleEventClick(arg: EventClickArg) {
    console.log(arg);
  }

  handleEventDragStop(arg: EventDragStopArg) {
    console.log(arg);
  }
  handleEventHover(arg: EventHoveringArg) {
    arg.el.style.backgroundColor = '#3f7372';
    
    arg.el.appendChild(this.span);
  }
  handleEventHoverLeave(arg: EventHoveringArg) {
    arg.el.style.backgroundColor = '#859EAC';
    arg.el.removeChild(this.span);
  }
}
