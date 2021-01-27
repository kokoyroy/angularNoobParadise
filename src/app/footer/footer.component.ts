import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name: string = "giannis"
  ekdosi: boolean = true
  keimenoKoumpiou: string = "click me!"
  status: string = 'ok';
  buttonDisable: boolean = true;

  consolelogger = () => {
    console.log('button clicked');
    
  }


  getStatus = (): string => {
    return this.status
  }

  setKeimenoKoumpiou = (a: string) => {
    this.keimenoKoumpiou = a
  }
  setButtonDisable = () => {
    this.buttonDisable = false
  }

  constructor() {
    setTimeout(() => {
      this.setButtonDisable()
      this.setKeimenoKoumpiou('komporimosini')
    }, 3000)
  }

  ngOnInit(): void {
  }

}
