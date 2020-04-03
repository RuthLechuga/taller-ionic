import { Pipe, PipeTransform } from '@angular/core';

const url = 'https://image.tmdb.org/t/p/w500';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string): string {

    if(!img)
      return './assets/no_image.jpg'

    return url+img;
  }

}
