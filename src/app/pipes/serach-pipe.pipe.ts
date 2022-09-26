import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachPipe'
})
export class SerachPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter(x => {
      x.name.toLowerCase().includes(searchText);
    });
  }

}
