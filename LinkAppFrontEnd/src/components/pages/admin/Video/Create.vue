<template>
<div class="row">
    <div class="container">
        <div class="col-md-8">
          Create Video
              <div class="submit-form pt-5 mt-2">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="video.title"
          name="title"
        />
      </div>
      
      <div class="form-group">
        <label for="content">Content</label>
        <textarea
          class="form-control"
          id="content"
          required
          v-model="video.content"
          name="content"
        />
      </div>
          <upload-media 
          server="/api/upload"
          error="@error('media'){{$message}}@enderror">
          </upload-media>
       <Multiselect
        v-model="video.tags"
        mode="tags"
        :close-on-select="false"
        :searchable="true"
        :create-option="true"
        :options="[
            { value: '1', label: 'Batman' },
            { value: '2', label: 'Robin' },
            { value: '3', label: 'Joker' },
        ]"
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

import VideoDataService from "../../../../services/VideoService";
import Multiselect from '@vueform/multiselect'
export default {
    components: {
      Multiselect,
    },

  name: "add-video",
  data() {
    return {
      video: {
        id: null,
        title: "",
        content: "",
        tags:[],
        published: false,
     
      },
        value: null,
         options: [
          { value: 'captainamerica', name: 'Captain America', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/03_-_Captain_America_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
          { value: 'spiderman', name: 'Spiderman', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/12_-_Spiderman_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
          { value: 'ironman', name: 'Iron Man', icon: 'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/02_-_IRONMAN_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png' },
        ],
      
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.video.title,
        content: this.video.content,
        tags: this.video.tags
      };
      VideoDataService.create(data)
        .then(response => {
          this.video.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.video = {};
    }
  }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

