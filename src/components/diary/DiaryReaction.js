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
                cursor: "pointer",
                marginBottom: 0,
                background: brandColor,
                color: "white",
              }
            : {
                cursor: "pointer",
                marginBottom: 0,
                color: brandColor,
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
