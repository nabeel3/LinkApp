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
       <!-- <div class="form-group">
             <input type="file" placeholder="image" class="form-control form-control-alternative" v-on:change="getImageFile">
        </div> -->
        <div class="custom-file">
                    <!-- MOST IMPORTANT - SEE "ref" AND "@change" PROPERTIES -->
                    <input type="file" multiple required class="custom-file-input" id="customFile" 
                        ref="file" @change="handleFileObject()">
                    <label class="custom-file-label text-left" for="customFile">{{ avatarName }}</label>
                  </div>
            <Multiselect
            v-model="value"
            mode="tags"
            label="name"
            :searchable="true"
            :create-option="true"
            :options="tags"
            />
      
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
import TutorialDataService from "../../../../services/TutorialDataService";
import TagDataService from "../../../../services/TagDataService";
import Multiselect from '@vueform/multiselect'
export default {
    components: {
      Multiselect,
    },

  name: "add-tutorial",
  data() {
    return {
      tags:[],
      tutorial: {
        id: null,
        title: "",
        content: "",
        avatar: null,
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
          this.tags = response.data;
          console.log('tagssss', response.data);
            // let newTags = [];
            //     if (response.data) {
            //         response.data.forEach(element => {
            //             newTags.push(
            //                 { 
            //                     "value" : element.id,
            //                     "label" : element.name, 
            //                 })
            //         });
            //     }
                         
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
        tags: this.tutorial.tags,
        image: this.tutorial.avatar,
      };
      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
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
    
  },
   mounted() {
    this.retrieveTags();
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

