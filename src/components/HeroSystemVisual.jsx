import { ArrowDownRight } from "lucide-react";
import { documentModules } from "../data/documentModules.js";

export default function HeroSystemVisual() {
  return (
    <div className="hero-system-visual" aria-label="Dokumenditöötluse rakenduse interaktiivne vaade">
      <div className="monitor">
        <div className="monitor-titlebar">
          <span>Dokumenditöötlus v1.0</span>
          <span>Päris rakenduse vaade</span>
        </div>
        <div className="monitor-screen">
          <img
            src="/images/dokumenditootlus-launcher.png"
            alt="Dokumenditöötluse rakenduse päris käivitusvaade"
          />
          <div className="monitor-hotspots">
            {documentModules.map((module) => (
              <a
                href={`#${module.id}`}
                key={module.id}
                aria-label={`Liigu mooduli ${module.name} juurde`}
                title={`Vaata: ${module.name}`}
                style={{
                  left: `${module.launcherArea.left}%`,
                  top: `${module.launcherArea.top}%`,
                  width: `${module.launcherArea.width}%`,
                  height: `${module.launcherArea.height}%`,
                }}
              >
                <ArrowDownRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <p>Vali rakenduse moodul, et liikuda selle töövaate juurde.</p>
      </div>
    </div>
  );
}
