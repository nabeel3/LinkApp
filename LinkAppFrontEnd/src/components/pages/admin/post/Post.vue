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

       <div class="form-group">
                    <!-- MOST IMPORTANT - SEE "ref" AND "@change" PROPERTIES -->
                    <input type="file" multiple required class="custom-file-input" id="customFile" 
                        ref="file" @change="handleFileObject()">
                    <label class="custom-file-label text-left" for="customFile">{{ avatarName }}</label>
         </div>

      <Multiselect
              v-model="value"
              mode="tags"
              :select="selects"
              placeholder="Choose your tags"
              :close-on-select="false"
              :filter-results="false"
              :min-chars="1"
              :resolve-on-load="false"
              :delay="0"
              :searchable="true"
              label="name"
              track-by="value"
              :options="options"
              />

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
import TagDataService from "../../../../services/TagDataService";
import Multiselect from '@vueform/multiselect';
export default {
   components: {
      Multiselect,
    },
  
  name: "tutorial",
  data() {
    return {
       options:[],
       selects:[],
       select: {
         value: "",
         name: "",
       },
        option: {
            value: "",
            name: "",
          },
        tutorial: {

        avatar: [],
        avatarName: null,
        published: false,
     
      },
      currentTutorial: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
           response.data.tags.forEach((item, index) => {
            this.select.value = item.id;
            this.selects.name = item.name;
            this.options.push({ ...this.select });
          });
         
          
     
        })
        .catch(e => {
          console.log(e);
        });
    },

      retrieveTags() {
      TagDataService.getAll()
        .then(response => {
          response.data.forEach((item, index) => {
            this.option.value = item.id;
            this.option.name = item.name;
            this.options.push({ ...this.option });
          });
          
                                
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
     handleFileObject() {
        this.tutorial.avatar = this.$refs.file.files[0]
        this.tutorial.avatarName = this.tutorial.avatar.name
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
    this.retrieveTags()
  }
};
</script>
<style>

</style>
<style src="@vueform/multiselect/themes/default.css"></style>