import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value: string, appendText:string): string {
    if(appendText!=null)
      {
        return value+appendText;
      }
    return null;
  }

}
