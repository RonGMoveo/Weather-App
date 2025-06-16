const Background = () => {
  return (
    <>
      {/* Subtle clouds - absolute positioned */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-20 h-12 bg-white bg-opacity-30 rounded-full blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-14 bg-white bg-opacity-25 rounded-full blur-sm"></div>
        <div className="absolute top-96 left-16 w-16 h-10 bg-white bg-opacity-20 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-20 w-22 h-12 bg-white bg-opacity-30 rounded-full blur-sm"></div>
      </div>
    </>
  );
};

export default Background;