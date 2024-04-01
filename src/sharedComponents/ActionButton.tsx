const ActionButton = () => {
  return (
    <button
      onClick={() => window.location.reload()}
      className="btn bg-secondary-color w-24 self-center"
    >
      Retry
    </button>
  );
};

export default ActionButton;
