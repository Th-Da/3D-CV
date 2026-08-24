import type {CvSection} from '../../../types/cv'
import './InfoCard.css'

type InfoCardProps = {
  section: CvSection
  onClose: () => void
}

export function InfoCard({section, onClose}: InfoCardProps) {
  return (
    <aside className="info-card" aria-label={section.title}>
      <div className="info-card__header">
        <p className="info-card__kicker">CV station</p>
        <button className="info-card__close" type="button" onClick={onClose}>
          Close
        </button>
      </div>
      <h2 className="info-card__title">{section.title}</h2>
      <p className="info-card__summary">{section.summary}</p>
    </aside>
  )
}
