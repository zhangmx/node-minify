cb.tools={};cb.tools.substitute=function(e,a){var b,d,c,f=a.length;for(b=0;b<f;b++){d="\\{"+b+"\\}";c=new RegExp(d,"g");e=e.replace(c,a[b])}return e};