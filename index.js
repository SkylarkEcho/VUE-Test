new Vue({
    el:"#app",
    data:{
        name:"MX",
        age:20
    },
    methods: {
        speak: function(){
            return "Hello World!!     "+this.name
        }
    },
})