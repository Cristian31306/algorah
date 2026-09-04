<script setup>
import { ref } from 'vue'

defineEmits(['open-legal'])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref('idle') // idle, loading, success, error
const errorMessage = ref('')

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) return
  
  status.value = 'loading'
  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })
    
    if (res.ok) {
      status.value = 'success'
      form.value = { name: '', email: '', message: '' }
      setTimeout(() => { status.value = 'idle' }, 5000)
    } else {
      throw new Error('Error enviando el formulario')
    }
  } catch (error) {
    status.value = 'error'
    errorMessage.value = 'Tuvimos un problema enviando tu mensaje. Por favor intenta por WhatsApp.'
    setTimeout(() => { status.value = 'idle' }, 5000)
  }
}
</script>

<template>
  <div class="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden text-left w-full max-w-lg mx-auto">
    <!-- Success Overlay -->
    <div v-if="status === 'success'" class="absolute inset-0 bg-obsidian/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8">
      <div class="h-20 w-20 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,168,232,0.3)]">
        <i class="ph-fill ph-check-circle text-5xl"></i>
      </div>
      <h3 class="text-2xl font-display font-bold text-white mb-2">¡Mensaje Enviado!</h3>
      <p class="text-white/60 font-medium">Hemos recibido tus datos tácticos. Te contactaremos muy pronto.</p>
    </div>

    <!-- Error Overlay -->
    <div v-if="status === 'error'" class="absolute inset-0 bg-obsidian/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8">
      <div class="h-20 w-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6">
        <i class="ph-fill ph-warning-circle text-5xl"></i>
      </div>
      <h3 class="text-2xl font-display font-bold text-white mb-2">Error de Conexión</h3>
      <p class="text-white/60 font-medium text-sm mb-6">{{ errorMessage }}</p>
      <button @click="status = 'idle'" class="px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors text-sm font-bold">Intentar de nuevo</button>
    </div>

    <form @submit.prevent="submitForm" class="flex flex-col gap-5 relative z-10">
      <div>
        <label class="block text-[0.65rem] font-bold uppercase tracking-widest text-brand-secondary/60 mb-2 pl-2">Nombre o Empresa</label>
        <input 
          v-model="form.name" 
          type="text" 
          required
          class="w-full bg-white/50 border border-brand-secondary/10 px-6 py-4 rounded-2xl text-brand-secondary font-medium focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder:text-brand-secondary/30"
          placeholder="Ej: FinTech Nexus"
        />
      </div>
      
      <div>
        <label class="block text-[0.65rem] font-bold uppercase tracking-widest text-brand-secondary/60 mb-2 pl-2">Correo Electrónico</label>
        <input 
          v-model="form.email" 
          type="email" 
          required
          class="w-full bg-white/50 border border-brand-secondary/10 px-6 py-4 rounded-2xl text-brand-secondary font-medium focus:outline-none focus:border-brand-primary focus:bg-white transition-all placeholder:text-brand-secondary/30"
          placeholder="ceo@empresa.com"
        />
      </div>

      <div>
        <label class="block text-[0.65rem] font-bold uppercase tracking-widest text-brand-secondary/60 mb-2 pl-2">Tu Desafío Tecnológico</label>
        <textarea 
          v-model="form.message" 
          required
          rows="4"
          class="w-full bg-white/50 border border-brand-secondary/10 px-6 py-4 rounded-2xl text-brand-secondary font-medium focus:outline-none focus:border-brand-primary focus:bg-white transition-all resize-none placeholder:text-brand-secondary/30"
          placeholder="Cuéntanos brevemente qué buscas escalar o construir..."
        ></textarea>
      </div>

      <div class="flex items-start gap-3 mt-1">
        <input 
          type="checkbox" 
          id="privacy-check" 
          required 
          class="mt-1 w-4 h-4 rounded border-brand-secondary/20 text-brand-primary focus:ring-brand-primary cursor-pointer"
        />
        <label for="privacy-check" class="text-xs text-brand-secondary/60 leading-relaxed cursor-pointer select-none">
          Acepto la <button type="button" @click.prevent="$emit('open-legal', 'privacy')" class="text-brand-primary hover:underline font-bold">Política de Tratamiento de Datos</button> y consiento el contacto comercial.
        </label>
      </div>

      <button 
        type="submit" 
        :disabled="status === 'loading'"
        class="mt-2 w-full flex items-center justify-center gap-3 px-8 py-5 bg-obsidian text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-primary hover:shadow-[0_0_20px_rgba(0,168,232,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        <span v-if="status === 'loading'">Enviando...</span>
        <span v-else>Iniciar Forja</span>
        <i v-if="status !== 'loading'" class="ph-bold ph-paper-plane-tilt text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
        <i v-else class="ph-bold ph-spinner animate-spin text-lg"></i>
      </button>
    </form>
  </div>
</template>
