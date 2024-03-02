import { DiaryTag } from ".";

export default function DiaryReaction({ love, callback, onClick }) {
  return (
    <div
      style={{ marginTop: "0.5rem" }}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <DiaryTag
        style={{
          cursor: "pointer",
          marginBottom: 0,
        }}
        onClick={() => {
          if (callback) {
            callback();
          }
        }}
      >
        ❤️{love !== null ? ` ${love}` : null}
      </DiaryTag>
    </div>
  );
}
