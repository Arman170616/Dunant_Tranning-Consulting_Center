import type { Metadata } from "next"
import ServicesClient from "./services-client"

export const metadata: Metadata = {
  title: "الخدمات التدريبية | معهد دونان للاستشارات والتدريب",
  description: "دورات تدريبية ومحاضرات متخصصة في القانون الدولي الإنساني — معهد دونان للاستشارات والتدريب",
}

export default function ServicesPage() {
  return <ServicesClient />
}
