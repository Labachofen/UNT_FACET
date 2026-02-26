"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Calendar, Clock, MapPin, AlertCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

interface Event {
  title: string
  date: string
  time?: string
  location?: string
  description?: string
  registrationPeriod?: string
}

export default function CalendarioPage() {
  const events = {
    ingresantes: [
      {
        title: "Período de Preinscripción 2026",
        date: "09/12/2025 al 31/03/2026",
        description: "Preinscripción online mediante el Sistema SIU Guaraní",
      },
      {
        title: "Paso 1 – Preinscripción online",
        date: "Sistema SIU Guaraní",
        description: "Completar formulario en: guarani.unt.edu.ar/preinscripciones/facet",
      },
      {
        title: "Paso 2 – Envío de documentación",
        date: "Formulario de Google",
        description:
          "Adjuntar: Ficha SIU Guarani, Acta de nacimiento, Constancia de DNI, Título secundario o constancia + comprobante de pago",
      },
    ],
    primerCuatrimestre: [
      {
        title: "Inscripción a materias (cuatrimestrales y anuales)",
        date: "02/03/2026 al 29/03/2026",
        description: "Período de inscripción a materias del primer cuatrimestre y anuales",
      },
      {
        title: "Inicio de clases",
        date: "Lunes 16/03/2026",
        description: "Inicio de clases del primer cuatrimestre",
      },
      {
        title: "Finalización de clases",
        date: "Viernes 03/07/2026",
        description: "Finalización de clases del primer cuatrimestre",
      },
      {
        title: "Receso invernal",
        date: "06/07/2026 al 19/07/2026",
        description: "Receso invernal (a confirmar con Resolución Rectoral)",
      },
      {
        title: "Período de Recuperaciones",
        date: "20/07/2026 al 14/08/2026",
        description: "Período de recuperaciones del primer cuatrimestre",
      },
      {
        title: "Cierre de notas en SIU Guaraní",
        date: "21/08/2026",
        description: "Fecha límite para carga de notas",
      },
    ],
    tramitesPrimerCuat: [
      {
        title: "Cambio de carrera / Cursado simultáneo",
        date: "23/02/2026 al 13/03/2026",
        description: "Trámite con costo de $2000",
      },
      {
        title: "Excepción de correlativas",
        date: "16/03/2026 al 30/03/2026",
        description: "Trámite con costo de $2000",
      },
      {
        title: "Inscripción fuera de término",
        date: "15/04/2026 al 29/04/2026",
        description: "Trámite con costo de $2000",
      },
      {
        title: "Bajas de cursadas",
        date: "15/04/2026 al 29/04/2026",
        description: "Trámite con costo de $2000",
      },
    ],
    segundoCuatrimestre: [
      {
        title: "Inscripción a materias",
        date: "10/08/2026 al 31/08/2026",
        description: "Período de inscripción a materias del segundo cuatrimestre",
      },
      {
        title: "Inicio de clases",
        date: "Martes 18/08/2026",
        description: "Inicio de clases del segundo cuatrimestre",
      },
      {
        title: "Finalización de clases",
        date: "Viernes 04/12/2026",
        description: "Finalización de clases del segundo cuatrimestre",
      },
      {
        title: "Período de Recuperaciones",
        date: "15/02/2027 al 12/03/2027",
        description: "Período de recuperaciones del segundo cuatrimestre",
      },
      {
        title: "Cierre de notas",
        date: "19/03/2027",
        description: "Fecha límite para carga de notas",
      },
    ],
    tramitesSegundoCuat: [
      {
        title: "Inscripción fuera de término",
        date: "10/08/2026 al 31/08/2026",
        description: "Trámite con costo de $2000",
      },
      {
        title: "Excepción de correlativas",
        date: "18/08/2026 al 01/09/2026",
        description: "Trámite con costo de $2000",
      },
      {
        title: "Bajas de cursadas",
        date: "15/09/2026 al 29/09/2026",
        description: "Trámite con costo de $2000",
      },
    ],
    mesasRegulares: [
      {
        title: "Mesa 1 - Febrero 2026",
        date: "19/02/2026",
        registrationPeriod: "Inscripción: 29/12/2025 al 11/02/2026",
      },
      {
        title: "Mesa 2 - Febrero 2026",
        date: "26/02/2026",
        registrationPeriod: "Inscripción: 12/02/2026 al 23/02/2026",
      },
      {
        title: "Mesa 3 - Marzo 2026",
        date: "05/03/2026",
        registrationPeriod: "Inscripción: 24/02/2026 al 02/03/2026",
      },
      {
        title: "Mesa 4 - Marzo 2026",
        date: "13/03/2026",
        registrationPeriod: "Inscripción: 03/03/2026 al 10/03/2026",
      },
    ],
    suficiencia: [
      {
        title: "Prueba de suficiencia - Enero 2026",
        date: "Jueves 30/01/2026",
        time: "09:45 am",
        location: "ANFITEATRO A2",
        description: "Evaluación presencial integral de ejercicios prácticos",
        registrationPeriod: "Inscripción virtual desde el 16/12/2025 al 27/01/2026",
      },
      {
        title: "Prueba de suficiencia - Marzo 2026",
        date: "Miércoles 12/03/2026",
        time: "07:45 am",
        location: "ANFITEATRO A1",
        description: "Evaluación presencial integral de ejercicios prácticos",
        registrationPeriod: "Inscripción virtual desde el 17/02/2026 al 03/03/2026",
      },
    ],
  }

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Calendario Académico 2026
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Mantente al día con todas las fechas importantes del año académico
          </p>
        </motion.div>

        <Tabs defaultValue="ingresantes" className="space-y-8">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent">
            {[
              ["ingresantes", "Ingresantes 2026"],
              ["primerCuatrimestre", "1° Cuatrimestre"],
              ["segundoCuatrimestre", "2° Cuatrimestre"],
              ["mesasRegulares", "Mesas de Examen"],
            ].map(([value, label]) => (
              <TabsTrigger
                key={value}
                value={value}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Ingresantes */}
          <TabsContent value="ingresantes">
            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6">
              <h2 className="text-2xl font-bold text-white">Ingresantes – Preinscripción 2026</h2>
              {events.ingresantes.map((event, index) => (
                <motion.div key={index} variants={item} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          <div className="flex items-center gap-2 text-orange-400">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      {event.description && <p className="text-blue-200">{event.description}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Primer Cuatrimestre */}
          <TabsContent value="primerCuatrimestre">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
              <div className="grid gap-6">
                <h2 className="text-2xl font-bold text-white">Calendario General - 1° Cuatrimestre 2026</h2>
                {events.primerCuatrimestre.map((event, index) => (
                  <motion.div key={index} variants={item} className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          <div className="flex items-center gap-2 text-orange-400">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      {event.description && <p className="text-blue-200 mt-2">{event.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-6">
                <h2 className="text-2xl font-bold text-white">Trámites - 1° Cuatrimestre</h2>
                {events.tramitesPrimerCuat.map((event, index) => (
                  <motion.div key={index} variants={item} className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          <div className="flex items-center gap-2 text-orange-400">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      {event.description && <p className="text-blue-200 mt-2">{event.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Segundo Cuatrimestre */}
          <TabsContent value="segundoCuatrimestre">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
              <div className="grid gap-6">
                <h2 className="text-2xl font-bold text-white">Calendario General - 2° Cuatrimestre 2026</h2>
                {events.segundoCuatrimestre.map((event, index) => (
                  <motion.div key={index} variants={item} className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          <div className="flex items-center gap-2 text-orange-400">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      {event.description && <p className="text-blue-200 mt-2">{event.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-6">
                <h2 className="text-2xl font-bold text-white">Trámites - 2° Cuatrimestre</h2>
                {events.tramitesSegundoCuat.map((event, index) => (
                  <motion.div key={index} variants={item} className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          <div className="flex items-center gap-2 text-orange-400">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      {event.description && <p className="text-blue-200 mt-2">{event.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Mesas de Examen */}
          <TabsContent value="mesasRegulares">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
              <div className="grid gap-6">
                <h2 className="text-2xl font-bold text-white">Mesas de Examen Regulares - Febrero/Marzo 2026</h2>
                {events.mesasRegulares.map((event, index) => (
                  <motion.div key={index} variants={item} className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          <div className="flex items-center gap-2 text-orange-400">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                      </div>
                      {event.registrationPeriod && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <p className="text-sm text-orange-400">{event.registrationPeriod}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-6">
                <h2 className="text-2xl font-bold text-white">Pruebas de Suficiencia</h2>
                {events.suficiencia.map((event, index) => (
                  <motion.div key={index} variants={item} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">{event.title}</h3>
                            <div className="flex items-center gap-2 text-orange-400">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                              {event.time && (
                                <>
                                  <Clock className="w-4 h-4 ml-2" />
                                  <span>{event.time}</span>
                                </>
                              )}
                              {event.location && (
                                <>
                                  <MapPin className="w-4 h-4 ml-2" />
                                  <span>{event.location}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        {event.description && <p className="text-blue-200">{event.description}</p>}
                        {event.registrationPeriod && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-sm text-orange-400">{event.registrationPeriod}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Nota importante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-orange-200">Las fechas están sujetas a modificaciones por Resolución Rectoral.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/20 to-blue-600/20 border border-white/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Preinscripciones 2026</h3>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Del 09/12/2025 al 31/03/2026 mediante el SISTEMA SIU GUARANI
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://guarani.unt.edu.ar/preinscripciones/facet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              Sistema SIU GUARANI
            </a>
            <a
              href="https://forms.gle/LtB4b8oxQ7tCghcn7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            >
              Enviar documentación
            </a>
          </div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}
