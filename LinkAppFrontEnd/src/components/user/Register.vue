<template>
  



    <section data-bs-version="5.1" class="form7 cid-t5BHFLPqup" id="form7-n">    
 
    <div class="cotainer">
        <div class="mbr-section-head">
            <h3 class="mbr-section-title pt-5 mbr-fonts-style align-center mb-0 display-5">
                  <strong>Welcome to Larasoft - LinkedApp</strong>
                 <div class="align-center mt-5">
                <img src="https://larasoft.io/assets/img/logo-colour.webp" class="w-25"  style="display:inline" />

             </div>
            </h3>
        </div>
        <div class="row justify-content-center mt-5 pt-4 pb-5 pt-5 card_row">
            <div class="col-lg-4 mx-auto mbr-form bg-light card_login mb-5" data-form-type="formoid">
                <div v-if="!successful">
                <Form @submit="handleRegister" :validation-schema="schema"  class="mbr-form form-with-styler mx-auto " data-form-title="Form Name">
                    <p class="mbr-text mbr-fonts-style pt-3 align-center mb-4 display-7">
                       Register
                    </p>
                    <div class="row">
                        <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div>
                        <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                            Oops...! some problem!
                        </div>
                    </div>
                    <div class="dragArea row">

                       <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="email">
                            <Field type="email" name="username" placeholder="User name" data-form-field="username" class="form-control" value="" id="email-form7-n"/>
                                 <ErrorMessage name="username" class="error-feedback" />
                        </div>

                        
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="email">
                            <Field type="email" name="email" placeholder="Email" data-form-field="email" class="form-control" value="" id="email-form7-n"/>
                                 <ErrorMessage name="email" class="error-feedback" />
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="name">
                            <Field type="password" name="password" placeholder="Password" data-form-field="Password" class="form-control" value="" id="name-form7-n"/>
                            <ErrorMessage name="password" class="error-feedback" />
                        </div>

                        <RouterLink to="/login" class="pb-2 item-subtitle mbr-fonts-style mt-1 align-right">Back to Login</RouterLink>

                        <!-- <a class="item-subtitle mbr-fonts-style mt-1 align-right">Forgot Password</a> -->
                    
                        <!-- <div class="col-auto mbr-section-btn align-center">
                            <button  class="btn btn-primary display-4">Submit</button>
                        </div> -->
                            <div class="form-group">
                                <button class="btn btn-primary btn-block" :disabled="loading">
                                    <span
                                    v-show="loading"
                                    class="spinner-border spinner-border-sm"
                                    ></span>
                                <span>Register</span>
                            </button>
                            </div>
                    </div>
                </Form>
                 </div>
                <div
                  v-if="message"
                  class="alert"
                  :class="successful ? 'alert-success' : 'alert-danger'"
                  >
                  {{ message }}
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
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/admin");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
           if (data.success == true) {
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('AccessToken', JSON.stringify(data.token));
            this.$router.go("/admin");

          }
          this.message = data.message;
          this.successful = true;
          this.loading = false;
     
          
        },
        (error) => {
          console.log('lalalalalala', error.email[0]);
          this.message =
            (error.email[0] &&
              error.email[0] &&
              error.email[0]) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
