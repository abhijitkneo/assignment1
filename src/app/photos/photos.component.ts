import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
    private URL = "https://jsonplaceholder.typicode.com/photos";
    photoData: any;
    isLoader: boolean = true;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get(this.URL).subscribe(
            res => {
                console.log(res);
                this.photoData = res;
                this.isLoader = false;
            }
        )
    }

}
