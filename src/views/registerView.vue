<template>
    <div  class="about col-md-6 mx-auto">
      <h1>{{ nom }}</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">name</label>
          <input type="text" v-model="name" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="row">
            <div class="col">
              <!-- <input type="submit" value="Register" class="btn btn-success btn-block"> -->
              <button @click="register" type="button" class="btn btn-primary">Submit</button>
            </div>
            <div class="col">
                <RouterLink  class="btn btn-light btn-block" to="/login">Have an account? Login</RouterLink>
            </div>
          </div>
        
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'register',
    data() {
      return {
        email: '',
        name: '',
        valid: false
      }
    },
     methods: {
      register: function () {
        if (this.nom == '' || this.email == '') {
          this.valid = true;
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) == false) {
          this.$swal.fire(
            'erreur!',
            'Email invalid !',
            'error'
          )
          return;
        }
        else {
          this.valid = false;
          var data = new FormData();
          data.append('name', this.name);
          data.append('email', this.email);
          axios.post("http://localhost/cinehall/users/register", data)
            .then((res) => {
  
              if (res.status = 200) {
                swal({
                  title: "Good job!",
                  text: "You clicked the " + res.data + "!",
                  icon: "success",
                }
                ).then((result) => {
                  if (result.isConfirmed) {
  
                    // this.$router.push('/login');
                  }
                })
              }
            }
            )
        }
      }
    },
  }
  </script>
  