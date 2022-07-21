import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	private URL = "https://jsonplaceholder.typicode.com/posts";
	postData: any;
    isLoader: boolean = true;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get(this.URL).subscribe(
			res => { 
				//console.log(res);
				this.postData = res;
                this.isLoader = false;
			}
		)
	}

}
