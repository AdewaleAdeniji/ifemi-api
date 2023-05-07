const axios = require("axios");
const cheerio = require('cheerio');
// const replaceAll = function(search: string, replacement: string) {
//     var target = this;
//     return target.split(search).join(replacement);
// };

const studyFetch = async () => {
    const f = await axios.get("https://www.muyilight.com/search?updated-max=2023-05-01T19%3A40%3A00%2B01%3A00&max-results=15")
    console.log(typeof(f.data))
    const $ = cheerio.load(f.data);
    var t = $(".post-outer").children('.thumb').text();
    // t = replaceAll(t, '\n','')
    // // t = replaceAll(t, '  ','')
    // t = t.split('               ').join('--')
    // t = replaceAll(t, '---', '===')
    console.log(t)
    t.foreach(function() {
      var text = $(this).text();
      console.log(text);
    });
    // const begin = f.data.search("blog-posts hfeed");
    // const end = f.data.search("adEnd")
    // var s = f.data.substring(begin+19, end-38);
    // console.log(begin, end);
    //s = replaceAll(s, "</div>", "")
    // //s.replaceAll('</div>',"");
    // //console.log(s);
    // console.log(s.length)
}
const replaceAll = (str, find, replace) => {
    var i = str.indexOf(find);
    if (i > -1){
      str = str.replace(find, replace); 
      i = i + replace.length;
      var st2 = str.substring(i);
      if(st2.indexOf(find) > -1){
        str = str.substring(0,i) + replaceAll(st2, find, replace);
      }       
    }
    return str;
  }
studyFetch();
// const d = "i am a dev "
// console.log(replaceAll(d, "dev",""));