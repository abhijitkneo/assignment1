import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
    private URL = "https://jsonplaceholder.typicode.com/todos";
    todoData: any;
    isLoader: boolean = true;

    constructor(private http:HttpClient) { }

    ngOnInit(): void {
        this.http.get(this.URL).subscribe(
            res=> {
                console.log(res);
                this.todoData = res;
                this.isLoader = false;
            }
        )
    }

}
