import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/Services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {




  constructor(private userservice: UsersService,public dialog: MatDialog,private fb: FormBuilder,) {}
  ngOnInit(): void {
   this.getUsers();
  }



  regform=this.fb.group({
    name:['',[Validators.required]],
    id:['',[Validators.required]],
    email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]],
    phone: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(10)]],

    company:['',[Validators.required]],
    website:['',[Validators.required]],
  
    
  
  
  });
  
  
  
  
  
  get namevalidator(){
    return this.regform.get('name')
  }
  
  
  get emailvalidator(){
    return  this.regform.get('email')
  }
  get idvalidator(){
    return  this.regform.get('id')
  }
  get phoneValidator(){
    return  this.regform.get('phone')
  }
  get websitevalidator(){
    return  this.regform.get('website')
  }
  get companyvalidator(){
    return  this.regform.get('company')
  }




  onSubmit() {
    console.log(this.regform.value);
    const usernameValue = this.regform.value.name;
  
    this.userservice.addUser(this.regform.value).subscribe(
      response => {
        console.log(response);
  
       alert("Welcome To Enqcode Technologies  '"+usernameValue)
  
       
        location.reload();
      },
      error => {
        console.error(error);
  
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while adding the user.',
          icon: 'error'
        });
      }
    );
  }
  
users:any;
getUsers() {
  this.userservice.getUsers().subscribe(data => {


    console.log(data);
  });
}


}
