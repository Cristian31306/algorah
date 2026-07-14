<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section id="hero" class="relative pt-44 pb-32 overflow-hidden bg-obsidian">
    <!-- Kinetic Mesh Glow -->
    <div class="absolute inset-0 pointer-events-none opacity-40 mesh-dark scale-150 animate-pulse"></div>
    <div class="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full -translate-y-1/2"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div 
        class="max-w-4xl mx-auto text-center transition-all duration-1000 transform"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
      >
        <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-obsidian mb-10 border-white/20">
          <span class="flex h-2 w-2 rounded-full bg-brand-primary shadow-[0_0_10px_#00A8E8]"></span>
          <span class="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-white/80">{{ $t('hero.badge', { year: new Date().getFullYear() }) }}</span>
        </div>

        <h1 class="text-6xl md:text-8xl font-display font-black leading-[1] text-white mb-10 tracking-tight">
          {{ $t('hero.title_1') }} <br />
          <span class="text-gradient italic font-medium">{{ $t('hero.title_2') }}</span>
        </h1>

        <p class="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl mx-auto mb-16 px-4">
          {{ $t('hero.desc') }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <a href="#contact" class="group relative px-12 py-6 bg-white text-obsidian rounded-full font-black overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <span class="relative z-10">{{ $t('hero.cta_1') }}</span>
          </a>
          <a href="#cases" class="px-12 py-6 glass-obsidian rounded-full font-bold text-white hover:bg-white/10 transition-all border-white/30">
            {{ $t('hero.cta_2') }}
          </a>
        </div>

        <!-- Metric Bar -->
        <div class="flex items-center justify-center gap-16 py-8 px-12 glass-obsidian rounded-[3rem] w-fit mx-auto border-white/10">
          <div class="flex flex-col gap-1 text-center">
            <span class="text-4xl font-display font-black text-white">+100</span>
            <span class="text-[0.65rem] uppercase tracking-widest text-brand-primary font-black">{{ $t('hero.metrics.projects') }}</span>
          </div>
          <div class="h-12 w-px bg-white/10"></div>
          <div class="flex flex-col gap-1 text-left">
            <span class="text-lg font-bold text-white">{{ $t('hero.metrics.scalability') }}</span>
            <span class="text-xs text-white/40 font-medium">{{ $t('hero.metrics.scalability_desc') }}</span>
          </div>
          <div class="h-12 w-px bg-white/10"></div>
          <div class="flex flex-col gap-1 text-left">
            <span class="text-lg font-bold text-white">{{ $t('hero.metrics.support') }}</span>
            <span class="text-xs text-white/40 font-medium">{{ $t('hero.metrics.support_desc') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../style.css";

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-cyan-400 to-emerald-400;
}
</style>
