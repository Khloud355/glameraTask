import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-text',
  templateUrl: './shared-text.component.html',
  styleUrls: ['./shared-text.component.scss']
})
export class SharedTextComponent implements OnInit {
@Input() text:any;

  constructor() { }

  ngOnInit(): void {

  }

}
