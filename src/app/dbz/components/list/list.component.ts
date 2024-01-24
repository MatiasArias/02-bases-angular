import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: 'list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characters: Character[]=[
    {
      name:'Trunks',
      power: 1000
    }
    ];

    @Output()
    public deleteById: EventEmitter<number> = new EventEmitter();


    onDeleteCharacter(index:number):void{
      console.log(index)
      this.deleteById.emit(index)
    }
 }
