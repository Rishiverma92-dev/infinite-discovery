import SignalBackground from "../components/SignalBackground";

export default function Landing({ setScreen }) {

  function enterArchive() {

    localStorage.setItem(
      "archiveAccess",
      "true"
    );

    setScreen("archive");
  }

  return (

    <div className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      relative
      overflow-hidden
    ">

      <SignalBackground />

      <div className="
        text-center
        z-10
      ">

        <h1 className="
          text-5xl
          tracking-[0.4em]
          mb-6
        ">
          INFINITE DISCOVERY
        </h1>

        <p className="
          text-white/70
          mb-8
        ">
          A recovered archive of
          non-human intelligence.
        </p>

        <div className="
          mb-10
          leading-8
          text-white/80
        ">

          Signal Pattern Zero

          <br />

          Status: Detected

          <br />

          Archive Recovery: 0.03%

        </div>

        <button

          onClick={enterArchive}

          className="
            px-8
            py-4

            border
            border-white/20

            hover:border-white/60

            transition
          "
        >

          ACCESS ARCHIVE

        </button>

      </div>

    </div>
  );
}