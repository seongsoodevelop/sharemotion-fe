import { brandColor } from "@lib/palette";
import { DiaryTag } from ".";

export default function DiaryReaction({ love, callback, onClick, loved }) {
  return (
    <div
      style={{ marginTop: "0.5rem" }}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <DiaryTag
        style={
          loved
            ? {
                minWidth: "3rem",
                cursor: "pointer",
                marginBottom: 0,
                background: brandColor,
                color: "white",
                textAlign: "center",
              }
            : {
                minWidth: "3rem",
                cursor: "pointer",
                marginBottom: 0,
                color: brandColor,
                textAlign: "center",
              }
        }
        onClick={() => {
          if (callback) {
            callback();
          }
        }}
      >
        ♥{love !== null ? ` ${love}` : null}
      </DiaryTag>
    </div>
  );
}
