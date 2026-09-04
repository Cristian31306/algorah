<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  type: String // 'privacy' or 'terms'
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[10000] flex items-center justify-center px-4">
      <!-- Backdrop -->
      <div @click="close" class="absolute inset-0 bg-obsidian/80 backdrop-blur-md"></div>
      
      <!-- Modal -->
      <div class="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-brand-secondary/10">
        
        <!-- Header -->
        <div class="px-8 py-6 border-b border-brand-secondary/5 flex items-center justify-between bg-[#F8FAFC]">
          <h3 class="text-2xl font-display font-bold text-brand-secondary">
            {{ type === 'privacy' ? 'Políticas de Privacidad' : 'Términos y Condiciones' }}
          </h3>
          <button @click="close" class="h-10 w-10 rounded-full bg-white flex items-center justify-center text-brand-secondary/50 hover:text-red-500 hover:shadow-lg transition-all shadow-sm">
            <i class="ph-bold ph-x"></i>
          </button>
        </div>
        
        <!-- Content -->
        <div class="p-8 overflow-y-auto text-brand-secondary/80 text-sm leading-relaxed prose prose-sm max-w-none">
          <template v-if="type === 'privacy'">
            <h4 class="font-bold text-brand-secondary text-lg mb-4">Política de Tratamiento de Datos Personales y Privacidad</h4>
            <p class="mb-4">
              <strong>1. Marco Legal y Ámbito de Aplicación:</strong> La presente política se rige bajo los parámetros establecidos por la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012 (Ley de Habeas Data), el Decreto Reglamentario 1377 de 2013, y en consonancia con estándares internacionales de protección de la privacidad como el Reglamento General de Protección de Datos (GDPR) de la Unión Europea y la CCPA de California. Al usar este sitio, usted otorga su consentimiento previo, expreso e informado a <strong>Algorah</strong> ("el Responsable") para el tratamiento de sus datos personales.
            </p>
            <p class="mb-4">
              <strong>2. Información Recopilada:</strong> Algorah recopila de manera directa los datos ingresados en el formulario de contacto (Nombre, Correo Electrónico, Nombre de la Empresa y la descripción del requerimiento). Así mismo, de forma pasiva mediante <em>cookies</em> y tecnologías de rastreo, recolectamos datos de analítica de tráfico, dirección IP anonimizada, ubicación geográfica aproximada y comportamiento de navegación, los cuales nos permiten auditar la seguridad del sitio y optimizar su rendimiento.
            </p>
            <p class="mb-4">
              <strong>3. Finalidad del Tratamiento:</strong> Los datos serán utilizados exclusiva y estrictamente para las siguientes finalidades:
            </p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
              <li>Responder a solicitudes comerciales, consultas técnicas y emitir diagnósticos o propuestas de ingeniería de software.</li>
              <li>Realizar seguimiento prospectivo y enviar comunicaciones inherentes a la prestación de nuestros servicios tecnológicos.</li>
              <li>Ejecutar procesos de perfilamiento estadístico y analítica web interna (incluyendo notificaciones de tráfico en tiempo real a nuestros canales administrativos cifrados).</li>
              <li>Cumplir con obligaciones legales, fiscales y contractuales.</li>
            </ul>
            <p class="mb-4">
              <strong>4. Derechos de los Titulares (Derechos ARCO):</strong> Usted tiene el derecho constitucional y legal de Conocer, Actualizar, Rectificar y Suprimir sus datos personales, así como de revocar la autorización otorgada en cualquier momento. De conformidad con las normativas europeas (GDPR), garantizamos igualmente el derecho al olvido, la portabilidad de sus datos y la limitación de su tratamiento.
            </p>
            <p class="mb-4">
              <strong>5. Seguridad y Confidencialidad:</strong> Algorah adopta medidas técnicas, humanas y administrativas rigurosas para proteger la información contra adulteración, pérdida, consulta, uso o acceso no autorizado. Los correos de contacto se gestionan mediante canales SMTP asegurados con TLS. Nunca venderemos, alquilaremos ni comercializaremos sus datos con terceros, agencias de publicidad o brókers de datos.
            </p>
            <p class="mb-4">
              <strong>6. Procedimiento para Ejercicio de Derechos:</strong> Toda solicitud, reclamación o consulta relacionada con el tratamiento de sus datos personales deberá ser enviada formalmente a través del correo electrónico oficial: <strong>ceo.algorah@gmail.com</strong>.
            </p>
            <p class="text-xs text-brand-secondary/50 mt-8">
              Última actualización: {{ new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long' }) }}. Este documento tiene plenos efectos vinculantes.
            </p>
          </template>
          
          <template v-else>
            <h4 class="font-bold text-brand-secondary text-lg mb-4">Términos y Condiciones Generales de Uso</h4>
            <p class="mb-4">
              <strong>1. Aceptación de los Términos:</strong> El acceso, navegación y uso del sitio web de Algorah (en adelante, "el Sitio") le atribuye la condición de Usuario. Al utilizar nuestro Sitio, usted acepta íntegra y expresamente estos Términos y Condiciones. Si no está de acuerdo con alguno de los términos aquí expuestos, debe cesar inmediatamente el uso de la plataforma.
            </p>
            <p class="mb-4">
              <strong>2. Propiedad Intelectual e Industrial:</strong> Todos los contenidos que forman parte de este Sitio, incluyendo pero no limitándose a: diseño de la interfaz (UI), código fuente (HTML, CSS, JavaScript, Vue), textos comerciales (copywriting), bases de datos, marcas, logotipos, íconos y metodologías (ej. "La Forja"), son propiedad exclusiva de Algorah o de terceros licenciantes. Queda estrictamente prohibida su reproducción total o parcial, distribución, ingeniería inversa (<em>reverse engineering</em>), o el uso comercial no autorizado, amparados bajo la Ley 23 de 1982 de Derechos de Autor (Colombia) y los tratados internacionales correspondientes.
            </p>
            <p class="mb-4">
              <strong>3. Uso Adecuado del Sitio:</strong> El Usuario se compromete a no utilizar el Sitio para: (a) Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público; (b) Introducir o difundir virus informáticos, malware o realizar ataques de denegación de servicio (DDoS); (c) Realizar extracción de datos masiva automatizada (<em>web scraping</em>) sin autorización explícita. Algorah se reserva el derecho de bloquear direcciones IP que incurran en estas prácticas.
            </p>
            <p class="mb-4">
              <strong>4. Naturaleza de la "Garantía Táctica":</strong> Las menciones publicitarias relativas a nuestra "Garantía Táctica" o promesas de reembolso/no continuidad, están estrictamente sujetas a la validación técnica del proyecto y a la firma de un contrato formal de Prestación de Servicios de Desarrollo de Software. La consulta inicial o radicación del formulario en la web no constituye una oferta comercial vinculante ni un contrato perfeccionado. 
            </p>
            <p class="mb-4">
              <strong>5. Limitación de Responsabilidad:</strong> Algorah no se hace responsable, en ninguna circunstancia, por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de este Sitio, errores u omisiones en el contenido, o interrupciones en el servidor debido a fuerza mayor o mantenimientos programados. El material y la información en el sitio se proporcionan "tal cual", sin garantías expresas o implícitas.
            </p>
            <p class="mb-4">
              <strong>6. Legislación Aplicable y Jurisdicción:</strong> Para todos los efectos legales, la interpretación y ejecución de los presentes términos se regirán por las leyes de la República de Colombia. Cualquier controversia, disputa o reclamación que surja del uso del Sitio o de sus servicios será sometida a la jurisdicción ordinaria de los jueces de la República de Colombia, renunciando expresamente a cualquier otro fuero que pudiera corresponder por razón de domicilio presente o futuro.
            </p>
            <p class="text-xs text-brand-secondary/50 mt-8">
              Última actualización: {{ new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long' }) }}. Este documento tiene plenos efectos vinculantes.
            </p>
          </template>
        </div>
        
        <!-- Footer -->
        <div class="px-8 py-5 border-t border-brand-secondary/5 bg-[#F8FAFC] flex justify-end">
          <button @click="close" class="px-8 py-3 bg-brand-secondary text-white rounded-full font-bold text-sm hover:bg-brand-primary transition-colors shadow-lg">
            Entendido
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar styles for the modal content */
div::-webkit-scrollbar {
  width: 6px;
}
div::-webkit-scrollbar-track {
  background: transparent;
}
div::-webkit-scrollbar-thumb {
  background: rgba(15, 23, 42, 0.1);
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: rgba(15, 23, 42, 0.2);
}
</style>
