import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {
  // value: 파이프 앞의 변수를 가리킨다.
  // ars: mydate: 다음 변수를 가리킨다.
  // return: 새로운 출력
  transform(value: any, args?: any): any {
    console.log(value, args);
    return (value as string).substring(0, 16);
  }

}
