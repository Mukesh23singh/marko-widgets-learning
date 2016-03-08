module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    
    init: function(){
        console.log('hey you are in init! ', this);
        
        this.clickCount = 0;
        
        
    },
    getTemplateData: function(state, input){
        console.log('hey you are in templatedata! ', input);
         return {
            greetingName: 'bobba fett'
        };
    },
    handleButtonClick: function(event, el){
        console.log('hey you are in handlebuttonclick! ');
        this.clickCount++;
        var timesMessage = this.clickCount === 1 ? ' time' : ' times';
        this.getEl('clickCount').innerHTML = this.clickCount + timesMessage;

    }
    
});
