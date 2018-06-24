import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroFilter'
})
export class HeroFilterPipe implements PipeTransform {
  avengerHeroes:string[] = ['Thor','IronMan','Captain America','Black Panther','Ant Man'];

  transform(value: any, args?: any): any {
    const foundAvenger = this.avengerHeroes.find((hero)=>{
      return hero.toLowerCase() === value.toLowerCase();
    });
    if(foundAvenger){
      return value + ' (Avenger)';
    } else {
      return value;
    }
  }

}
