import Chip from "../../../sharedComponents/Chip";

const AdvancedSearch = () => {
  return (
    <>
      <div className="flex flex-col gap-3 py-5 px-4">
        <h1>Genres</h1>
        <div className="flex gap-6 flex-wrap">
          <Chip genre="Action" />
          <Chip genre="Comedy" />
          <Chip genre="Adventure" />
          <Chip genre="Drama" />
          <Chip genre="Martial arts" />
          <Chip genre="Music" />
        </div>
      </div>
      <div className="flex flex-col gap-3 py-5 px-4">
        <h1>Status</h1>
        <div className="flex gap-6 flex-wrap">
          <Chip genre="OnGoing" icon="ongoing"/>
          <Chip genre="Completed" icon="completed" />
        </div>
      </div>
    </>
  );
};

export default AdvancedSearch;
