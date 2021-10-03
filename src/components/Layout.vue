<template>
  <div class="container">
      <header class="head">
          <slot name="head"></slot>
      </header>
      <div class="mid">
          <div class="left">
              <slot name="left"></slot>
          </div>
          <div class="right">
              <slot name="main"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    
    /* .container {
        position:absolute;
        width: 100%;
        height: 100%;
        left:0;
        top:0;
    }
    .head {
        position:absolute;
        top:0px;
        left: 0;
        right: 0;
        height: 50px;
        box-shadow: 0px 1px 7px rgba(0,0,0,.5);
        z-index: 10;
        background-color: beige;
    }
    .mid {
        position:absolute;
        top:50px;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .left {
        float: left;
        width: 250px;
        height: 100%;
    }
    .right {
        overflow: hidden;
        height: 100%;
        background-color: #e0e0e0;
    } */

    .container {        
        width: 100%;          
    }

    .head {  
        width: 100%;        
        height: 50px;    
        background-color: burlywood;        
    }


    .mid {
        width: 100%;        
        min-height: 750px;
        
    }
    .left {
        float: left;
        width: 250px;
        height: 100%;
    }
    .right {
        overflow: hidden;
        min-height: 960px;
        background-color: #e0e0e0;
    }
    

    
</style>