import ActionButton from "./ActionButton";

const LoadFail = () => {
  return (
    <div className="h-full flex items-center justify-center bg-primary-color">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl">Opps, Failed to load...</h1>
        <p>
          Seems like a server error,{" "}
          <span className="text-secondary-color font-semibold">click</span> to
          try again
        </p>
        <ActionButton />
      </div>
    </div>
  );
};

export default LoadFail;
