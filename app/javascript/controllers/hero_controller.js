import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hero"
export default class extends Controller {
  static targets = ["countdown", "participant"]

  connect() {
    this.participants = 123
    this.startCountdown()
    this.updateParticipants()
  }

  startCountdown() {
    this.updateCountdown()
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1)
  }

  updateCountdown() {
    const eventDate = new Date("2026-01-16T09:00:00")
    const now = new Date()
    const diff = eventDate - now

    if (diff <= 0) {
      this.countdownTarget.innerText = "Hacking has started!"
      clearInterval(this.countdownInterval)
      return
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    this.countdownTarget.innerText = `Hacking begins in: ${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  updateParticipants() {
    setInterval(() => {
      this.participants += Math.floor(Math.random() * 2)
      this.renderRollingNumber(this.participantTarget, this.participants)
    }, 1000)
  }

  renderRollingNumber(container, number) {
    const numStr = number.toString().padStart(3, "0")
    container.innerHTML = "" // Clear existing digits

    for (let digit of numStr) {
      const digitSpan = document.createElement("span")
      digitSpan.classList.add("digit")
      digitSpan.textContent = digit
      digitSpan.style.transform = "translateY(-100%)"
      container.appendChild(digitSpan)

      // Trigger animation after a short delay (forces transition)
      requestAnimationFrame(() => {
        digitSpan.style.transform = "translateY(0)"
      })
    }
  }
}
