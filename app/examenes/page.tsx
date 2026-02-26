"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Calendar, AlertCircle, BookOpen, ClipboardList } from "lucide-react"
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

export default function ExamenesPage() {
  const mesasRegulares = {
    febreroMarzo2026: [
      { mesa: "Mesa 1", fecha: "Jueves 19 de Febrero 2026" },
      { mesa: "Mesa 2", fecha: "Jueves 26 de Febrero 2026" },
      { mesa: "Mesa 3", fecha: "Jueves 05 de Marzo 2026" },
      { mesa: "Mesa 4", fecha: "Viernes 13 de Marzo 2026" },
    ],
    julioAgosto2026: [
      { mesa: "Julio", fecha: "Martes 21 y Miércoles 29" },
      { mesa: "Agosto", fecha: "Jueves 06 y Jueves 13" },
    ],
    diciembre2026Marzo2027: [
      { mesa: "Diciembre 2026", fecha: "Lunes 14 y Lunes 21" },
      { mesa: "Febrero 2027", fecha: "Martes 16 y Miércoles 24" },
      { mesa: "Marzo 2027", fecha: "Jueves 04 y Jueves 11" },
    ],
  }

  const mesasLibres = [
    { mesa: 1, inicio: "Sábado 21 de Marzo", fin: "Jueves 26 de Marzo" },
    { mesa: 2, inicio: "Lunes 21 de Abril", fin: "Sábado 26 de Abril" },
    { mesa: 3, inicio: "Jueves 21 de Mayo", fin: "Martes 26 de Mayo" },
    { mesa: 4, inicio: "Domingo 21 de Junio", fin: "Viernes 26 de Junio" },
    { mesa: 5, inicio: "Martes 04 de Agosto", fin: "Lunes 10 de Agosto" },
    { mesa: 6, inicio: "Viernes 21 de Agosto", fin: "Miércoles 26 de Agosto" },
    { mesa: 7, inicio: "Lunes 21 de Septiembre", fin: "Sábado 26 de Septiembre" },
    { mesa: 8, inicio: "Miércoles 21 de Octubre", fin: "Lunes 26 de Octubre" },
    { mesa: 9, inicio: "Martes 01 de Diciembre", fin: "Miércoles 09 de Diciembre" },
    { mesa: 10, inicio: "Jueves 01 de Febrero (2027)", fin: "Jueves 11 de Febrero (2027)" },
    { mesa: 11, inicio: "Domingo 21 de Febrero (2027)", fin: "Viernes 26 de Febrero (2027)" },
  ]

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
            Calendario de Exámenes 2026
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Fechas de sustanciación de exámenes para alumnos regulares y cronograma de mesas libres
          </p>
        </motion.div>

        <Tabs defaultValue="regulares" className="space-y-8">
          <TabsList className="grid grid-cols-2 gap-4 bg-transparent max-w-md mx-auto">
            <TabsTrigger
              value="regulares"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Mesas Regulares
            </TabsTrigger>
            <TabsTrigger
              value="libres"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white flex items-center gap-2"
            >
              <ClipboardList className="w-4 h-4" />
              Mesas Libres
            </TabsTrigger>
          </TabsList>

          {/* Mesas Regulares */}
          <TabsContent value="regulares">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-10">
              {/* Turno Febrero - Marzo 2026 */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-orange-400" />
                  Turno Febrero - Marzo 2026
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {mesasRegulares.febreroMarzo2026.map((mesa, index) => (
                    <motion.div key={index} variants={item} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-orange-400">{mesa.mesa}</span>
                          <span className="text-white">{mesa.fecha}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Turno Julio - Agosto 2026 */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-orange-400" />
                  Turno Julio - Agosto 2026 (Plan de Transición)
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {mesasRegulares.julioAgosto2026.map((mesa, index) => (
                    <motion.div key={index} variants={item} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-blue-400">{mesa.mesa}</span>
                          <span className="text-white">{mesa.fecha}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Turno Diciembre 2026 y Febrero - Marzo 2027 */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-orange-400" />
                  Turno Diciembre 2026 y Febrero - Marzo 2027
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {mesasRegulares.diciembre2026Marzo2027.map((mesa, index) => (
                    <motion.div key={index} variants={item} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 p-6">
                        <div className="flex flex-col items-center text-center gap-2">
                          <span className="text-lg font-bold text-orange-400">{mesa.mesa}</span>
                          <span className="text-white">{mesa.fecha}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Mesas Libres */}
          <TabsContent value="libres">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Cronograma Mesas Libres 2026</h2>
                <p className="text-blue-200">Períodos de inscripción habilitados por sistema</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-orange-400 font-bold">Mesa</th>
                      <th className="text-left py-4 px-4 text-orange-400 font-bold">Inicio Inscripción</th>
                      <th className="text-left py-4 px-4 text-orange-400 font-bold">Fin Inscripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mesasLibres.map((mesa, index) => (
                      <motion.tr
                        key={index}
                        variants={item}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 font-bold">
                            {mesa.mesa}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-white">{mesa.inicio}</td>
                        <td className="py-4 px-4 text-white">{mesa.fin}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards alternativas para móvil */}
              <div className="grid gap-4 md:hidden">
                {mesasLibres.map((mesa, index) => (
                  <motion.div key={index} variants={item} className="relative group">
                    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 font-bold flex-shrink-0">
                          {mesa.mesa}
                        </span>
                        <div className="space-y-1">
                          <p className="text-sm text-blue-200">
                            <span className="text-orange-400">Inicio:</span> {mesa.inicio}
                          </p>
                          <p className="text-sm text-blue-200">
                            <span className="text-orange-400">Fin:</span> {mesa.fin}
                          </p>
                        </div>
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
          <p className="text-sm text-orange-200">
            Las fechas están sujetas a modificaciones. Verificá siempre en el SIU Guaraní antes de inscribirte.
          </p>
        </motion.div>
      </Container>
    </div>
  )
}
