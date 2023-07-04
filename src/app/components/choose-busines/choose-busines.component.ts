import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-choose-busines',
  templateUrl: './choose-busines.component.html',
  styleUrls: ['./choose-busines.component.scss']
})
export class ChooseBusinesComponent implements OnInit {
  data: any
  choosepage:any
  subs:Subscription[]=[]
  constructor(private service:SharedServiceService,private router: Router) { }

  ngOnInit(): void {
this.subs.push(
this.service.firstpage.subscribe((res:any)=>{

  this.choosepage = res
console.log(this.choosepage,'choose')
})
)
    this.data={
      header:'Choose the type of business',
      paragrapg:'To get start tell us what type of Business you are going to incorporate and name'
    }
  }
  goBack(){
    this.router.navigateByUrl('');
  }
}
