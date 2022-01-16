import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name:'charPipe'
})

export class characterPipe implements PipeTransform{
    
    transform(value: string) {
    let lookup = { "é": "e", "á": "a", "ű": "u", "ő": "o", "ú": "u", "ö": "o", "ü": "u", "ó": "o", "í": "i",     
    "É": "E", "Á": "A", "Ű": "U", "Ő": "O", "Ú": "U", "Ö": "O", "Ü": "U", "Ó": "O", "Í": "I"   };

        return value.split('').map(function (char: string) {
            if (lookup.hasOwnProperty(char)) {
                let word = lookup[char];
                return word;
            }
            return char;
        }).join('');
    }
}