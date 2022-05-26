<template>
<div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Posts <b>Details</b></h2></div>
                    <div class="col-sm-4">
                        <RouterLink to='/add' type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</RouterLink>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Content</th>
                      
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tutorial, index) in tutorials">
                        <td> {{ tutorial.title }}</td>
                         <td> {{ tutorial.content }}</td>

                        <td class="d-inline-flex">
							              <!-- <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a> -->
                             <a   @click="showTutorial(tutorial.id)" class="view" data-bs-toggle="modal" data-bs-target="#exampleModal" title="view" data-toggle="tooltip"><i class="fa fa-eye"></i></a>
                            <RouterLink class="edit" :to="'/post/' + tutorial.id" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></RouterLink>
                            <a   @click="deleteTutorial(tutorial.id)" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
                           

                            
                        </td>
                    </tr>
                  
                </tbody>
            </table>
        </div>

        



<!-- Modal -->

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="height:auto">
      <div class="modal-header">
        <h5 class="modal-title text-danger" id="exampleModalLabel">Detail</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" v-if="currentTutorial">


                        <div  class="item features-image сol-8 col-md-8 col-lg-8 ">
                    <div class="bg-white p-2">
                        <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                            <div class="d-flex flex-column justify-content-start ml-2"
                            >
                        

                            <h6 class="item-title mbr-fonts-style display-6"><strong>{{currentTutorial.title}}</strong></h6>


                            <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">Shared publicly - Jan 2020</h6>
                            
                            </div>
                        </div>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7">{{currentTutorial.content}}</p>
                    </div>
                    <div class="item-wrapper">
                      <div v-if="currentTutorial.image">
                        <div class="item-img">
                        <video width="320" height="240" controls>
                          <source :src="currentTutorial.image" type="video/mp4">
                        </video>
      
                          
                        </div>

                      </div>
                        <div v-if="currentTutorial.tags"> 
                          <div v-for="(tag, index) in currentTutorial.tags" style="display: inherit;"> 
                           <button class="btn btn-success display-4">
                             {{tag.name}}
                          </button>
                          </div>
                        </div>

                        <div v-if="currentTutorial.comments"> 
                          <div v-for="(comment, index) in currentTutorial.comments" style="display: inherit;"> 
                             <div class=" mt-4 text-justify float-left">
                                        <img src="https://i.imgur.com/yTFUilP.jpg" alt="" style="width:20px; height:20px" class="rounded-circle" width="40" >
                                        <h4>{{comment.user.email}}</h4>
                                        <span>{{comment.user.created_at}}</span>
                                        <br>
                                        <p>{{comment.comment}}</p>
                                    </div>

                                  <div v-if="comment.replies"> 
                                    <div v-for="(reply, index) in comment.replies" style="display: inherit; margin-left:30px "> 
                                      <div class=" mt-4 text-justify float-left">
                                      <img src="https://i.imgur.com/yTFUilP.jpg" alt="" style="width:20px; height:20px" class="rounded-circle" width="40" >
                                      <h4>{{reply.user.email}}</h4>
                                      <span>{{reply.user.created_at}}</span>
                                      <br>
                                      <p>{{reply.comment}}</p>
                                      </div>
                                    </div>
                                  </div>
                          </div>
                        </div>



                        
                        <div class="bg-red">

                            <!-- <div class="bg-light p-2">
                                <div v-if="currentTutorial.comments">
                                    <div v-for="comment in currentTutorial.comments"> 
                                      <h1>Comments</h1>
                                      <div class=" mt-4 text-justify float-left">
                                        <img src="https://i.imgur.com/yTFUilP.jpg" alt="" style="width:20px; height:20px" class="rounded-circle" width="40" >
                                        <h4>{{comment.user.email}}</h4>
                                        <span>{{comment.user.created_at}}</span>
                                        <br>
                                        <p>{{comment.comment}}</p>
                                        <button  @click="replycomment()"   class="like p-2 cursor"><i class="fa fa-fa-reply"></i><span class="ml-1">Reply</span></button>
                                    </div>
                                    <div v-if="comment.replies">
                                    <div v-for="reply in comment.replies"> 
                                        <div class="" style="margin-left:30px">
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
                            </div> -->
                        </div>
                    </div>
                </div>
         
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>








    </div>    

</template>
<script>
import TutorialDataService from "../../../../services/TutorialDataService";
import commentSevice from "../../../../services/CommentService";
import { watch } from "vue";
export default {
  name: "tutorials-list",
  
  data() {
    return {

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
      
      ShowModalStatus: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },


  methods: {
    
    retrieveTutorials() {

      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;

        })
        .catch(e => {
          console.log(e);
        });
    },
     deleteTutorial(id) {
     if(confirm("Do you really want to delete?")){
      TutorialDataService.delete(id)
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
    showTutorial(id){
       TutorialDataService.get(id)
        .then(response => {
          this.currentTutorial = response.data;
          console.log('HELLO', response.data);
          this.ShowModalStatus = true
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
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
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
     },      replycommentSend(data) {

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
        })
        .catch(e => {
          console.log(e);
        });
    },
  },

    mounted: function() {
      console.log("Mounted!")
        this.retrieveTutorials();
    },
};

</script>
<style>
	.table-wrapper {
		width: 700px;
		margin: 30px auto;
        background: #fff;
        padding: 20px;	
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
    .table-title {
        padding-bottom: 10px;
        margin: 0 0 10px;
    }
    .table-title h2 {
        margin: 6px 0 0;
        font-size: 22px;
    }
    .table-title .add-new {
        float: right;
		height: 30px;
		font-weight: bold;
		font-size: 12px;
		text-shadow: none;
		min-width: 100px;
		border-radius: 50px;
		line-height: 13px;
    }
	.table-title .add-new i {
		margin-right: 4px;
	}
    table.table {
        table-layout: fixed;
    }
    table.table tr th, table.table tr td {
        border-color: #e9e9e9;
    }
    table.table th i {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
    }
    table.table th:last-child {
        width: 100px;
    }
    table.table td a {
		cursor: pointer;
        display: inline-block;
        margin: 0 5px;
		min-width: 24px;
    }    
	table.table td a.add {
        color: #27C46B;
    }
    table.table td a.edit {
        color: #FFC107;
    }
    table.table td a.delete {
        color: #E34724;
    }
    table.table td i {
        font-size: 19px;
    }
	table.table td a.add i {
        font-size: 24px;
    	margin-right: -1px;
        position: relative;
        top: 3px;
    }    
    table.table .form-control {
        height: 32px;
        line-height: 32px;
        box-shadow: none;
        border-radius: 2px;
    }
	table.table .form-control.error {
		border-color: #f50000;
	}
	table.table td .add {
		display: none;
	}
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