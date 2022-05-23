<template>
<div class="row">
    <div class="container">
        <div class="col-md-8 pt-5">
              <div v-if="currentTutorial" class="edit-form">
    <h4>Edit Post</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentTutorial.title"
        />
      </div>
      <div class="form-group">
        <label for="content">content</label>
        <textarea type="text" class="form-control" id="content"
          v-model="currentTutorial.content"
        />
      </div>

    </form>

    <button class="btn btn-danger mr-2"
      @click="deleteTutorial"
    >
      Delete
    </button>
    <button type="submit" class="btn btn-success"
      @click="updateTutorial"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>

        </div>
    </div>
</div>

</template>
<script>

import TutorialDataService from "../../../../services/TutorialDataService";
export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        content: this.currentTutorial.content,
        published: status
      };
      TutorialDataService.update(this.currentTutorial.id, data)
        .then(response => {
          console.log(response.data);
          this.currentTutorial.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateTutorial() {
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then(response => {
          console.log(response.data);
          this.retrieveTutorials();
          // this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
};
</script>
<style>

</style>