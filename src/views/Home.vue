<template lang="pug">
div
  b-alert(v-if="$isAndroid" show)
    | #[b Note:] ActivityWatch on Android is in a very early stage of development. There will be bugs, but we hope you bear with us as we refine things and get it on par with the desktop version of ActivityWatch (which you should try!).

  h3 Welcome to Weekly 
  p
   span This is the Alpha test. Please provide the information below. This information will never be shared with anyone else.
  
  hr

  div.row

    div.col-md-6
      input(v-model="name", placeholder="What is your name?")
      input(v-model="age", placeholder="What is your age?")
      input(v-model="from", placeholder="Where you are from?")
      input(v-model="timeskills", placeholder="How would you describe your time management skills?")
      

      p
        span The following questions help us send you better notifications.
        input(v-model="productive_websites" placeholder="What websites would you like to spend less time on?(up to 3)")
        input(v-model="unproductive_websites" placeholder="What websites would you like to spend more time on?")
       

        b-button(variant="success" @click="submit();")
          span.d-none.d-md-inline
            |  Submit
  hr

</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
  methods: {
    submit: async function () {
      const data = { "name": this.name,"age":this.age,"from":this.from,"timeskills":this.timeskills,"productive_websites":this.productive_websites,"unproductive_websites":this.unproductive_websites };
      await axios.post(
          'api/0/userinfo',data
        ).then(result => console.log(result))
    },
  },
};
</script>
