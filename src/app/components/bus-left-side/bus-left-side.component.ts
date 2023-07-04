import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-bus-left-side',
  templateUrl: './bus-left-side.component.html',
  styleUrls: ['./bus-left-side.component.scss']
})
export class BusLeftSideComponent implements OnInit {
  @Input()switchImage: any
  textImage: boolean = true
  firstImage: any = '../../../assets/images/img.jpg'

  secondImage: any = '../../../assets/images/group.png'
  constructor() { }

  ngOnInit(): void {
  }

}
