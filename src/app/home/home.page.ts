import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  openPartOne() {
    console.log('Part 01 !');
    
  }

  openPartTwo() {
    console.log('Part 02 !');
  }

}
