<script setup>

</script>

<template>

            <div class="item features-image сol-4 col-md-4 col-lg-4 ">
                <div class="bg-white" style="padding:20px">
                     <h6 class="item-title mbr-fonts-style display-6"><strong>Popular Tag</strong></h6>
                     
                     <button class="btn btn-success display-4">
                         Tag1
                     </button>
                      <button class="btn btn-success display-4">
                         Tag1
                     </button>
                      <button class="btn btn-success display-4">
                         Tag1
                     </button>
                    
                     
                </div>
           
            </div>

</template>
<script>
import TagDataService from "../services/TagDataService";
export default {
  name: "tag-list",
  data() {
    return {
      tags: [],

    };
  },
  methods: {
    retrieveTutorials() {
      TagDataService.getAll()
        .then(response => {
            console.log(response, 'responseresponse')
          this.tags = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    

  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>


<style scoped>
body{background: #eee}.date{font-size: 11px}
.comment-text{font-size: 12px}
.fs-12{font-size: 12px}
.shadow-none{box-shadow: none}
.name{color: #007bff}
.cursor:hover{color: blue}
.cursor{cursor: pointer}
.textarea{resize: none}
.user-info img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    margin-top: 10px;
}
.post-comment-button{
    float: right;
}
.cid-t5Bddm0o6l .item-wrapper {
    position: relative;
    border-radius: 4px;
    background: #ffffff;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
}

</style>

