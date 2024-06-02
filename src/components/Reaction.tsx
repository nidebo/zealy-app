import { useState } from "react";
import styles from "./Reaction.module.css";

export type IReaction = {
  id: string;
  message: string;
  x: number;
  y: number;
  author: string;
};

type Props = {
  reaction: IReaction;
  onSave: (reaction: IReaction) => void;
  focused: boolean;
};

const getAuthorInitial = (author: string) => author[0];

const PinReaction = ({ reaction }: { reaction: IReaction }) => {
  return (
    <div
      style={{ position: "absolute", left: reaction.x, top: reaction.y }}
      className={styles.pinReaction}
    >
      {getAuthorInitial(reaction.author)}
    </div>
  );
};

export const Reaction = ({ reaction, onSave, focused }: Props) => {
  const [message, setMessage] = useState(reaction.message);

  if (!focused) {
    return <PinReaction reaction={reaction} />;
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSave({ ...reaction, message });
  };

  return (
    <div
      className={styles.reaction}
      style={{ position: "absolute", left: reaction.x, top: reaction.y }}
    >
      <input
        className={styles.reactionInput}
        type="text"
        value={message}
        placeholder="Add comment..."
        onChange={handleMessageChange}
      />
      <button className={styles.reactionButton} onClick={handleSave}>
        Save
      </button>
    </div>
  );
};
