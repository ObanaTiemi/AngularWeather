import { Input, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  @Input() latitude:string;
  @Input() longitude:string;
  @Input() temperatura:string;

  key:string = '4e789aff1db8bc57290b9180a7c7649a';
  URL:string = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http:HttpClient) {

   }

  async ngOnInit() {

  }
  async getPositionData(){
    this.URL = `${this.URL}?lat=${this.latitude}&lon=${this.longitude}&APIKEY=${this.key}&units=metric`

    var data = await this.http.get(this.URL).toPromise()
    console.log("data", data)
    this.temperatura = data.main.temp
    console.log(this.temperatura)
  }
}
