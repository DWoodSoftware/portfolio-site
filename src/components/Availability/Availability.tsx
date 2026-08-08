import type { Availability as AvailabilityData } from "../../domain/Availability";

import "./Availability.css";

interface AvailabilityProps {
  availability: AvailabilityData;
}

export function Availability({
  availability,
}: AvailabilityProps) {
  return (
    <section
      className="availability"
      aria-labelledby="availability-title"
    >
      <header className="availability__header">
        <span
          className="availability__status"
          data-status={availability.status}
          aria-hidden="true"
        />

        <h1 id="availability-title">
          {availability.headline}
        </h1>
      </header>

      <dl className="availability__list">
        <div className="availability__item">
          <dt>Open to</dt>

          <dd>
            {availability.capacities
              .map((capacity) => capacity.label)
              .join(" · ")}
          </dd>
        </div>

        <div className="availability__item">
          <dt>Location</dt>

          <dd>
            {availability.locations.join(" · ")}
          </dd>
        </div>

        <div className="availability__item">
          <dt>Working model</dt>

          <dd>
            {availability.workingModels.join(" · ")}
          </dd>
        </div>
      </dl>
    </section>
  );
}