<script setup>
const steps = [
  {
    num: '01',
    title: 'Plano',
    desc: 'Análisis profundo y arquitectura de requerimientos. No picamos código sin un mapa claro del éxito.',
    icon: 'ph-map-trifold'
  },
  {
    num: '02',
    title: 'Catálisis',
    desc: 'Diseño de interfaz y experiencia de usuario de altísima fidelidad. El software debe ser hermoso para ser potente.',
    icon: 'ph-flask'
  },
  {
    num: '03',
    title: 'Ensamblaje',
    desc: 'Ingeniería de software pura con estándares corporativos y pruebas de estrés constantes.',
    icon: 'ph-stack'
  },
  {
    num: '04',
    title: 'Entrega',
    desc: 'Despliegue estratégico y evolución continua. Tu éxito es nuestra métrica principal.',
    icon: 'ph-parachute'
  }
]
</script>

<template>
  <section id="process" class="py-40 bg-obsidian relative overflow-hidden">
    <!-- Glow Background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-[120px] rounded-full opacity-30"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-24">
        <!-- Sticky Section Header -->
        <div class="lg:w-1/3 lg:sticky lg:top-48 h-fit">
          <span class="text-brand-primary font-bold uppercase tracking-[0.4em] text-[0.7rem] mb-6 block">Metodología de Élite</span>
          <h2 class="text-5xl md:text-7xl font-display font-black text-white mb-10 leading-tight">La Forja</h2>
          <p class="text-white/50 text-xl font-medium leading-relaxed mb-12">
            Nuestro proceso es una mezcla de artesanía digital y precisión de ingeniería. Cada fase elimina la incertidumbre técnica.
          </p>
          <div class="p-8 glass-obsidian rounded-[2.5rem] border-white/10 shadow-2xl">
            <p class="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 italic tracking-[0.2em]">Garantía Táctica</p>
            <p class="text-sm font-medium text-white/60 leading-relaxed">Si en la primera fase no aportamos valor estratégico real, no continuamos. Compromiso total con tu ROI.</p>
          </div>
        </div>

        <!-- Scrollable Steps -->
        <div class="lg:w-2/3 flex flex-col gap-10">
          <div 
            v-for="step in steps" 
            :key="step.num"
            class="group relative glass-obsidian p-12 rounded-[3.5rem] transition-all duration-700 hover:scale-[1.03] border-white/5 hover:border-brand-primary/30"
          >
            <div class="flex items-start gap-12">
              <div class="text-8xl font-display font-black text-white/5 group-hover:text-brand-primary/10 transition-all duration-700 select-none">
                {{ step.num }}
              </div>
              <div class="flex-1">
                <div class="h-16 w-16 glass-obsidian rounded-2xl flex items-center justify-center mb-8 border-white/10 shadow-[0_0_20px_rgba(0,168,232,0.1)]">
                  <i :class="['ph text-3xl text-brand-primary', step.icon]"></i>
                </div>
                <h3 class="text-3xl font-display font-bold text-white mb-4">{{ step.title }}</h3>
                <p class="text-white/40 text-lg leading-relaxed font-medium group-hover:text-white/70 transition-colors">{{ step.desc }}</p>
              </div>
            </div>
            
            <!-- Connection Line (Visual only) -->
            <div class="absolute bottom-0 left-12 w-px h-10 bg-gradient-to-t from-white/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-obsidian {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(40px);
}
</style>
