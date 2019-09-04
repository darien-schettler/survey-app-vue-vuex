<!--  
The App.vue file serves as the top level application components and often contains the general layout of the application. 
Vue components have a specific structure containing:
    1. <template> section for component-specific HTML
    2. <script> section to define the Vue object and that component's behaviors implemented in JavaScript
    3. <styles> section for CSS / SCSS rules 

That last bit can be a bit confusing though because by default the style rules you define in a component do not just pertain 
to that component. They actually affect all the elements in the entire project unless you add a scoped attribute to the <style> element. 
-->

<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>
<!-- To ensure that app-header is included in every page of the application I place it in the App.vue component. 

To do this I first import the Header component as AppHeader in the script section.
Then register it by adding a property called components on the App component's Vue object
  -- set it equal to an object containing the AppHeader component.

I then add the component in the template placing <app-header> right above the <router-view> component. 
When naming components it's common to use Pascal case concatenating the words describing it together 
where each word's first letter is capitalized. 

Then I include it in the template in all lowercase with hyphens between each word that began with a capitalized letter. -->
<script>
import AppHeader from '@/components/Header'
export default {
  name: 'App',
  components: { AppHeader }
}
</script>

<style lang="scss">
$teal: #00D1B2;

.teal-background{
  background-color: $teal;
  color: white;
}
.light-teal-background{
  background-color: rgba(0, 209, 178, 0.25);
  color: black;
}
.text-teal{
  color: $teal;
}
.cursor-event{
  cursor: pointer;
}

</style>
