<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const hasConsented = localStorage.getItem('algorah_cookie_consent')
  if (!hasConsented) {
    // Retrasar la aparición ligeramente para no abrumar al instante
    setTimeout(() => {
      isVisible.value = true
    }, 1500)
  }
})

const emit = defineEmits(['open-legal'])

const acceptCookies = () => {
  localStorage.setItem('algorah_cookie_consent', 'true')
  isVisible.value = false
}

const rejectCookies = () => {
  localStorage.setItem('algorah_cookie_consent', 'false')
  isVisible.value = false
}
</script>

<template>
  <transition name="slide-up">
    <div v-if="isVisible" class="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md bg-obsidian/95 backdrop-blur-xl border border-brand-primary/20 p-6 rounded-3xl shadow-2xl z-[9999]">
      <div class="flex items-start gap-4">
        <div class="h-10 w-10 shrink-0 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
          <i class="ph-duotone ph-cookie text-2xl"></i>
        </div>
        <div>
          <h4 class="text-white font-bold mb-2 text-sm">Privacidad y Cookies</h4>
          <p class="text-white/60 text-xs leading-relaxed mb-4">
            Utilizamos analíticas y cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de tratamiento de datos acorde a las normativas vigentes.
          </p>
          <div class="flex flex-wrap gap-3">
            <button @click="acceptCookies" class="px-5 py-2 bg-brand-primary text-obsidian font-bold text-xs rounded-full hover:shadow-[0_0_15px_rgba(0,168,232,0.4)] hover:scale-105 transition-all">
              Aceptar Todo
            </button>
            <button @click="rejectCookies" class="px-5 py-2 bg-white/5 text-white font-bold text-xs rounded-full hover:bg-white/10 transition-colors">
              Rechazar
            </button>
            <button @click.prevent="emit('open-legal', 'privacy')" class="px-5 py-2 text-brand-primary font-bold text-xs hover:underline transition-colors">
              Leer Políticas
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
