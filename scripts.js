AFRAME.registerComponent("car", {

    schema:{
        moveY: {type:"number", default: 1}
    },

    tick:function(){
        window.addEventListener("click", (e)=>{
           this.data.moveY = this.data.moveY + 0.001
           var pos = this.el.getAttribute("rotation");
           pos.y = pos.y + this.data.moveY;
           this.el.setAttribute("rotation", {x: pos.x, y: pos.y, z: pos.z})
         
        });

    }
});