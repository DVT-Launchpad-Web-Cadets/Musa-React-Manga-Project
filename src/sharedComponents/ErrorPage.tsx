import HomeButton from "./HomeButton";

const ErrorPage = () => {
  return (
    <div className="h-full flex items-center justify-center bg-primary-color">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl">Opps, Unexpexted Error...</h1>
        <p>Page not found...</p>
        <HomeButton />
      </div>
    </div>
  );
};

export default ErrorPage;
