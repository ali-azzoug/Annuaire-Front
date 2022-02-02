import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../models/user.model";

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
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    this.type = this.data.type;
    if(this.type == "Details"){
      this.id = this.data.id;
      this.user = this.data.user;
      this.DisableInput = true;
      this.title = "Afficher l'utilisateur";
    }else if(this.type == "Edit"){
      this.id = this.data.id;
      this.user = this.data.user;
      this.title = "Modifier l'utilisateur";
    }else if(this.type == "New"){
      this.user = new User();
      this.title = "Ajouter un nouvel utilisateur";
    }

    if(this.id != "" && this.user != ""){
        //getAllInfo with role
    }


  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    /*this.playlistService.addPlaylistByUser(this.id, this.name).subscribe(
      (data:any) => {
        if(data.status != 'Error'){
          this.dialogRef.close('ok');
        }
      }
    )*/
  }

}
