import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.scss']
})
export class SharedFormComponent implements OnInit {

  @Input() choosetype: any
  type: any
  selectedGov: any;
  selectsoc: any;
  selecteddisc: any
  showPasswordvar: boolean = false
  governments: any
  disticts: any
  socialmedia: any;
  errorFlag: any;
  createbusiness: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.governments = [
      { id: 1, name: 'Cairo' },
      { id: 2, name: 'Gize' },
      { id: 3, name: 'Alex' },

    ];
    this.disticts = [
      { id: 1, name: 'Naser City' },
      { id: 2, name: 'Fesal' },
      { id: 3, name: 'memy' },

    ];
    this.socialmedia = [
      { icon: '../../../assets/images/facebook (2).png', name: 'Facebook' },
      { icon: '../../../assets/images/twitter (2).png', name: 'Twitter' },
      { icon: '../../../assets/images/friends.png', name: 'Friends' }
    ]
    this.type = [
      {
        name: 'Salon', img: "../../../assets/images/salon.svg",
        img2: '../../../assets/images/salon2.svg', id: 'type1', flag: true
      },
      {
        name: 'Gym', img: '../../../assets/images/gym.svg',
        img2: '../../../assets/images/gym2.svg', id: 'type2', flag: true
      },
      {
        name: 'Spa', img: "../../../assets/images/spa.svg",
        img2: "../../../assets/images/spa2.svg", id: 'type3', flag: true
      },
      {
        name: 'Clinic', img2: '../../../assets/images/clinic.svg',
        img: '../../../assets/images/clinic2.svg', id: 'type4', flag: true
      }
    ]
    this.createbusiness = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')
      ]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')
      ]],
      email: ['', [Validators.email]],
      phone: [''],
      Password: ['', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        ),
        Validators.minLength(8),
      ],],
      type: [''],
      type1: [''],
      government: [''],
      District: [''],
      social: [''],
      radioform: [''],
      radio2form: ['']

    });
  }
  onSubmit() {
    console.log(this.createbusiness.valid)
  }
  chooseType(flag: any, id: any) {
    console.log(flag, id)
    for (var type of this.type) {

      if (type.id == id) {
        type.flag = !type.flag
        console.log(type.flag)
        break;
      }
    }
  }
  get f() {
    return this.createbusiness.controls;
  }
  showPassword() {
    this.showPasswordvar = !this.showPasswordvar
  }
  submit() {
    this.router.navigateByUrl('sucesspage');
  }
}

