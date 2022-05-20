<script setup>
import SideBar from './Side.vue'

</script>

<template>
<section data-bs-version="5.1" class="features4 cid-t5Bddm0o6l" id="features4-l">
    
    <div class="mbr-overlay"></div>
     <div class="container">
     <div class="mbr-section-head feed-text">
            <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>For You</strong></h4>
            
        </div>
     </div>
    <div class="container">
       
        <div class="row mt-4">
            <div  v-for="(post, index) in posts" class="item features-image сol-8 col-md-8 col-lg-8 ">
                <div class="bg-white p-2">
                    <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                        <div class="d-flex flex-column justify-content-start ml-2"
                        >
                        <h6 class="item-title mbr-fonts-style display-6"><strong>{{post.title}}</strong></h6>

                        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">Shared publicly - Jan 2020</h6>
                        
                        </div>
                    </div>
                    <p class="mbr-text mbr-fonts-style mt-3 display-7">{{post.content}}</p>
                </div>
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="https://r.mobirisesite.com/206376/assets/images/product2.jpg?v=1NP2wk" alt="Mobirise Website Builder" title="">
                    </div>
                    <div class="bg-red">
                        <div class="d-flex flex-row fs-12">
                            <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                            <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                            <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                        </div>

                        <div class="bg-light p-2">
                            <div class="d-flex flex-row align-items-start user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"
                            ><textarea v-model="coment.title" class="form-control ml-1 shadow-none textarea"></textarea>
                            </div>
                                <div class="mt-2 post-comment-button">
                                    <button class="btn btn-success display-4" type="button">Post comment</button>
                                    <button class="btn btn-success-outline display-4 " type="button">Cancel</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <SideBar/>
            
        </div>


    </div>

</section>
</template>
<script >
import TutorialDataService from "../services/TutorialDataService";
import ComentSevice from "../services/ComentService";
export default {
  name: "tutorials-list",
  data() {
    return {
      posts: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
       coment: {
        id: null,
        title: "",
     
      },
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
            console.log(response, "post")
          this.posts = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
   

  },
      saveComentl() {
      var data = {
        title: this.coment.title,

      };
      ComentSevice.create(data)
        .then(response => {
          this.tag.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
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
.feed-text {
    text-align: left;
}

</style>

