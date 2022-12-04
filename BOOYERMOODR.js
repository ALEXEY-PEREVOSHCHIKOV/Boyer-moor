 function boyer(Stroka, Substroka) {
            var ret = [];
            var k = Substroka.length - 1, o = {}, l = Stroka.length, i = 0, j, c;
            for (; i < k; i++)
                o[Substroka.charAt(i)] = k - i;
            i = 0;
            while (i < l) {
                for (j = k; j >= 0; j--)
                    if (Substroka.charAt(j) != Stroka.charAt(i + j)) {
                        break;
                    }
                if (j < 0) {
                    i++;
                    ret.push(i);
                }
                else {
                    c = o[Stroka.charAt(i + j)];
                    if (!c)
                        c = k + 1;
                    c += j - k;
                    if (c <= 0) 
                        c = 1;
                    i += c;
                }
            }
            return ret;
        }

var file = process.argv[2];
var fs = require('fs');
var Stroka = fs.readFileSync(file).toString();

let Substroka = "he";
console.log (boyer (Stroka, Substroka));