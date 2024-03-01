import { DiaryTag } from ".";

const REACTION_DB = ["❤️", "😊", "😮", "😔", "😡"];

export default function DiaryReaction({ reaction_string }) {
  const reaction_list = reaction_string
    .trim()
    .split(" ")
    .map((o) => Number(o));

  return (
    <div style={{ marginTop: "0.5rem" }}>
      {reaction_list.map((o, i) => (
        <DiaryTag
          key={i}
          style={{
            cursor: "pointer",
            marginBottom: 0,
          }}
          onClick={() => {}}
        >
          {REACTION_DB[i]} {o}
        </DiaryTag>
      ))}
    </div>
  );
}
