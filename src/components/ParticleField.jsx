import React, { useEffect, useRef } from 'react'

const ParticleField = () => {
  const canvasRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particles = useRef([])
  const animationFrameId = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      for (let i = 0; i < 100; i++) {
        particles.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          originalX: Math.random() * width,
          originalY: Math.random() * height,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particles.current.forEach(particle => {
        const dx = mousePosition.current.x - particle.x
        const dy = mousePosition.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const force = (100 - Math.min(distance, 100)) / 100

        if (distance < 100) {
          particle.x += (dx / distance) * force * -1
          particle.y += (dy / distance) * force * -1
        } else {
          particle.x += (particle.originalX - particle.x) * 0.05
          particle.y += (particle.originalY - particle.y) * 0.05
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + force * 0.7})`
        ctx.fill()
      })

      animationFrameId.current = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}

export default ParticleField
