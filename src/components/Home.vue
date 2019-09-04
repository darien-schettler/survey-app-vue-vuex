<template>
  <div> 
    <section class="jumbotron teal-background">
      <div class="text-center">
        <h2 class="font-weight-bold">Check Out Recent Surveys</h2>
      </div>
    </section>
    <div class="container-fluid">
      <section class="row mx-1 justify-content-center">
        <!-- The v-bind:key part is adding an attribute called key equal to the survey's id to each div with class "card". Vue uses these keys to keep explicit track of each node being created in the DOM which aids in bookkeeping and performance. It is recommended to always set a unique key to the outermost element being used in conjunction with a v-for directive. -->
        <div class="col-lg-4" v-for="survey in surveys" v-bind:key="survey.id">
          <div class="card m-2 border-light shadow">
            <h5 class="card-header light-teal-background">{{ survey.name }}</h5>
            <div class="card-body row justify-content-between">
              <div class="col-6 m-auto">
                <p class="font-italic">Description lorum ipsum caveat empor</p>  
              </div>
              <div class="col-4 m-auto">
                <!-- To dynamically produce the paths using the JavaScript template strings and the survey IDs 
                  being iterated over I prefix the to parameter with a colon (":"), which is shorthand for the v-bind directive. -->
                  <router-link :to="`surveys/${survey.id}`" class="btn btn-secondary rounded">Take Survey</router-link>  
              </div>    
            </div>
            <div class="card-footer">
              <p class='card-text'><span class="font-weight-bold">Date Created : </span>{{ survey.created_at.toDateString() }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>      
  </div>
</template>
<script>

/*
Vue components have a series of defined lifecycle stages that are meaningful to the developer when 
doing various things such as pulling in data using an AJAX request. In order to feed survey data into 
the Home component I will need to hook into one of the Vue lifecycle stages, specifically the beforeMount stage. 
There are several other stages that are useful for many more things than just AJAX requests (see the official Vue.js docs)

The beforeMount lifecycle stage works well for the API call because it is executed right before the mounting of our 
component begins, and right before render is called on our component. This gives it time to fetch data before being displayed to the user.

To take advantage of the beforeMount stage of the Home component all I need to do is add it as a new method to the component's 
Vue object. This function will make a call to my fetchSurveys function and assign the returned surveys to the surveys data property. 

I will use mapState to map the surveys array that resides in the state object to a computed property also called surveys. 
mapState is simply a function that maintains a reference to a specific property of the state object (state.surveys in this case), 
and if that property is mutated a component using mapState will react to that change and refresh any UI that is tied to that data.
*/
import { mapState } from 'vuex'
export default {  
 computed: mapState({
    surveys: state => state.surveys
  }),
 beforeMount() {
  this.$store.dispatch('loadSurveys')
  },
}
/*
Note that I am able to access the store and dispatch the action method with the syntax this.$store.dispatch(...). This should look similar to the way I accessed the route in the previous article using this.$route. This is because both the vue-router and the vuex library inject these objects into the Vue instance as convenience properties. I could have also accessed the store's state.surveys array from within the component using this.$store.state.surveys instead of using mapState, and I can also commit mutations using this.$store.commit
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
