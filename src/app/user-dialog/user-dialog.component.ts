import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../models/user.model";
import {UsersService} from "../services/users.service";
import {RoleService} from "../services/role.service";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  id:any;
  user:User = new User();
  type:any;
  DisableInput=false;
  title = '';
  role = '';
  disableEmailInput=true;
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usersService: UsersService,
    private roleService: RoleService,
  ) {}

  ngOnInit() {
    this.type = this.data.type;
    if(this.type == "Details"){
      this.id = this.data.id;
      this.user = this.data.user;
      this.DisableInput = true;
      this.title = "Display User";
      if(this.user.id != null){
        this.roleService.getAllRolesByUserId(this.user.id).subscribe(
          (data)=> {
            this.role = data.roles;
          }
        );
      }

    }else if(this.type == "Edit"){
      this.id = this.data.id;
      this.user = this.data.user;
      this.title = "Edit User";
    }else if(this.type == "New"){
      this.user = new User();
      this.disableEmailInput=false;
      this.title = "Create new User";
    }

    if(this.id != "" && this.user != ""){
        //getAllInfo with role
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    if(this.type == "Edit"){
      let tempuser = this.user;
      tempuser.email = 'test@'
      this.usersService.updateUser(tempuser).subscribe(
        (data) => {
          console.log(data);
          this.dialogRef.close('ok');
        }
      );
    }else if(this.type == "New"){
      console.log(this.user);
      this.usersService.createUser(this.user).subscribe(
        (data) => {
          console.log(data);
          this.dialogRef.close('ok');
        }
      );
    }
  }

}
