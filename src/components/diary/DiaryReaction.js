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
                boxShadow: `rgba(255, 104, 104, 0.5) 0px 0px 32px -1px`,
                WebkitBoxShadow: "rgba(255, 104, 104, 0.5) 0px 0px 32px -1px",
                MozBoxShadow: "rgba(255, 104, 104, 0.5) 0px 0px 32px -1px",
              }
            : {
                minWidth: "3rem",
                cursor: "pointer",
                marginBottom: 0,
                background: "white",
                color: brandColor,
                textAlign: "center",
                boxShadow: "rgba(255, 104, 104, 0.5) 0px 0px 32px -1px",
                WebkitBoxShadow: "rgba(255, 104, 104, 0.5) 0px 0px 32px -1px",
                MozBoxShadow: "rgba(255, 104, 104, 0.5) 0px 0px 32px -1px",
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
