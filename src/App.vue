<script setup>
import { onMounted, ref, defineAsyncComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'

// Lazy Load de componentes para mejorar el rendimiento inicial (Code Splitting)
const BentoSolutions = defineAsyncComponent(() => import('./components/BentoSolutions.vue'))
const ProcessForge = defineAsyncComponent(() => import('./components/ProcessForge.vue'))
const BentoCases = defineAsyncComponent(() => import('./components/BentoCases.vue'))
const TeamSection = defineAsyncComponent(() => import('./components/TeamSection.vue'))
const Testimonials = defineAsyncComponent(() => import('./components/Testimonials.vue'))
const ContactForm = defineAsyncComponent(() => import('./components/ContactForm.vue'))
const CookieBanner = defineAsyncComponent(() => import('./components/CookieBanner.vue'))
const LegalModal = defineAsyncComponent(() => import('./components/LegalModal.vue'))

const isLegalModalOpen = ref(false)
const legalModalType = ref('privacy') // 'privacy' | 'terms'

const openLegalModal = (type) => {
  legalModalType.value = type
  isLegalModalOpen.value = true
}

onMounted(() => {
  // Smooth scroll logic can be enhanced here if needed
})
</script>

<template>
  <div class="min-h-screen font-sans bg-white selection:bg-brand-primary/30">
    <!-- Noise overlay -->
    <div id="noise-overlay" class="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url(`data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`)]"></div>
    
    <Navbar />
    
    <main>
      <Hero />
      <BentoSolutions />
      <ProcessForge />
      <BentoCases />
      <Testimonials />
      <TeamSection />
      
      <section id="contact" class="py-32 container mx-auto px-6">
        <div class="glass p-12 md:p-16 rounded-[4rem] border-brand-primary/10 overflow-hidden relative">
           <!-- Accent Light -->
           <div class="absolute -top-20 -left-20 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full"></div>
           <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-accent/5 blur-[100px] rounded-full"></div>

           <div class="flex flex-col lg:flex-row items-center gap-16 relative z-10">
             <div class="lg:w-1/2 text-center lg:text-left">
               <span class="text-brand-primary font-bold uppercase tracking-[0.3em] text-[0.65rem] mb-6 block relative z-10">{{ $t('footer.contact_badge') }}</span>
               <h2 class="text-4xl md:text-5xl font-display font-extrabold text-brand-secondary mb-10 relative z-10 leading-tight" v-html="$t('footer.contact_title')"></h2>
               
               <p class="text-brand-secondary/60 text-lg mb-10 max-w-md mx-auto lg:mx-0">
                 Envíanos los detalles de tu desafío tecnológico y responderemos con un plan de ataque claro.
               </p>

               <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 relative z-10">
                  <a href="https://wa.me/573045810485" target="_blank" class="flex items-center gap-4 px-8 py-4 bg-obsidian text-white border border-brand-primary/30 rounded-full font-bold hover:scale-105 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(0,168,232,0.3)] hover:border-brand-primary group w-full sm:w-auto justify-center">
                    <i class="ph-duotone ph-whatsapp-logo text-2xl text-brand-primary group-hover:animate-bounce"></i>
                    WhatsApp
                  </a>
                  <p class="text-brand-secondary/40 font-medium italic text-sm">{{ $t('footer.contact_response') }}</p>
               </div>
             </div>
             
             <div class="lg:w-1/2 w-full">
               <ContactForm @open-legal="openLegalModal" />
             </div>
           </div>
        </div>
      </section>
    </main>

    <footer class="pt-24 pb-12 bg-obsidian text-white/50 border-t border-white/5 relative overflow-hidden">
      <!-- Glow -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-brand-primary/10 blur-[100px] rounded-[100%] pointer-events-none"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <!-- Centered Logo Above Grid -->
        <div class="flex justify-center -mt-8 -mb-4 md:-mb-8">
          <img src="/assets/logo.webp" alt="Algorah" class="w-48 md:w-64 h-auto object-contain brightness-0 invert opacity-80" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div class="col-span-1 md:col-span-2">
            <p class="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-brand-primary">{{ $t('footer.subtitle') }}</p>
            <p class="text-sm font-medium leading-relaxed max-w-sm">
              Diseñamos arquitecturas digitales robustas para empresas que exigen resultados excepcionales.
            </p>
          </div>
          
          <div>
            <h4 class="text-xs font-black uppercase tracking-widest text-white mb-6">Navegación</h4>
            <ul class="flex flex-col gap-4 text-sm font-medium">
              <li><a href="#solutions" class="hover:text-brand-primary transition-colors">{{ $t('nav.solutions') }}</a></li>
              <li><a href="#process" class="hover:text-brand-primary transition-colors">{{ $t('nav.process') }}</a></li>
              <li><a href="#cases" class="hover:text-brand-primary transition-colors">{{ $t('nav.cases') }}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-xs font-black uppercase tracking-widest text-white mb-6">Contacto</h4>
            <ul class="flex flex-col gap-4 text-sm font-medium mb-6">
              <li class="flex items-center gap-3">
                <i class="ph-duotone ph-envelope-simple text-brand-primary text-xl"></i>
                <a href="mailto:ceo.algorah@gmail.com" class="hover:text-white transition-colors">ceo.algorah@gmail.com</a>
              </li>
              <li class="flex items-center gap-3">
                <i class="ph-duotone ph-phone text-brand-primary text-xl"></i>
                <a href="https://wa.me/573045810485" class="hover:text-white transition-colors">+57 304 581 0485</a>
              </li>
            </ul>
            <div class="flex items-center gap-4">
              <a href="#" class="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-obsidian hover:border-brand-primary transition-all">
                <i class="ph-fill ph-linkedin-logo"></i>
              </a>
              <a href="#" class="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-obsidian hover:border-brand-primary transition-all">
                <i class="ph-fill ph-github-logo"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-[0.65rem] font-bold tracking-widest uppercase">{{ $t('footer.rights', { year: new Date().getFullYear() }) }}</p>
          <div class="flex gap-6 text-[0.65rem] uppercase font-bold tracking-widest">
            <button @click.prevent="openLegalModal('privacy')" class="hover:text-white transition-colors">Privacidad</button>
            <button @click.prevent="openLegalModal('terms')" class="hover:text-white transition-colors">Términos</button>
          </div>
        </div>
      </div>
    </footer>
    
    <!-- Legal Modals & Banners -->
    <CookieBanner @open-legal="openLegalModal" />
    <LegalModal 
      :isOpen="isLegalModalOpen" 
      :type="legalModalType" 
      @close="isLegalModalOpen = false" 
    />
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
