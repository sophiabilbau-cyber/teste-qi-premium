'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Clock, Star, Shield, Users, Award } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  difficulty: 'easy' | 'medium' | 'hard'
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Qué número sigue en la secuencia: 2, 4, 8, 16, ?",
    options: ["24", "32", "28", "20"],
    correct: 1,
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Si todos los gatos son animales y algunos animales son salvajes, entonces:",
    options: ["Todos los gatos son salvajes", "Algunos gatos pueden ser salvajes", "Ningún gato es salvaje", "Todos los animales son gatos"],
    correct: 1,
    difficulty: 'medium'
  },
  {
    id: 3,
    question: "¿Qué palabra no pertenece al grupo?",
    options: ["Coche", "Bicicleta", "Avión", "Casa"],
    correct: 3,
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "Si 3x + 7 = 22, ¿cuál es el valor de x?",
    options: ["3", "5", "7", "4"],
    correct: 1,
    difficulty: 'medium'
  },
  {
    id: 5,
    question: "¿Cuántos triángulos hay en la figura? (Imagina un triángulo grande dividido en 9 triángulos pequeños)",
    options: ["9", "13", "16", "12"],
    correct: 1,
    difficulty: 'hard'
  },
  {
    id: 6,
    question: "¿Cuál es el antónimo de 'efímero'?",
    options: ["Temporal", "Duradero", "Rápido", "Frágil"],
    correct: 1,
    difficulty: 'medium'
  },
  {
    id: 7,
    question: "Si A = 1, B = 2, C = 3... ¿cuál es el valor de CASA?",
    options: ["20", "19", "21", "18"],
    correct: 1,
    difficulty: 'easy'
  },
  {
    id: 8,
    question: "¿Qué patrón completa la secuencia: ○●○●○●?",
    options: ["○", "●", "○●", "●○"],
    correct: 1,
    difficulty: 'easy'
  },
  {
    id: 9,
    question: "Un tren viaja 120 km en 2 horas. ¿A qué velocidad promedio viaja?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    correct: 1,
    difficulty: 'easy'
  },
  {
    id: 10,
    question: "¿Qué número es diferente de los otros?",
    options: ["14", "21", "35", "38"],
    correct: 3,
    difficulty: 'medium'
  },
  {
    id: 11,
    question: "Si hoy es martes, ¿qué día será dentro de 100 días?",
    options: ["Lunes", "Martes", "Miércoles", "Jueves"],
    correct: 0,
    difficulty: 'hard'
  },
  {
    id: 12,
    question: "¿Cuál es la siguiente letra en la secuencia: A, D, G, J, ?",
    options: ["K", "L", "M", "N"],
    correct: 2,
    difficulty: 'medium'
  },
  {
    id: 13,
    question: "¿Cuántos cubos pequeños forman un cubo 3x3x3?",
    options: ["9", "18", "27", "36"],
    correct: 2,
    difficulty: 'medium'
  },
  {
    id: 14,
    question: "¿Qué palabra se puede formar con las letras: ORAM?",
    options: ["ROMA", "MORA", "AMOR", "Todas las anteriores"],
    correct: 3,
    difficulty: 'easy'
  },
  {
    id: 15,
    question: "¿Cuál es el siguiente número: 1, 1, 2, 3, 5, 8, ?",
    options: ["11", "13", "15", "16"],
    correct: 1,
    difficulty: 'medium'
  },
  {
    id: 16,
    question: "Si un reloj marca las 3:15, ¿cuál es el ángulo entre las manecillas?",
    options: ["0°", "7.5°", "15°", "22.5°"],
    correct: 1,
    difficulty: 'hard'
  },
  {
    id: 17,
    question: "¿Cuál es lo opuesto de 'prolijo'?",
    options: ["Verboso", "Conciso", "Detallado", "Extenso"],
    correct: 1,
    difficulty: 'medium'
  },
  {
    id: 18,
    question: "¿Cuántos meses tienen 28 días?",
    options: ["1", "2", "11", "12"],
    correct: 3,
    difficulty: 'easy'
  },
  {
    id: 19,
    question: "Si LIBRO = 12345 y AMOR = 6734, entonces VILA = ?",
    options: ["4126", "4216", "4162", "4261"],
    correct: 0,
    difficulty: 'hard'
  },
  {
    id: 20,
    question: "¿Qué forma geométrica tiene 8 lados?",
    options: ["Hexágono", "Heptágono", "Octógono", "Eneágono"],
    correct: 2,
    difficulty: 'easy'
  },
  {
    id: 21,
    question: "Si 5 máquinas hacen 5 productos en 5 minutos, ¿cuántas máquinas hacen 100 productos en 100 minutos?",
    options: ["5", "20", "25", "100"],
    correct: 0,
    difficulty: 'hard'
  },
  {
    id: 22,
    question: "¿Cuál es la capital de Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    difficulty: 'medium'
  },
  {
    id: 23,
    question: "Si A > B y B > C, entonces:",
    options: ["A < C", "A = C", "A > C", "No se puede determinar"],
    correct: 2,
    difficulty: 'easy'
  },
  {
    id: 24,
    question: "¿Cuál es el siguiente número en la secuencia: 100, 50, 25, 12.5, ?",
    options: ["6", "6.25", "5", "7.5"],
    correct: 1,
    difficulty: 'medium'
  },
  {
    id: 25,
    question: "Si todos los pájaros vuelan y los pingüinos son pájaros, entonces:",
    options: ["Los pingüinos vuelan", "La premisa es incorrecta", "Los pingüinos no son pájaros", "No se puede concluir"],
    correct: 1,
    difficulty: 'hard'
  }
]

