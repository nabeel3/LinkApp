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
          v-model="tutorial.title"
          name="title"
        />
      </div>
      
      <div class="form-group">
        <label for="content">Content</label>
        <textarea
          class="form-control"
          id="content"
          required
          v-model="tutorial.content"
          name="content"
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
      
              <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>
      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newTutorial">Add</button>
      </div>

      <div class="form-group">
                    <div v-if="messageStatus" class="alert alert-danger" role="alert">
                      {{message.title}}

                    </div>
                  </div>
  </div>
          </div>
    </div>
</div>

</template>
<script>
import TutorialDataService from "../../../../services/TutorialDataService";
import TagDataService from "../../../../services/TagDataService";
import Multiselect from '@vueform/multiselect';

import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
    components: {
      Multiselect,
    },

  name: "add-tutorial",
  data() {
    return {
      message: [],
      options:[],
      messageStatus: false,

          option: {
            value: "",
            name: "",
         
          },
      tutorial: {
        id: null,
        title: "",
        content: "",
        avatar: [],
        avatarName: null,
        tags:[],
        published: false,
     
      },

      value: null,
      submitted: false
    };
  },
  methods: {
     retrieveTags() {
      TagDataService.getAll()
        .then(response => {
          response.data.forEach((item, index) => {
            this.option.value = item.id;
            this.option.name = item.name;
            this.options.push({ ...this.option });
          });
          
          console.log('tagssss', response.data);                         
        })
        .catch(e => {
          console.log(e);
        });
    },
      handleFileObject() {
        this.tutorial.avatar = this.$refs.file.files[0]
        this.tutorial.avatarName = this.tutorial.avatar.name
      },
    getImageFile(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = (file) => {
    this.tutorial.image = reader.result;
    }
    reader.readAsDataURL(file);
    },
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        content: this.tutorial.content,
        image: this.tutorial.avatar,
        tags: JSON.stringify(this.value),
      };
      
      TutorialDataService.create(data)
        .then(response => {

         
          if(!response.data.error)
          {
            this.tutorial.id = response.data.id;
            this.submitted = true;
          }
          if(response.data.error){
            console.log(response.data.error)
             this.message = response.data.error,
             this.messageStatus = true
             messageStatus = false
            
          }
          
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
    
  },
   mounted() {
    this.retrieveTags();
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

