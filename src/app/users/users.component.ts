import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    private URL = "https://jsonplaceholder.typicode.com/users";
    userData: any;
    isLoader: boolean = true;

    constructor(private http:HttpClient) { }

    ngOnInit(): void {
        this.http.get(this.URL).subscribe(
            res => {
                console.log(res);
                this.userData = res;
                this.isLoader = false;
            }
        )
    }

}
