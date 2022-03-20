import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'myword' })
export class MywordPie implements PipeTransform{
    transform(value: any, ...args: any[]) {
        args = ['时间'];
        return value + '' + args[0] 
    }
}