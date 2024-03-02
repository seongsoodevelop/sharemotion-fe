import { DiaryTag } from ".";

export default function DiaryReaction({ like }) {
  return (
    <div style={{ marginTop: "0.5rem" }}>
      <DiaryTag
        style={{
          cursor: "pointer",
          marginBottom: 0,
        }}
        onClick={() => {}}
      >
        ❤️{like ? ` ${like}` : null}
      </DiaryTag>
    </div>
  );
}
