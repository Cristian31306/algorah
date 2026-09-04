<script setup>
const steps = [
  {
    num: '01',
    icon: 'ph-map-trifold'
  },
  {
    num: '02',
    icon: 'ph-flask'
  },
  {
    num: '03',
    icon: 'ph-stack'
  },
  {
    num: '04',
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
          <span class="text-brand-primary font-bold uppercase tracking-[0.4em] text-[0.7rem] mb-6 block flex items-center gap-2">
            <span class="h-2 w-2 bg-brand-primary rounded-full animate-pulse"></span>
            {{ $t('process.badge') }}
          </span>
          <h2 class="text-5xl md:text-7xl font-display font-black text-white mb-10 leading-tight">{{ $t('process.title') }}</h2>
          <p class="text-white/50 text-xl font-medium leading-relaxed mb-12">
            {{ $t('process.desc') }}
          </p>
          
          <div class="p-8 glass-obsidian rounded-[2.5rem] border-brand-primary/20 shadow-2xl shadow-brand-primary/10 relative overflow-hidden group mb-8">
            <div class="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-colors"></div>
            <p class="text-xs font-bold uppercase tracking-widest text-brand-primary mb-3 italic tracking-[0.2em] relative z-10">{{ $t('process.guarantee_title') }}</p>
            <p class="text-sm font-medium text-white/70 leading-relaxed relative z-10">{{ $t('process.guarantee_desc') }}</p>
          </div>

          <!-- Decorative Technical Snippet -->
          <div class="hidden lg:block p-6 rounded-2xl bg-black/40 border border-white/5 font-mono text-[0.65rem] text-brand-primary/70 overflow-hidden relative">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-transparent opacity-50"></div>
            <div class="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
              <span class="h-2 w-2 rounded-full bg-red-500/50"></span>
              <span class="h-2 w-2 rounded-full bg-yellow-500/50"></span>
              <span class="h-2 w-2 rounded-full bg-green-500/50"></span>
              <span class="ml-2 text-white/30">sys_arch.yml</span>
            </div>
            <pre class="leading-relaxed">
<span class="text-brand-accent">apiVersion:</span> v1
<span class="text-brand-accent">kind:</span> ScalableArchitecture
<span class="text-brand-accent">spec:</span>
  <span class="text-emerald-400">replicas:</span> auto
  <span class="text-emerald-400">strategy:</span>
    <span class="text-cyan-400">type:</span> ZeroDowntime
  <span class="text-emerald-400">metrics:</span>
    <span class="text-cyan-400">latency:</span> <span class="text-orange-400">&lt; 50ms</span>
    <span class="text-cyan-400">uptime:</span> <span class="text-orange-400">99.99%</span>
            </pre>
          </div>
        </div>

        <!-- Scrollable Steps -->
        <div class="lg:w-2/3 flex flex-col gap-10">
          <div 
            v-for="(step, index) in steps" 
            :key="step.num"
            class="group relative glass-obsidian p-10 md:p-14 rounded-[3.5rem] transition-all duration-700 hover:-translate-y-2 border-white/5 hover:border-brand-primary/30 overflow-hidden"
          >
            <!-- Background Phase Number (Fixed corner) -->
            <div class="absolute -top-6 -right-6 text-[12rem] font-display font-black text-white/[0.02] group-hover:text-brand-primary/[0.05] transition-all duration-700 select-none leading-none pointer-events-none group-hover:scale-110">
              {{ step.num }}
            </div>
            
            <div class="relative z-10 flex flex-col items-start gap-8">
              <div class="h-20 w-20 bg-gradient-to-br from-brand-primary/20 to-transparent rounded-2xl flex items-center justify-center border border-brand-primary/30 shadow-[0_0_30px_rgba(0,168,232,0.15)] group-hover:scale-110 transition-transform duration-500">
                <i :class="['ph-duotone text-4xl text-brand-primary', step.icon]"></i>
              </div>
              <div>
                <h3 class="text-3xl font-display font-bold text-white mb-4 flex items-center gap-4">
                  <span class="text-brand-primary text-xl hidden md:inline">{{ step.num }}.</span>
                  {{ $t('process.items.' + index + '.title') }}
                </h3>
                <p class="text-white/50 text-lg leading-relaxed font-medium group-hover:text-white/80 transition-colors max-w-lg">{{ $t('process.items.' + index + '.desc') }}</p>
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
