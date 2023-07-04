import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent implements OnInit {
  data={}
  constructor(private router: Router) { }
  ngOnInit(): void {

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
}
}
