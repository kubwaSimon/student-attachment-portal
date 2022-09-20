import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  name:string='';
username:string='';
password:string='';

  image: string="assets/images/image-7.jpg";
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }
}
