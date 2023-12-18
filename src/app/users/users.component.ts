import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from 'src/Services/users.service';
import { AddUserComponent } from '../add-user/add-user.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{


  users: any[] = [];

 
  constructor(private userservice: UsersService,public dialog: MatDialog,private fb: FormBuilder,) {}

  ngOnInit(): void {
    this.getUsers();
  }
  page=1;
  totalPokemons: number | undefined; 
  getUsers() {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
      this.totalPokemons = this.users.length;
      console.log(data);
    });
  }

delete(id:string)
{
  this.userservice.deleteUser(id).subscribe(data=>{
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Deleted Successful',
      text: 'The User was updated successfully.',
    });
    this.getUsers();
  })


}
isEditMode = false;

editdocuments = new FormGroup({
  "id": new FormControl(),                                
  "name": new FormControl(),
  "email": new FormControl(),
  "phone": new FormControl(),
  "website": new FormControl(),
  "company": new FormControl()
});

update(pokemon: any) {
  this.editdocuments.setValue(pokemon);
  this.isEditMode=true;
}

sendupdateDocumentData()
{
this.userservice.updateUser(this.editdocuments.value).subscribe((res)=>{
this.users=res;
this.getUsers();
Swal.fire({
  icon: 'success',
  title: 'Update Successful',
  text: 'The User was updated successfully.',
});
this.isEditMode=false;
})
}


closeForm(): void {

  this.isEditMode = false;
  
}

//ADD USER



regform=this.fb.group({
  name:['',[Validators.required]],
  id:['',[Validators.required]],
  email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]],
  PhoneNumber:['',[Validators.pattern("0-9"),Validators.minLength(10)]],
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






add()
{

  this.dialog.open(AddUserComponent, {
    width: '400px', 
   
  });
}


//filter by name and email


searchQuery:any;
search() {
  if(this.searchQuery == "")
  {
    this.ngOnInit();
  }
  else{
    this.users=this.users.filter(res=>{
  return res.name?.toLowerCase().match(this.searchQuery.toLocaleLowerCase());
    })
  }
}
searchh() {
  if(this.searchQuery == "")
  {
    this.ngOnInit();
  }
  else{
    this.users=this.users.filter(res=>{
  return res.email?.toLowerCase().match(this.searchQuery.toLocaleLowerCase());
    })
  }
}

}
