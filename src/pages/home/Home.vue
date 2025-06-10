<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex gap-8">
      <div
        class="bg-white rounded-xl shadow-md px-10 py-8 cursor-pointer text-center border-t-4 border-blue-600 hover:shadow-lg transition"
        @click="redirect('/auth/admin')"
      >
        <h2 class="text-2xl font-semibold text-blue-700">
          Iniciar sesión como Administrador
        </h2>
      </div>
      <div
        class="bg-white rounded-xl shadow-md px-10 py-8 cursor-pointer text-center border-t-4 border-green-600 hover:shadow-lg transition"
        @click="redirect('/auth/student')"
      >
        <h2 class="text-2xl font-semibold text-green-700">
          Iniciar sesión como Estudiante
        </h2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function redirect(path) {
  router.push(path);
}
</script>
