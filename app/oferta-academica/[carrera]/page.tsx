import CarreraClient from "./carrera-client"

// Genera las rutas estáticas para exportación
export function generateStaticParams() {
  return [
    { carrera: "ingenieria-en-computacion" },
    { carrera: "ingenieria-en-informatica" },
    { carrera: "ingenieria-civil" },
    { carrera: "ingenieria-electronica" },
    { carrera: "ingenieria-electrica" },
    { carrera: "ingenieria-mecanica" },
    { carrera: "ingenieria-quimica" },
    { carrera: "ingenieria-industrial" },
    { carrera: "ingenieria-biomedica" },
    { carrera: "ingenieria-azucarera" },
    { carrera: "ingenieria-geodesica-geofisica" },
    { carrera: "agrimensura" },
    { carrera: "licenciatura-fisica" },
    { carrera: "licenciatura-matematica" },
    { carrera: "licenciatura-informatica" },
    { carrera: "diseno-iluminacion" },
    { carrera: "programador-universitario" },
    { carrera: "tecnicatura-tecnologia-azucarera" },
    { carrera: "tecnicatura-fisica" },
    { carrera: "tecnicatura-fisica-ambiental" },
  ]
}

export default function CarreraPage() {
  return <CarreraClient />
}
