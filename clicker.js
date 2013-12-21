var Clicker = function(){
    this.start();
};

Clicker.prototype.start = function(){
    var self = this;
    this.timer = setInterval(function(){
        self.click();
        if(self.checkGoldenCookie()){
            console.log('found golden cookie!');
            self.clickGoldenCookie();
        }
    }, 1);
};

Clicker.prototype.stop = function(){
    clearInterval(this.timer);
};

Clicker.prototype.click = function(){
    $('#bigCookie').click();
};

Clicker.prototype.checkGoldenCookie = function(){
    return $('#goldenCookie').style.display != 'none';
};

Clicker.prototype.clickGoldenCookie = function(){
    $('#goldenCookie').click();
};
