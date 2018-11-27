import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';

import { User } from '../user.model';
import { UserService } from '../user.service';
import { timeout } from 'q';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor(public userService: UserService) {
    this.user = new User();
    this.user.firstname = '';
    this.user.lastname = '';
    this.user.email = '';
    this.user.password = '';
  }

  //email validating
  email = new FormControl('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
  }

  onRegister() {
    // //user object
    // const user1 = {
    //   firstName: this.user.firstName,
    //   lastName: this.user.lastName,
    //   email: this.user.email,
    //   password: this.user.password
    // }


    this.userService.addUser(this.user).subscribe((res) => {
      console.log(res);
    });
  }

  // resetForm(form: NgForm) {
  //   this.userService = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     password: ''
  //   };
  //   form.resetForm();
  // }


}
