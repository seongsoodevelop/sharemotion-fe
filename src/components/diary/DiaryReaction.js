import { DiaryTag } from ".";

export default function DiaryReaction({ like, callback }) {
  return (
    <div style={{ marginTop: "0.5rem" }}>
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
        ❤️{like !== null ? ` ${like}` : null}
      </DiaryTag>
    </div>
  );
}
