export default function DiaryHomeWrapper({ children, style }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 1rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}
