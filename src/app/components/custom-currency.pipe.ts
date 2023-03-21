import { formatCurrency, getLocaleCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  currencyCode = 'ARG';
  locale = 'es-AR';

  transform(value: number, digistInfo:string): string | null {
    const localeCurrencySymbol = getLocaleCurrencySymbol(this.locale) || ''; // de esta manera salvo el error de diferentes tipos de datos ya que el tercer argumento solo admite strings y esta funcion devue strings | null
    //const localeCurrencySymbol = getLocaleCurrencySymbol(this.locale)! <== de esta manera le aceguro a angular que siempre va a tener un valos se lo llama "assertion operator"
    return formatCurrency(
      value,
      this.locale,
      localeCurrencySymbol,
      this.currencyCode,
      digistInfo
    )
  }

}
