"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Main.module.css";
import { Reaction } from "./Reaction";
import { randomUUID } from "crypto";

const _reactions = [
  {
    id: "ea68a2be-31a2-46be-8764-32cdb685b6b7",
    message: "Hello, World!",
    x: 205,
    y: 301,
    author: "nico",
  },
  {
    id: "4afb5066-e336-4341-89fd-e26409adabfc",
    message: "Hello, World!",
    x: 280,
    y: 400,
    author: "nico",
  },
];

export const Main = () => {
  const [reactions, setReactions] = useState(_reactions);
  const [editingReaction, setEditingReaction] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (editingReaction) {
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const newReaction = {
      id: crypto.randomUUID(),
      message: "",
      x,
      y,
      author: "nico",
    };
    setReactions((reactions) => [...reactions, newReaction]);
    setEditingReaction(newReaction.id);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setEditingReaction(null);
    }
  };

  const onSaveReaction = () => {
    setEditingReaction(null);
  };

  return (
    <div onClick={handleClick} onKeyDown={handleKeyDown}>
      {reactions.map((reaction) => (
        <Reaction
          key={reaction.id}
          reaction={reaction}
          onSave={onSaveReaction}
          focused={editingReaction === reaction.id}
        />
      ))}
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </div>
  );
};
