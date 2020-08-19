var elements = document.domain.split (".");
elements.reverse();
var sevenDays = new Date ((new Date()).getTime() + 604800000);
document.cookie = 'Amnc=N; expires=' + sevenDays.toGMTString() + '; domain=' + elements[1] + '.' + elements[0] + '; Path=/';
document.cookie = 'Amnu=; domain=' + elements[1] + '.' + elements[0] + '; Path=/';
