import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent  {
  public characters: Character[]=[
  {
    name:'Goku',
    power: 9500
  },
  {
    name:'Krillin',
    power:88
  },
  {
    name:'Vegeta',
    power:7500
  }
  ];

  onNewCharacter(character : Character):void{
      this.characters.push(character)
  }

  deleteCharacterById(index:number):void{
    console.log(index)
    this.characters.splice(index,1)
  }
}
