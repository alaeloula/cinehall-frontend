<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item">
                            <h1></h1>
                            <RouterLink class="nav-link active" aria-current="page" to="/home">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/about">About</RouterLink>
                        </li>
                        <div class="ms-auto" v-if="isUser"  style="display: flex; justify-content: flex-start;">
                            <li class="nav-item">
                                {{ nom }}
                            </li>
                            <li @click="logout" class="nav-item">
                                logout
                            </li>
                            
                        </div>
                        <div v-else>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <RouterLink class="dropdown-item" to="/register">register</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink class="dropdown-item" to="/login">login</RouterLink>
                                    </li>
                                </ul>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import Cookies from "vue-cookies";
export default {
    name: "NavBar",
    props: {
        isUser: Boolean,
    },
    data() {
        return {
            nom: '',
            email: ''
        }
    },
    mounted() {
        this.nom = Cookies.get('nom');
        this.email = Cookies.get('email');
    },
    methods: {
        logout: function () {
            Cookies.remove('token');
            Cookies.remove('email');
            Cookies.remove('nom');
            this.$router.push('/');
        }
    }

}
</script>
