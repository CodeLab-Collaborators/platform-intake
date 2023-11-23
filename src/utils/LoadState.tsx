import ScaleLoader from "react-spinners/ScaleLoader";
const Loading = () => {
	return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0, 0.5)",
        minHeight: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "1000",
        backdropFilter: "blur(5px)",
      }}
      // class='model'
    >
      <ScaleLoader
        color="white"
        // size={50}
      />
    </div>
  );
};

export default Loading;
