import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../services/rest-api.service';

@Component({
  selector: 'app-retreats',
  templateUrl: './retreats.component.html',
  styleUrls: ['./retreats.component.scss']
})
export class RetreatsComponent implements OnInit {
  itemSelected!: number;
  submitted: boolean = false;

  model:any = {
    // name: '',
    // mail: '',
    // phone: '',
    // car: false,
    // accomodation: '',
  }

  constructor(public  restAPI:RestAPIService  ) { }

  ngOnInit(): void {

  }
  sendDataToServer() {
    console.log(this.model);

    this.restAPI.postRetreat(this.model).subscribe((data: {}) => {
      console.log(data);
    })

  }
  selectAccomodation() {
    console.log("test");

  }
}
