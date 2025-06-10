<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white rounded-xl shadow-md px-10 py-8 text-center">
      <h1 class="text-3xl font-bold text-blue-700">Hola, soy un estudiante</h1>
      <button
        class="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4"
        @click="logout"
      >
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function logout() {
  sessionStorage.removeItem("role");
  router.push("/");
}
</script>
