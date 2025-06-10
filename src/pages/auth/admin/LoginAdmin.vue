<template>
  <!-- component -->
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Inicia sesion administrador</h1>
      <form @submit.prevent="login()">
        <!-- Username Input -->
        <div class="mb-4">
          <label for="username" class="block text-gray-600">Correo</label>
          <input
            type="text"
            id="username"
            name="username"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off"
            v-model="correo"
          />
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-600">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off"
            v-model="password"
          />
        </div>
        <!-- Remember Me Checkbox -->
        <!-- Login Button -->
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Inicia Sesión
        </button>
      </form>
      <button
        type="button"
        class="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-md py-2 px-4 w-full"
        @click="goBack"
      >
        Atrás
      </button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { LoginService } from "../../../service/login.service";
import { ref } from "vue";
import Swal from "sweetalert2";
import { userRoles } from "../../../utils/constants";

const router = useRouter();
const loginService = new LoginService();
const correo = ref("");
const password = ref("");
const typeLogin = ref(userRoles.ADMIN);

const login = async () => {
  try {
    const data = await loginService.login(
      correo.value,
      password.value,
      typeLogin.value
    );
    console.log("Login successful:", data);

    if (data.ok) {
      const token = data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      sessionStorage.setItem("typeLogin", typeLogin.value);
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Inicio de sesión exitoso",
      });
      router.push({
        name: "admin",
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Correo o contraseña incorrectos",
    });
  }
};

function goBack() {
  router.push({ name: "home" });
}
</script>
