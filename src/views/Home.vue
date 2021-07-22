<template >




<div style="background-image: url(static/gray-bg.png);">
    <div class="fullWidth">
        <div class="innerWidth">
            <p class="firstPara">Welcome to the</p>
            <hr class="hr" >
            <p class="secondPara" >
            <img class="image" src="static/head.png"></p>
            <hr class="hr" >
            <p class="thirdPara">
               Alpha test
            </p>
            <p class="txtcenter">
            <button type="button" class="btnDownload" >Download Weekly!!</button></p>
            <p class="fourthPara"></p>
            <p class="fifthPara">Please provide the information below. This information will never be shared with anyone else.</p>
            <p class="sixthPara">
            <input type="text" id='name' placeholder="What is your name?" class="txtName"></p>   
            
            <p class="seventhPara">
            <input type="text" id='age' placeholder="What is your age?" class="txtAge"></p>
            <p class="eigtPara">
            <input type="text" id='from' placeholder="Where are you from? (Country)" class="txtFrom"></p>


        <p class="ninePara">

        <input type="text" placeholder="How would you describe your time management skills" class="txtTime"></p>    
         <p class="tenPara">
            The Following questions help us send you better nofitications. </p>
            <p><select id="" name="" style="select">
                <option>What websites would you like to spend less time on?(up to 3)</option>
                <option>What websites would you like to spend less time on?(up to 4)</option>
                <option>What websites would you like to spend less time on?(up to 5)</option>
              </select></p>

              <p class="elevenPara">
                <input type="text" placeholder="What websites wolud you like to spend less time on? Include URL" class="inputurl"></p>    
          <p class='twelvePara'>      
          <button class="v-button" type='submit' @click="submit()">Submit</button></p>
        </div>
</div>

</div>


</template>
<script>
import axios from 'axios'
export default {
  name: 'Home',
  methods: {
    submit: async function () {
      const data = { "name": document.getElementById('name').value,"age":document.getElementById('age').value,"from":document.getElementById('from').value,"timeskills":this.timeskills,"productive_websites":this.productive_websites,"unproductive_websites":this.unproductive_websites };
      console.log(data)
      await axios.post(
          'api/0/userinfo',data
        ).then(result => console.log(result))
    },
  },
};
</script>
