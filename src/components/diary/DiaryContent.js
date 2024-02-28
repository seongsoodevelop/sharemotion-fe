export default function DiaryContent({ children }) {
  return (
    <pre
      style={{
        fontFamily: "Pretendard",
        wordBreak: "break-all",
        width: "100%",
        whiteSpace: "pre-wrap",
        margin: 0,
      }}
    >
      {children}
    </pre>
  );
}
