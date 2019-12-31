String.prototype.count=function(s1) { 
    return (this.length - this.replace(new RegExp(s1, Number), '').length) / s1.length;
}