import ActionButton from "./ActionButton";

const LoadFail = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <img
          src="https://github.com/DVT-Launchpad-Web-Cadets/Musa-React-Manga-Project/assets/93927619/7c7650f6-0eae-45cf-bea8-251f60aaa5bc"
          alt="error"
        />
        <h1 className="text-3xl">Opps, Failed to load...</h1>
        <p>
          <span className="text-secondary-color font-semibold">click</span> to
          try again
        </p>
        <ActionButton />
      </div>
    </div>
  );
};

export default LoadFail;
