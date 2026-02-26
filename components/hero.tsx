"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Link from "next/link"

const basePath = process.env.NODE_ENV === 'production' ? '/LaBachofePage' : ''

export function Hero() {

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <Container className="relative pt-20 pb-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                  CALENDARIO
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mt-2">
                  ACADÉMICO 2026
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">¡ESTUDIANTES COMO VOS!</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/whatsapp-group"
                className="px-8 py-3 rounded-full bg-white/10 text-white font-medium backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
              >
                Unirse al Grupo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-600 rounded-3xl blur-3xl opacity-20" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <a
                href="https://www.instagram.com/p/DTdTykIDmL_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`${basePath}/images/image-20-281-29.png`}
                  alt="Calendario Académico 2026"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
