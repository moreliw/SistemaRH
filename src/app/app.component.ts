import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cor = false;
  title = 'SistemaRH';

  trocarCor() {
    this.cor = !this.cor;
    console.log('this.cor');
    if (this.cor) {
      this.title = 'Alex & Patrão <3';
    } else {
      this.title = 'William';
    }
  }
}
