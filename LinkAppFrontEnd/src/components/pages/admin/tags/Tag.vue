<template>
<div class="row">
    <div class="container">
        <div class="col-md-8 pt-5">
              <div v-if="currentTag" class="edit-form">
    <h4>Edit Tag</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentTag.name"
        />
      </div>

    </form>

    <button class="btn btn-danger mr-2"
      @click="deleteTag"
    >
      Delete
    </button>
    <button type="submit" class="btn btn-success"
      @click="updateTag"
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

import TagDataService from "../../../../services/TagDataService";export default {
  name: "tags",
  data() {
    return {
      currentTag: null,
      message: ''
    };
  },
  methods: {
    getTags(id) {
      TagDataService.get(id)
        .then(response => {
          this.currentTag = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePublished(status) {
      var data = {
        id: this.currentTag.id,
        title: this.currentTag.title,
        published: status
      };
      TagDataService.update(this.currentTag.id, data)
        .then(response => {
          console.log(response.data);
          this.currentTag.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateTag() {
      TagDataService.update(this.currentTag)

        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteTag() {
      TagDataService.delete(this.currentTag.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "posts" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTags(this.$route.params.id);
  }
};
</script>
<style>

</style>