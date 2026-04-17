<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-[1000] transition-all duration-700"
    :class="[isScrolled ? 'py-4' : 'py-8']"
  >
    <div class="container mx-auto px-6">
      <nav 
        class="flex items-center justify-between px-8 py-3 rounded-full transition-all duration-700 border"
        :class="[isScrolled ? 'bg-white/90 backdrop-blur-2xl border-brand-secondary/10 shadow-2xl' : 'bg-white/5 backdrop-blur-md border-white/10']"
      >
        <a href="#" class="flex items-center gap-2 group">
          <img src="/assets/logo.webp" alt="Algorah" class="w-auto transition-all duration-700" :class="[isScrolled ? 'h-12 brightness-100' : 'h-24 brightness-0 invert']" />
        </a>

        <ul class="hidden md:flex items-center gap-12">
          <li v-for="link in [
            { label: 'Soluciones', href: '#solutions' },
            { label: 'Procesos', href: '#process' },
            { label: 'Casos', href: '#cases' }
          ]" :key="link.label">
            <a 
              :href="link.href" 
              class="text-[0.75rem] uppercase tracking-[0.3em] font-black transition-colors"
              :class="[isScrolled ? 'text-brand-secondary/60 hover:text-brand-primary' : 'text-white/60 hover:text-brand-primary']"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <a 
          href="#contact" 
          class="text-[0.7rem] font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all active:scale-95 shadow-lg"
          :class="[isScrolled ? 'bg-brand-secondary text-white hover:bg-brand-primary' : 'bg-white text-brand-secondary hover:shadow-white/20']"
        >
          Diagnóstico
        </a>
      </nav>
    </div>
  </header>
</template>
