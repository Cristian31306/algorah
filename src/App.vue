<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import BentoSolutions from './components/BentoSolutions.vue'
import ProcessForge from './components/ProcessForge.vue'
import BentoCases from './components/BentoCases.vue'

onMounted(() => {
  // Smooth scroll logic can be enhanced here if needed
})
</script>

<template>
  <div class="min-h-screen font-sans bg-white selection:bg-brand-primary/30">
    <!-- Noise overlay -->
    <div id="noise-overlay" class="fixed inset-0 pointer-events-none z-[9999] opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    
    <Navbar />
    
    <main>
      <Hero />
      <BentoSolutions />
      <ProcessForge />
      <BentoCases />
      
      <!-- Final CTA Section -->
      <section id="contact" class="py-32 container mx-auto px-6">
        <div class="glass p-12 md:p-20 rounded-[4rem] text-center border-brand-primary/10 overflow-hidden relative">
           <!-- Accent Light -->
           <div class="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full"></div>
           <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-accent/5 blur-[100px] rounded-full"></div>

           <span class="text-brand-primary font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-6 block relative z-10">Contacto Directo</span>
           <h2 class="text-4xl md:text-6xl font-display font-extrabold text-brand-secondary mb-10 relative z-10">¿Listos para forjar <br/> tu próxima ventaja competitiva?</h2>
           
           <div class="flex flex-col md:flex-row items-center justify-center gap-8 relative z-10">
              <a href="https://wa.me/573045810485" target="_blank" class="flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-[#25D366]/20">
                <i class="ph ph-whatsapp-logo text-2xl"></i>
                Hablemos por WhatsApp
              </a>
              <p class="text-brand-secondary/40 font-medium italic">Respuesta promedio: 15 minutos</p>
           </div>
        </div>
      </section>
    </main>

    <footer class="py-20 bg-brand-secondary/5">
      <div class="container mx-auto px-6 text-center">
        <img src="/assets/logo.webp" alt="Algorah" class="h-16 mx-auto mb-10 opacity-40 grayscale" />
        <p class="text-brand-secondary/40 font-bold uppercase tracking-[0.4em] text-[0.6rem] mb-8">Arquitectos de Software para el Futuro Digital</p>
        <div class="flex items-center justify-center gap-10 mb-12">
          <a href="#" class="text-xs font-bold text-brand-secondary/30 hover:text-brand-primary uppercase tracking-widest">LinkedIn</a>
          <a href="#" class="text-xs font-bold text-brand-secondary/30 hover:text-brand-primary uppercase tracking-widest">GitHub</a>
          <a href="#" class="text-xs font-bold text-brand-secondary/30 hover:text-brand-primary uppercase tracking-widest">Behance</a>
        </div>
        <p class="text-[0.65rem] text-brand-secondary/20 font-bold tracking-widest uppercase">&copy; 2026 ALGORA SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  </div>
</template>

<style>
@reference "./style.css";

/* Base overrides for font-display */
h1, h2, h3, h4, .font-display {
  font-family: 'Playfair Display', serif;
}

body {
  @apply selection:bg-brand-primary/20;
}

.glass {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(40px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.03);
}

.mesh-gradient {
  background: 
    radial-gradient(at 0% 0%, rgba(0, 168, 232, 0.05) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(5, 150, 105, 0.03) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(27, 49, 94, 0.02) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(0, 86, 179, 0.03) 0px, transparent 50%);
  background-attachment: fixed;
}
</style>
