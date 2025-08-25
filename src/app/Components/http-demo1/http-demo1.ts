import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css'
})
export class HttpDemo1 {
  user_api_url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httClient: HttpClient) {

  }

  ngOnInit() { //best place to fetch data from API
    this.fetchUsers();
  }

  // fetchUserAngular() {
  //   fetch(this.user_api_url).then(
  //     (response) => {

  //     }
  //     (error) => {

  //     }
  //   )
  // }

  fetchUsers() {
    this.httClient.get(this.user_api_url).subscribe(
      (response) => {
        console.log("Users fetched:", response);
      },
      (error) => {
        console.error("Error while fetching users:", error);
      },
      () => {
        console.log("Fetching users completed.");
      }
    )
  }
}
