import { useState } from "react";
import Episode001 from "./Episode001";
import { useEffect } from "react";


export default function ArchiveOne() {
    const episode1Complete =
      localStorage.getItem("episode1_complete") === "true";

    const episode2Unlocked =
      localStorage.getItem("episode2_unlocked") === "true";

  const [episode, setEpisode] = useState(false);

  useEffect(() => {
    const returnArchive = localStorage.getItem("return_to_archive");

    if (returnArchive === "true") {
      setEpisode(false);

      localStorage.removeItem("return_to_archive");
    }
  }, []);

  if(episode){

  return <Episode001/>

}

  return (
    <div
      className="
      min-h-screen
      bg-black
      text-white
      p-10
    "
    >
      <div
        className="
        flex
        justify-between
        items-center
        border-b
        border-white/10
        pb-6
        mb-10
      "
      >
        <div>
          <h1
            className="
            text-4xl
            tracking-[0.2em]
          "
          >
            ARCHIVE ONE
          </h1>

          <p
            className="
            text-white/50
            mt-2
          "
          >
            Recovered Records of Non-Human Intelligence
          </p>
        </div>

        <div
          className="
          text-right
          text-white/60
        "
        >
          Recovery Status
          <br />
          {localStorage.getItem("episode1_complete") === "true"
            ? "12%"
            : "0.03%"}
        </div>
      </div>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
      "
      >
        {/* EPISODES */}

        <div
          className="
          border
          border-white/10
          p-6
        "
        >
          <h2
            className="
            mb-6
            text-xl
          "
          >
            EPISODES
          </h2>

          <div className="space-y-4">
            <div
              className="
              border
              border-white/10
              p-4
            "
            >
              001 — THE SIGNAL
              {episode1Complete && " ✓"}
            </div>

            <div
              className="
              opacity-40
              p-4
            "
            >
              {episode2Unlocked
                ? "002 — THE CLASSROOM"
                : "002 — THE CLASSROOM 🔒"}
            </div>

            <div
              className="
              opacity-40
              p-4
            "
            >
              003 — THE LANGUAGE 🔒
            </div>
          </div>
        </div>

        {/* CURRENT */}

        <div
          className="
          border
          border-white/10
          p-6
        "
        >
          <h2
            className="
            text-xl
            mb-6
          "
          >
            ACTIVE INVESTIGATION
          </h2>

          <div
            className="
            mb-6
          "
          >
            001 — THE SIGNAL
          </div>

          <div
            className="
            text-white/60
            mb-8
          "
          >
            Status: Available
          </div>

          <button
            onClick={() => {
              setEpisode(true);
            }}
            className="
px-6
py-3
border
border-white/20
hover:border-white/60
"
          >
            OPEN INVESTIGATION
          </button>
        </div>

        {/* DISCOVERIES */}

        <div
          className="
          border
          border-white/10
          p-6
        "
        >
          <h2
            className="
            text-xl
            mb-6
          "
          >
            DISCOVERIES
          </h2>

          <div
            className="
            space-y-3
            text-white/60
          "
          >
            <div>Archives: {localStorage.getItem("archives_found") || 0}</div>

            <div>
              Species:{" "}
              {localStorage.getItem("episode1_complete") === "true" ? 1 : 0}
            </div>

            <div>Artifacts: {localStorage.getItem("artifacts_found") || 0}</div>

            <div>Questions: {localStorage.getItem("questions_found") || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}