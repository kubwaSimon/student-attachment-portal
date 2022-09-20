import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username:string='';
password:string='';
image: string="assets/images/image-7.jpg";
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}