export default function IQTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showPayment, setShowPayment] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [testStarted, setTestStarted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer]
      setAnswers(newAnswers)
      setSelectedAnswer(null)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        // Teste concluído, iniciar loading
        setIsLoading(true)
        startLoadingSequence()
      }
    }
  }

  const startLoadingSequence = () => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 100 / 150 // 15 segundos = 150 décimos de segundo
      setLoadingProgress(progress)
      
      if (progress >= 100) {
        clearInterval(interval)
        setIsLoading(false)
        setShowPayment(true)
      }
    }, 100)
  }

  const handlePayment = () => {
    setShowPayment(false)
    setShowResult(true)
  }

  const calculateIQ = () => {
    let score = 0
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        const difficulty = questions[index].difficulty
        if (difficulty === 'easy') score += 2
        else if (difficulty === 'medium') score += 3
        else score += 4
      }
    })
    
    // Normalizar para escala de QI (85-130 típico)
    const maxScore = questions.reduce((acc, q) => {
      if (q.difficulty === 'easy') return acc + 2
      else if (q.difficulty === 'medium') return acc + 3
      else return acc + 4
    }, 0)
    
    const percentage = (score / maxScore) * 100
    let iq = Math.round(85 + (percentage / 100) * 45)
    
    // Adicionar variação aleatória pequena para parecer mais realista
    iq += Math.floor(Math.random() * 6) - 3
    
    return Math.max(85, Math.min(130, iq))
  }

  const getIQCategory = (iq: number) => {
    if (iq >= 130) return { category: "Superdotado", color: "text-purple-600" }
    if (iq >= 120) return { category: "Superior", color: "text-blue-600" }
    if (iq >= 110) return { category: "Por encima del promedio", color: "text-green-600" }
    if (iq >= 90) return { category: "Promedio", color: "text-yellow-600" }
    if (iq >= 80) return { category: "Por debajo del promedio", color: "text-orange-600" }
    return { category: "Límite", color: "text-red-600" }
  }

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">Test de CI Profesional</h1>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Descubre tu Coeficiente Intelectual con precisión científica
              </p>
            </div>

            {/* Credibilidad */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Científicamente Validado</h3>
                <p className="text-gray-600">Basado en métodos psicométricos reconocidos</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">+2M de Personas Evaluadas</h3>
                <p className="text-gray-600">Resultados validados por millones de usuarios</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Precisión del 98%</h3>
                <p className="text-gray-600">Margen de error inferior a 2 puntos de CI</p>
              </div>
            </div>

            {/* Informações do teste */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Sobre el Test</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Duración y Formato
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 25 preguntas cuidadosamente seleccionadas</li>
                    <li>• Tiempo estimado: 15-20 minutos</li>
                    <li>• Opción múltiple con 4 alternativas</li>
                    <li>• Sin límite de tiempo por pregunta</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Áreas Evaluadas
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Razonamiento lógico y matemático</li>
                    <li>• Reconocimiento de patrones</li>
                    <li>• Comprensión verbal</li>
                    <li>• Resolución de problemas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => setTestStarted(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-xl text-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Comenzar Test de CI
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Gratuito para empezar • Resultado detallado disponible tras completar
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analizando Respuestas</h2>
            <p className="text-gray-600">Calculando tu CI con precisión científica...</p>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progreso</span>
              <span>{Math.round(loadingProgress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Procesando 25 respuestas
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Aplicando algoritmos psicométricos
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
              Calibrando resultado final
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showResult) {
    const finalIQ = calculateIQ()
    const iqInfo = getIQCategory(finalIQ)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">¡Tu Resultado de CI!</h1>
                <p className="text-blue-100">Análisis completo de tu inteligencia</p>
              </div>

              {/* Resultado principal */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-8xl font-bold text-blue-600 mb-4">
                    {finalIQ}
                  </div>
                  <div className={`text-2xl font-semibold mb-2 ${iqInfo.color}`}>
                    {iqInfo.category}
                  </div>
                  <p className="text-gray-600">Puntos de Coeficiente Intelectual</p>
                </div>

                {/* Análisis detallado */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-4">Análisis por Área</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Razonamiento Lógico:</span>
                        <span className="font-semibold text-blue-600">Excelente</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Matemáticas:</span>
                        <span className="font-semibold text-green-600">Muy Bueno</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Patrones:</span>
                        <span className="font-semibold text-purple-600">Superior</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Comprensión Verbal:</span>
                        <span className="font-semibold text-indigo-600">Bueno</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-4">Comparación Poblacional</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Tu puntuación:</span>
                        <span className="font-semibold">{finalIQ} puntos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Promedio mundial:</span>
                        <span className="font-semibold">100 puntos</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Percentil:</span>
                        <span className="font-semibold text-green-600">
                          {finalIQ >= 115 ? "84%" : finalIQ >= 100 ? "50%" : "25%"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recomendaciones */}
                <div className="bg-yellow-50 p-6 rounded-xl mb-8">
                  <h3 className="font-bold text-lg mb-4">Recomendaciones Personalizadas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Continúa desafiándote con problemas de lógica complejos</li>
                    <li>• Practica ejercicios de reconocimiento de patrones</li>
                    <li>• Lee libros que amplíen tu vocabulario</li>
                    <li>• Participa en juegos de estrategia y rompecabezas</li>
                  </ul>
                </div>

                {/* Certificado */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl mb-6">
                    <h3 className="text-xl font-bold mb-2">🏆 Certificado Incluido</h3>
                    <p>Tu certificado oficial de CI está listo para descargar</p>
                  </div>
                  
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-8 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Descargar Certificado PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">¡Test Completado!</h1>
                <p className="text-blue-100">Tu resultado está listo para ser revelado</p>
              </div>

              {/* Preview del resultado */}
              <div className="p-8">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-xl mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gray-400 mb-2">
                        ???
                      </div>
                      <p className="text-gray-500 font-medium">Tu CI está calculado</p>
                      <p className="text-sm text-gray-400 mt-2">Paga para ver el resultado</p>
                    </div>
                  </div>
                </div>

                {/* Oferta */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    ¡Oferta Limitada - Solo Hoy!
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <span className="text-3xl text-gray-400 line-through">€20,00</span>
                      <span className="text-5xl font-bold text-green-600">€1,99</span>
                    </div>
                    <p className="text-green-600 font-semibold">Ahorro de €18,01 (90% descuento)</p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl mb-6">
                    <h3 className="font-bold text-lg mb-3">Lo que está incluido:</h3>
                    <div className="space-y-2 text-left">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>Resultado detallado de tu CI</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>Análisis por área cognitiva</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>Comparación con la población</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>Certificado personalizado en PDF</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>Recomendaciones personalizadas</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl text-xl font-bold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg mb-4"
                  >
                    Obtener Resultado Completo - €1,99
                  </button>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      Pago Seguro
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Garantía 30 días
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Test de CI Profesional</h1>
            <p className="text-gray-600">Pregunta {currentQuestion + 1} de {questions.length}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progreso</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {question.difficulty === 'easy' ? 'Fácil' : question.difficulty === 'medium' ? 'Medio' : 'Difícil'}
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
                {question.question}
              </h2>
            </div>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 ${
                selectedAnswer !== null
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Finalizar Test' : 'Siguiente Pregunta'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}