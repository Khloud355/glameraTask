import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choose-busines',
  templateUrl: './choose-busines.component.html',
  styleUrls: ['./choose-busines.component.scss']
})
export class ChooseBusinesComponent implements OnInit {
  data: any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data = {
      header: 'Choose the type of business',
      paragrapg: 'To get start tell us what type of Business you are going to incorporate and name'
    }
  }
  goBack() {
    this.router.navigateByUrl('');
  }
}
