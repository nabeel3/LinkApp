<template>

    <section data-bs-version="5.1" class="form7 cid-t5BHFLPqup" id="form7-n">    
 
    <div class="cotainer">
        <div class="mbr-section-head">
            <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Get in Touch</strong>
            </h3>
        </div>
        <div class="row justify-content-center mt-5 pt-4 pb-5 pt-5 card_row">
            <div class="col-lg-4 mx-auto mbr-form bg-light card_login mb-5" data-form-type="formoid">
                <div v-if="!successful">
                <Form @submit="handleLogin" :validation-schema="schema"  class="mbr-form form-with-styler mx-auto " data-form-title="Form Name">
                    <p class="mbr-text mbr-fonts-style align-center mb-4 display-7">
                       Login
                    </p>
                    <div class="row">
                        <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div>
                        <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                            Oops...! some problem!
                        </div>
                    </div>
                    <div class="dragArea row">

                        
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="email">
                            <Field type="email" name="email" placeholder="Email" data-form-field="email" class="form-control" value="" id="email-form7-n"/>
                                 <ErrorMessage name="email" class="error-feedback" />
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="name">
                            <Field type="password" name="password" placeholder="Password" data-form-field="Password" class="form-control" value="" id="name-form7-n"/>
                            <ErrorMessage name="password" class="error-feedback" />
                        </div>

                        <a class="item-subtitle mbr-fonts-style mt-1 align-right">Forgot Password</a>
                    
                        <!-- <div class="col-auto mbr-section-btn align-center">
                            <button  class="btn btn-primary display-4">Submit</button>
                        </div> -->
                            <div class="form-group">
                                <button class="btn btn-primary btn-block" :disabled="loading">
                                    <span
                                    v-show="loading"
                                    class="spinner-border spinner-border-sm"
                                    ></span>
                                <span>Login</span>
                            </button>
                            </div>
                    </div>
                </Form>
                 </div>
                  <div class="form-group">
                    <div v-if="message" class="alert alert-danger" role="alert">
                    {{ message }}
                    </div>
                  </div>
               
            </div>
        </div>
    </div>

</section>


  
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/admin");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        (data) => {
          this.$router.push("/admin");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>