<script setup>
const cases = [
  {
    result: '+60%',
    size: 'col-span-12 md:col-span-8',
    icon: 'ph-car'
  },
  {
    result: '0.8s',
    size: 'col-span-12 md:col-span-4',
    icon: 'ph-music-notes'
  },
  {
    result: '+50%',
    size: 'col-span-12 md:col-span-4',
    icon: 'ph-bank'
  },
  {
    result: '+40%',
    size: 'col-span-12 md:col-span-8',
    icon: 'ph-sneaker'
  }
]
</script>

<template>
  <section id="cases" class="py-40 bg-white relative">
    <div class="container mx-auto px-6">
      <div class="text-center mb-24 max-w-3xl mx-auto">
        <span class="text-brand-primary font-bold uppercase tracking-[0.4em] text-[0.7rem] mb-6 block">{{ $t('cases.badge') }}</span>
        <h2 class="text-5xl md:text-7xl font-display font-black text-brand-secondary mb-8 leading-tight italic">{{ $t('cases.title') }}</h2>
        <p class="text-xl text-brand-secondary/70 font-medium leading-relaxed">
          {{ $t('cases.desc') }}
        </p>
      </div>

      <div class="grid grid-cols-12 gap-8">
        <div 
          v-for="(c, index) in cases" 
          :key="index"
          :class="[c.size, 'group relative glass-crystal p-12 rounded-[4rem] border-brand-secondary/10 hover:border-brand-primary/40 transition-all duration-700 shadow-sm hover:shadow-2xl']"
        >
          <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-10 mb-10">
            <div class="flex items-center gap-6">
              <div class="h-16 w-16 bg-brand-secondary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <i :class="['ph text-3xl', c.icon]"></i>
              </div>
              <h3 class="text-2xl font-display font-bold text-brand-secondary leading-tight">{{ $t('cases.items.' + index + '.title') }}</h3>
            </div>
            <div class="flex flex-col items-start xl:items-end">
              <span class="text-5xl font-display font-black text-brand-primary text-glow">{{ c.result }}</span>
              <span class="text-[0.65rem] font-black uppercase tracking-[0.2em] text-brand-secondary/40">{{ $t('cases.items.' + index + '.metric') }}</span>
            </div>
          </div>
          
          <p class="text-brand-secondary/80 text-lg font-medium leading-relaxed max-w-[95%]">
            {{ $t('cases.items.' + index + '.desc') }}
          </p>
          
          <div class="absolute bottom-10 right-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
             <i class="ph ph-arrow-right-bold text-brand-primary text-2xl"></i>
          </div>
        </div>
      </div>
      
      <div class="mt-24 text-center">
        <a href="#contact" class="inline-flex items-center gap-6 px-12 py-6 bg-brand-secondary text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-primary hover:scale-105 transition-all shadow-xl shadow-brand-secondary/20">
          {{ $t('cases.explore') }}
          <i class="ph ph-arrow-right-bold"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-crystal {
  background: white;
  border: 2px solid rgba(15, 23, 42, 0.05);
}

.text-glow {
  text-shadow: 0 0 15px rgba(0, 168, 232, 0.2);
}
</style>
