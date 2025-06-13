import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["countdown"]

  connect() {
    console.log("🚀 HeroController connected")
    this.participants = 123
    this.startCountdown()

    // Odometer expects .innerText update
    this.odometerEl = document.getElementById("participant-odometer")
    this.odometerEl.innerText = this.participants
    this.startRolling()
  }

  startCountdown() {
    this.updateCountdown()
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000)
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

  startRolling() {
    setInterval(() => {
      this.participants += Math.floor(Math.random() * 3)
      this.odometerEl.innerText = this.participants
    }, 3000)
  }
}
