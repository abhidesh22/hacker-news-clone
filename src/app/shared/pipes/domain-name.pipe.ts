import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainName'
})
export class DomainNamePipe implements PipeTransform {

  transform(url: string | undefined, ...arg: string[]): string {
    if (url) {
        const domain = (new URL(url)).hostname.replace('www.','');
        return `(${domain})`;
    }
    return `(${url})`;
  }
}