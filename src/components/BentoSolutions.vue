<script setup>
const solutions = [
  {
    icon: 'ph-brackets-curly',
    size: 'col-span-12 md:col-span-7',
    color: 'from-brand-primary/20 to-transparent'
  },
  {
    icon: 'ph-monitor',
    size: 'col-span-12 md:col-span-5',
    color: 'from-brand-accent/20 to-transparent'
  },
  {
    icon: 'ph-magic-wand',
    size: 'col-span-12 md:col-span-5',
    color: 'from-orange-500/20 to-transparent'
  },
  {
    icon: 'ph-shopping-bag',
    size: 'col-span-12 md:col-span-7',
    color: 'from-purple-500/20 to-transparent'
  }
]
</script>

<template>
  <section id="solutions" class="py-32 bg-[#F8FAFC] relative">
    <div class="container mx-auto px-6">
      <div class="text-center mb-24 max-w-3xl mx-auto">
        <span class="text-brand-primary font-bold uppercase tracking-[0.4em] text-[0.7rem] mb-6 block">{{ $t('solutions.badge') }}</span>
        <h2 class="text-5xl md:text-7xl font-display font-black text-brand-secondary mb-8 leading-tight italic">{{ $t('solutions.title') }}</h2>
        <p class="text-xl text-brand-secondary/70 font-medium leading-relaxed">
          {{ $t('solutions.desc') }}
        </p>
      </div>

      <div class="grid grid-cols-12 gap-8">
        <div 
          v-for="(sol, index) in solutions" 
          :key="index"
          :class="[sol.size, 'group relative glass-crystal p-12 rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-3xl hover:shadow-brand-secondary/10']"
        >
          <!-- Accent Glow -->
          <div :class="['absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700', sol.color]"></div>
          
          <div class="relative z-10 flex flex-col h-full min-h-[320px]">
            <div class="h-20 w-20 bg-brand-secondary text-white rounded-3xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <i :class="['ph text-4xl', sol.icon]"></i>
            </div>
            
            <h3 class="text-3xl font-display font-bold text-brand-secondary mb-6">{{ $t('solutions.items.' + index + '.title') }}</h3>
            <p class="text-brand-secondary/80 text-lg font-medium leading-relaxed mb-10">{{ $t('solutions.items.' + index + '.desc') }}</p>

            <div class="mt-auto flex items-center gap-4 text-brand-primary font-black uppercase tracking-widest text-[0.7rem] group-hover:gap-6 transition-all duration-300">
              <span>{{ $t('solutions.explore') }}</span>
              <i class="ph ph-arrow-right-bold text-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-crystal {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(40px);
  border: 2px solid rgba(15, 23, 42, 0.05);
}

.glass-crystal:hover {
  border: 2px solid #00A8E8;
}
</style>
