<template>
<div class="row">
    <div class="container">
        <div class="col-md-8">
              <div class="submit-form pt-5 mt-2">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tag.title"
          name="title"
        />
      </div>
      

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
          </div>
    </div>
</div>

</template>
<script>
import TagDataService from "../../../../services/TagDataService";

export default {


  name: "add-tags",
  data() {
    return {
      tag: {
        id: null,
        title: "",
        published: false,
      },

      
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tag.title,

      };
      TagDataService.create(data)
        .then(response => {
          this.tag.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

