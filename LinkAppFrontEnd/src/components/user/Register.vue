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
                <form @submit="handleRegister" :validation-schema="schema" method="POST" class="mbr-form form-with-styler mx-auto " data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="qLJlC8P3k5gwkWFTrTFYM5yhnwQuUmo29EImeOt6tHcUWEmE1jpOXCtm88F1PFioyslVcUBNd0z6GDXjoPhAaQowSeJ/yU3tgy51+Qc1HJorcXWly+m7P3VvY2TAUmnE">
                    <p class="mbr-text mbr-fonts-style align-center mb-4 display-7">
                     Register
                    </p>
                    <div class="row">
                        <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div>
                        <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                            Oops...! some problem!
                        </div>
                    </div>
                    <div class="dragArea row">
                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="name">
                            <input type="text" name="name" placeholder="Name" data-form-field="name" class="form-control" value="" id="name-form7-n">
                            <ErrorMessage name="name" class="error-feedback" />
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="email">
                            <input type="email" name="email" placeholder="Email" data-form-field="email" class="form-control" value="" id="email-form7-n">
                            <ErrorMessage name="email" class="error-feedback" />
                        </div>

                         <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="name">
                            <input type="text" name="password" placeholder="Password" data-form-field="password" class="form-control" value="" id="name-form7-n">
                                   <ErrorMessage name="password" class="error-feedback" />
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="name">
                            <input type="text" name="confirm_password" placeholder="Confirm Password" data-form-field="confirm_password" class="form-control" value="" id="name-form7-n">
                                   <ErrorMessage name="confirm_password" class="error-feedback" />
                        </div>
                    
                        <div class="col-auto mbr-section-btn align-center">
                            <button type="submit" class="btn btn-primary display-4">Submit</button>
                        </div>
                    </div>
                </form>
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
      name: yup
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
     confirm_password: yup
        .string()
        .required("Confimr Password is required!")
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
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
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

<style scoped>
.card_login {
    padding: 20px;
}

</style>

