import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'segunda aula';
  latitude:string;
  longitude:string;

  ngOnInit(){
    console.log("Inicio!")

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(async position => {
        console.log("position", position)
        this.latitude = `${position.coords.latitude}`
        this.longitude = `${position.coords.longitude}`
      })
    }
  }
}
