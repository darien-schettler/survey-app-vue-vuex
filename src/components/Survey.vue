<template>  
	<div>
		<section class="jumbotron teal-background">
			<div class="text-center">
				<h2 class="font-weight-bold">{{ survey.name }}</h2>
			</div>
		</section>
		<div class="container-fluid">
			<section class="row justify-content-center">        
				<div class="col-lg-7">
					<div v-for="(question, idx) in survey.questions" v-bind:key="question.id" v-show="currentQuestion === idx">
						<div class="row shadow-sm border-light card my-4">
							<div class="col-12 py-5 mb-3 light-teal-background">
								<h5 class='m-0 p-0 text-center font-weight-bolder'>{{ question.text }}</h5>
							</div>
							<div class="col-10">
								<div class="form-check ml-2 mb-3">
									<div v-for="choice in question.choices" v-bind:key="choice.id">
										<div class= my-1>											
											<label class="ml-1 form-check-label">
												<input class="form-check-input" type="radio" v-model="question.choice" :value="choice.id">
												{{ choice.text }}
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- new pagination buttons -->
		              <nav class="pagination justify-content-between" role="navigation" aria-label="pagination">
		                
		                <a class="btn btn-primary cursor-event px-4 shadow-sm text-center text-white font-weight-bolder" 
		                @click.stop="goToPreviousQuestion">
		            		Back
		            	</a>
		                
		            	<a v-if="surveyComplete" class='btn btn-dark shadow-sm text-white px-5 text-center font-weight-bolder cursor-event'
		            	@click.stop="handleSubmit">
		            		Submit
		            	</a>

		                <a class="btn btn-primary cursor-event px-4 shadow-sm text-center text-white font-weight-bolder" 
		                @click.stop="goToNextQuestion">
		            		Next
		            	</a>
		              
		              </nav>
					</div>
				</div>
			</section>
		</div>      
	</div>
</template>

<script>  
import { saveSurveyResponse } from '@/api'  
export default {  
  data() {
    return {
      currentQuestion: 0
    }
  },
  beforeMount() {
    this.$store.dispatch('loadSurvey', { id: parseInt(this.$route.params.id) })
  },
  methods: {
    goToNextQuestion() {
      if (this.currentQuestion === this.survey.questions.length - 1) {
        this.currentQuestion = 0
      } else {
        this.currentQuestion++
      }
    },
    goToPreviousQuestion() {
      if (this.currentQuestion === 0) {
        this.currentQuestion = this.survey.questions.length - 1
      } else {
        this.currentQuestion--
      }
    },
    handleSubmit() {
      saveSurveyResponse(this.survey)
        .then(() => this.$router.push('/'))
    }
  },
  computed: {  // new Vue obj member
    surveyComplete() {
      if (this.survey.questions) {
        const numQuestions = this.survey.questions.length
        console.log(numQuestions)
        const numCompleted = this.survey.questions.filter(q => q.choice).length
        console.log(numCompleted)
        return numQuestions === numCompleted
      }
      return false
    },
    survey() {
      return this.$store.state.currentSurvey
    }
  }
}
</script>

<style>

</style>  