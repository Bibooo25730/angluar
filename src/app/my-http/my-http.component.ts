import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse} from "@angular/common/http"
@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.scss']
})
export class MyHttpComponent implements OnInit {

  constructor(private http:HttpClient) { }
  resulets: any;
  ngOnInit(): void {
    this.http.get('http://112.213.125.75:3001/api/home/bananer',{observe:'response'}).subscribe(data => {
      console.log(data)
        this.resulets = data.body
      })
  }
}
