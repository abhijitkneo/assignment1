import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
    private URL = "https://jsonplaceholder.typicode.com/albums"
    albumData: any;
    isLoader: boolean = true;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get(this.URL).subscribe(
            res => {
                console.log(res);
                this.albumData = res
                this.isLoader = false;
            }
        )
    }

}
