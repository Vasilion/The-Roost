import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    {id:1, img:'../assets/imgs/img5.jpg'},
    {id:2, img:'../assets/imgs/img7.jpg'}
]


  constructor() { }

  ngOnInit(): void {
  }

}
