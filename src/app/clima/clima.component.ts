import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  @Input() latitude:string;
  @Input() longitude:string;
  key:string = '4e789aff1db8bc57290b9180a7c7649a';
  URL:string = 'api.openweathermap.org/data/2.5/weather';
  constructor() { }

  ngOnInit() {
    alert(this.latitude)
    alert(this.longitude)
    this.URL = `${this.URL}?lat=${this.latitude}&lon=${this.longitude}&APIKEY=${this.key}`
  }
}
