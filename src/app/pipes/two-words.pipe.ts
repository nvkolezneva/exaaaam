import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoWords'
})
export class TwoWordsPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) { return value; }
    value = value.trim();
    let wordsArray = value.split(' ');
    if (wordsArray.length===1){return wordsArray[0];}
    else if (wordsArray.length===2){return  wordsArray[0] + ' ' + wordsArray[1];} else{
    return wordsArray[0] + ' ' + wordsArray[1] + '...';}
  }

}
