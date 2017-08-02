<template>
<div class="">
   <todo></todo>
</div>
</template>

<script>
//Import Vue Component we previously defined
import todo from "./common/todo-list-example"
 export default {
   //Tell the Vue that we are using that component
   components: {
      todo
   }
 }
</script>
