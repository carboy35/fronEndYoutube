import { UserModel } from './../model/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { OK } from '../model/httpstatus'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})

export class UserComponent implements OnInit {
  name: UserModel;
  private users: Array<UserModel>;
  private message: String="";
  constructor(private userService: UserService, private router: Router) { 

  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers():void{
  // console.log(this.userService.getUsers());
  this.userService.getUsers().subscribe(res => {
    this.users= res;
    
  });
 
  }

  public edit(user: UserModel): void{
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/createUserComponent']);
  }

  public delete(): void{
    this.userService.delete(this.name).subscribe(res => {
      if (res.responseCode == OK) {
        this.router.navigate(['/userComponent']);
      }else{
        this.message=res.message;
      }
    });
    window.location.reload();
  }




  public seteaItem(item): void{
   this.name=item;
  }

}
