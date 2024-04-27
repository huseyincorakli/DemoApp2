import { Component } from '@angular/core';

@Component({
  selector: 'app-paren-child-communication',
  template:`
  <h1>{{"parent to child communication" |titlecase  }}</h1>
  1- Parentda bulunan bir veriyi childa gönderme işlemidir. <br>
  2-Child componentte Input değişkeni tanımlanır<br>
  3-Parent componentten child componente attribute ile gönderilir.<br>
  <h3>Example</h3>
  <app-parent></app-parent>
   <hr>
   <h1>{{"child to parent communication" |titlecase  }}</h1>
   <br>
    1-Eğer ki child componentten parent componente veri göndermek istiyorsak; <br>
    2-Gönderilmek istenen verinin eventi oluşturulması gerekmektedir. (EventEmitter türünde) <br>
    3- Bu eventin Output decorator ile işaretlenmesi gerekmektedir. <br>
    4-Gönderilece veriyi bir olay sonucu emit etmemiz gerekmektedir. Örneğin NgOnInit interface inin ngOnInit fonksiyonunu kullanarak oluşturduğumuz event ile göndereceğimzi
    veriyi emit ederiz.<br>
    5-parent komponentte oluşturduğumuz eventi çağırarak bir fonskiyona bağlarız ardından gönderilen veriyi fonksiyonda parametre olarak çağırırz.<br>
    6-çağırdğımız fonskiyonun  $event parametresi almalıdır.<br>
    <h3>Example</h3>
   <app-ctp-parent></app-ctp-parent>
   <hr>
   <h1>{{"child to child communication" |titlecase  }}</h1>
    1- Öncelikle child-1 de bulunan değeri parent comp'a ardından child-2'e aktarırız.
    <h3>Example</h3>
    <app-ctc-parent></app-ctc-parent>
  `
})
export class ParenChildCommunicationComponent {

}
