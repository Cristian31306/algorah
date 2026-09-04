<script setup>
const testimonials = [
  {
    quote: "Redujeron nuestro tiempo de conciliación bancaria de 3 días a 4 horas. La arquitectura que propusieron nos permitió escalar sin miedo.",
    author: "Juan Pérez",
    position: "Gerente de Operaciones",
    company: "FinTech Nexus"
  },
  {
    quote: "No solo entienden de código, entienden de negocio. El nuevo e-commerce duplicó la retención de usuarios en los primeros dos meses.",
    author: "Laura Gómez",
    position: "Directora de E-commerce",
    company: "Audiophile Store"
  }
]
</script>

<template>
  <section id="testimonials" class="py-32 bg-white relative">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20 max-w-3xl mx-auto">
        <span class="text-brand-primary font-bold uppercase tracking-[0.4em] text-[0.7rem] mb-6 block flex items-center justify-center gap-2">
          <span class="h-2 w-2 bg-brand-primary rounded-full animate-pulse"></span>
          {{ $t('testimonials.badge') }}
        </span>
        <h2 class="text-5xl md:text-7xl font-display font-black text-brand-secondary mb-8 leading-tight italic">{{ $t('testimonials.title') }}</h2>
        <p class="text-xl text-brand-secondary/70 font-medium leading-relaxed">
          {{ $t('testimonials.desc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div 
          v-for="(t, index) in testimonials" 
          :key="index"
          class="group relative glass p-10 md:p-12 rounded-[3rem] border border-brand-secondary/5 hover:border-brand-primary/20 transition-all duration-700 shadow-sm hover:shadow-2xl"
        >
          <div class="absolute -top-6 -left-4 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
            <i class="ph-fill ph-quotes text-8xl"></i>
          </div>
          
          <div class="relative z-10 flex flex-col h-full">
            <p class="text-brand-secondary/80 text-xl md:text-2xl font-medium leading-relaxed mb-10 italic">
              "{{ t.quote }}"
            </p>
            
            <div class="mt-auto flex items-center gap-4 border-t border-brand-secondary/5 pt-6">
              <div class="h-12 w-12 rounded-full bg-gradient-to-br from-brand-secondary to-obsidian flex items-center justify-center text-white font-bold uppercase">
                {{ t.author.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold text-brand-secondary text-lg">{{ t.author }}</h4>
                <p class="text-[0.7rem] uppercase tracking-widest text-brand-secondary/50 font-black">
                  <span class="text-brand-primary">{{ t.company }}</span> • {{ t.position }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass {
  background: white;
}
</style>
