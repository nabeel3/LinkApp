<script setup>
import SideBar from './Side.vue'

</script>

<template>
    <section data-bs-version="5.1" class="features4 cid-t5Bddm0o6l" id="features4-l">
        
        <div class="mbr-overlay"></div>
        <div class="container">
        <div class="d-inline">
              
                    <button @click="postStatusScreen"  class="btn btn-primary" >Latest Post</button>
                    <button class="btn btn-primary" @click="watchVideoScrenn"> Watch </button>
                
        </div>

        </div>
        <div class="container">
        
            <div class="row mt-4">

             <div v-if="watchVideoStatus" v-for="(post, index) in posts" class="item features-image сol-8 col-md-8 col-lg-8 ">
                    <div class="bg-white p-2">
                        <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                            <div class="d-flex flex-column justify-content-start ml-2"
                            >
                        

                            <h6 class="item-title mbr-fonts-style display-6"><strong>Watchcccc </strong></h6>


                            <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">Shared publicly - Jan 2020</h6>
                            
                            </div>
                        </div>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7"></p>
                    </div>
                   
                </div>

                <div v-if="postStatus"  v-for="(post, index) in posts" class="item features-image сol-8 col-md-8 col-lg-8 ">
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
                      <div v-if="post.image">
                        <div class="item-img">
                          
                            <img :src="post.image" alt="Mobirise Website Builder" title="">
                        </div>

                      </div>
                      <div v-else>
                        <div class="item-img">
                            <img src="https://r.mobirisesite.com/206376/assets/images/product2.jpg?v=1NP2wk"  alt="Mobirise Website Builder" title="">
                        </div>
                         </div>
                        
                        <div class="bg-red">
                            <div class="d-flex flex-row fs-12">
                                <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                                <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                                <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                            </div>

                            <div class="bg-light p-2">
                                <div v-if="post.comments">
                                    <div v-for="comment in post.comments"> 
                                      <h1>Comments</h1>
                                      <div class="comment mt-4 text-justify float-left">
                                        <img src="https://i.imgur.com/yTFUilP.jpg" alt="" style="width:20px; height:20px" class="rounded-circle" width="40" >
                                        <h4>{{comment.user.email}}</h4>
                                        <span>{{comment.user.created_at}}</span>
                                        <br>
                                        <p>{{comment.comment}}</p>
                                        <button  @click="replycomment()"   class="like p-2 cursor"><i class="fa fa-fa-reply"></i><span class="ml-1">Reply</span></button>
                                    </div>
                                    <div v-if="comment.replies">
                                    <div v-for="reply in comment.replies"> 
                                        <div class="comment mt-4 ml-4 pl-4 text-justify" style="margin-left:30px">
                                            <img src="https://i.imgur.com/yTFUilP.jpg" alt="" style="width:20px; height:20px" class="rounded-circle" width="40" >
                                            <h4>{{reply.user.email}}</h4>
                                            <span class="item-subtitle mbr-fonts-style mt-1 display-7">{{reply.user.created_at}}</span>
                                            <br>
                                            <p>{{reply.comment}}</p>
                                            <button  @click="replycomment()"   class="like p-2 cursor"><i class="fa fa-fa-reply"></i><span class="ml-1">Reply</span></button>
                                        </div>
                                    </div>
                                    </div>
                                        <div v-if="replyStatus" > 
                                            <textarea   v-model="reply.title" class="form-control ml-1 shadow-none textarea"></textarea>
                                            <button  @click="replycommentSend({'post_id':post.id,'comment_id': comment.id })"  class="btn btn-success display-4" type="button"> Reply</button>
                                        </div>
                                     </div>
                                </div>

                                <div class="d-flex flex-row align-items-start user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"
                                >
                                <textarea   v-model="comment.title" class="form-control ml-1 shadow-none textarea"></textarea>
                                </div>
                                    <div class="mt-2 post-comment-button">
                                        <button  @click="savecomment(post.id)"  class="btn btn-success display-4" type="button">Post comment</button>
                                        <button   class="btn btn-success-outline display-4 " type="button">Cancel</button>
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
import commentSevice from "../services/CommentService";
export default {
  name: "tutorials-list",
  data() {
    return {
      posts: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
      replyStatus: false,
      watchVideoStatus: false,
      postStatus: true,
       comment: {
        post_id: null,
        title: "",
     
      },
       reply: {
        title: "",
     
      },
    };
  },
  methods: {
    retrieveTutorials() {
          let userToken = JSON.parse(localStorage.getItem('AccessToken'));
          console.log('userToken', userToken)
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
       savecomment(id) {
        let user = JSON.parse(localStorage.getItem('user'));
        var data = {
         
        title: this.comment.title,
        post_id: id,
        user: user,
        

      };

      commentSevice.createcomment(data)
        .then(response => {
            console.log(response);
            this.retrieveTutorials()
        //   this.tag.id = response.data.id;
        //   console.log(response.data);
        //   this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
     replycomment() {

            this.replyStatus = true;
     },
     watchVideoScrenn(){
         this.watchVideoStatus = true;
         this.postStatus = false;
     },
       postStatusScreen(){
         this.watchVideoStatus = false;
         this.postStatus = true;
     },
     
      replycommentSend(data) {

        let user = JSON.parse(localStorage.getItem('user'));
        var data = {
         
        title: this.reply.title,
        post_id: data.post_id,
        comment_id: data.comment_id,
        user: user,
        

      };

      commentSevice.createReply(data)
        .then(response => {
            console.log(response);
            this.retrieveTutorials();
            this.replyStatus = false;
        //   this.tag.id = response.data.id;
        //   console.log(response.data);
        //   this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
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
.feed-text {
    text-align: left;
}

</style>

