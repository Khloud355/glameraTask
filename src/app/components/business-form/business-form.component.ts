import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedServiceService } from 'src/app/shared-service.service';
@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent implements OnInit {
  data={}
  subs:Subscription[]=[]
  creatpage: any;
  constructor(private service:SharedServiceService,private router: Router) { }
  ngOnInit(): void {
    this.subs.push(
      this.service.firstpage.subscribe((res:any)=>{
        console.log(res)
        this.creatpage = res
      })
    )
    this.data={
      header:'Start your business now',
      paragrapg:'Creating your company is just a few steps away, Enter your email address to continue.'
    }
  }
  moveToNext(event:any) {
    let next = event.target.nextElementSibling;
    if (next) {
      next.focus();
    } else {
      event.target.blur();
    }
}
verfyCode(){
  this.router.navigateByUrl('choosebussines');
  this.service.firstpage.next(true)
}
}
