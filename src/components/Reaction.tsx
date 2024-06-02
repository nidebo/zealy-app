"use client";
import { useEffect, useState } from "react";
import styles from "./Reaction.module.css";

export type IReaction = {
  id: string;
  message: string;
  x: number;
  y: number;
  author: string;
};

const getAuthorInitial = (author: string) => author[0];

type PinReactionProps = {
  reaction: IReaction;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const PinReaction = ({ reaction, onClick }: PinReactionProps) => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${reaction.x}%`,
        top: `${reaction.y}%`,
      }}
      className={styles.pinReaction}
      onClick={onClick}
    >
      {getAuthorInitial(reaction.author)}
    </div>
  );
};

type ReactionProps = {
  reaction: IReaction;
  onSave: (reaction: IReaction) => void;
  onFocus: (reaction: IReaction) => void;
  focused: boolean;
};

export const Reaction = ({
  reaction,
  onSave,
  onFocus,
  focused,
}: ReactionProps) => {
  const [message, setMessage] = useState(reaction.message);

  const onClickPin = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onFocus(reaction);
  };

  if (!focused) {
    return <PinReaction reaction={reaction} onClick={onClickPin} />;
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClickSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onSave({ ...reaction, message });
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className={styles.reaction}
      style={{
        position: "absolute",
        left: `${reaction.x}%`,
        top: `${reaction.y}%`,
      }}
      onClick={handleClick}
    >
      <div className={styles.reactionInputInitial}>
        {getAuthorInitial(reaction.author)}
      </div>
      <input
        className={styles.reactionInput}
        type="text"
        value={message}
        placeholder="Add comment..."
        onChange={handleMessageChange}
      />
      <button className={styles.reactionButton} onClick={handleClickSave}>
        Save
      </button>
    </div>
  );
};
