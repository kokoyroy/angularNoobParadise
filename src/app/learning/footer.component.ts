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
  onoma: string = '';
  server: string;
  username: string = null
  paratsoukli: string = null;
  showpassword: boolean = false;
  log: number[] = []
  toggleDisplay(): void {
    this.showpassword = !this.showpassword;
    this.log.push(this.log.length + 1)
  }

  setchange(e: any): void {
    console.log(e);

    this.onoma = e.target.value;
  }

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
      this.setKeimenoKoumpiou('allo onoma')
    }, 3000)
  }

  ngOnInit(): void {
  }

}
