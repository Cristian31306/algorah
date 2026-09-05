<script setup>
</script>

<template>
  <section id="team" class="py-32 bg-[#F8FAFC] relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-24 max-w-3xl mx-auto">
        <span class="text-brand-primary font-bold uppercase tracking-[0.4em] text-[0.7rem] mb-6 block flex items-center justify-center gap-2">
          <span class="h-2 w-2 bg-brand-primary rounded-full animate-pulse"></span>
          {{ $t('team.badge') }}
        </span>
        <h2 class="text-5xl md:text-7xl font-display font-black text-brand-secondary mb-8 leading-tight italic">{{ $t('team.title') }}</h2>
        <p class="text-xl text-brand-secondary/70 font-medium leading-relaxed">
          {{ $t('team.desc') }}
        </p>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
        <!-- Director Profile -->
        <div class="w-full lg:w-5/12">
          <div class="group relative w-full bg-white p-8 rounded-[3rem] border border-brand-secondary/5 hover:border-brand-primary/30 transition-all duration-700 shadow-xl hover:shadow-2xl overflow-hidden text-center">
            <div class="absolute inset-0 bg-gradient-to-t from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div class="relative w-full aspect-square max-w-[320px] mx-auto rounded-[2.5rem] overflow-hidden mb-8 shadow-inner border border-brand-secondary/5">
              <div class="absolute inset-0 bg-brand-secondary/10 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
              <img src="/assets/image_cristian.webp" loading="lazy" alt="Cristian - CTO" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
              
              <div class="absolute bottom-4 right-4 h-12 w-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center z-20 shadow-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <i class="ph-duotone ph-code text-2xl"></i>
              </div>
            </div>
            
            <h3 class="text-4xl font-display font-bold text-brand-secondary mb-3">Cristian</h3>
            <p class="text-[0.7rem] font-black uppercase tracking-[0.2em] text-brand-primary">{{ $t('team.roles.cto') }}</p>
          </div>
        </div>

        <!-- Squad Description -->
        <div class="w-full lg:w-7/12 flex flex-col gap-6">
          <div class="bg-obsidian text-white p-10 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/10 group hover:border-brand-primary/40 transition-colors duration-500">
            <div class="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 class="text-3xl font-display font-bold mb-2 relative z-10">{{ $t('team.squad.title') }}</h3>
            <p class="text-brand-primary font-bold uppercase tracking-widest text-xs mb-10 relative z-10">{{ $t('team.squad.subtitle') }}</p>
            
            <div class="flex flex-col gap-6 relative z-10">
              <div class="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div class="h-14 w-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  <i class="ph-duotone ph-terminal-window text-2xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">{{ $t('team.squad.dev') }}</h4>
                  <p class="text-white/50 text-sm">Escalabilidad y arquitectura limpia.</p>
                </div>
              </div>
              
              <div class="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div class="h-14 w-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  <i class="ph-duotone ph-bezier-curve text-2xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">{{ $t('team.squad.design') }}</h4>
                  <p class="text-white/50 text-sm">Interfaces que convierten y enamoran.</p>
                </div>
              </div>
              
              <div class="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div class="h-14 w-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                  <i class="ph-duotone ph-database text-2xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">{{ $t('team.squad.data') }}</h4>
                  <p class="text-white/50 text-sm">Rendimiento bajo presión absoluta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
