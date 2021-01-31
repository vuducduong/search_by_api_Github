import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  users = [];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
   this.userService.getUserlist().subscribe(res=>{
    this.users = res
    });;

  }

  onKey(event){
    let name =  event.target.value;
    this.userService.searchByName(name).subscribe(res=>{
      // console.log(res)
      this.users = res.items
      });;
      }

  }



