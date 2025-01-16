declare module "webvtt-player" {
  import * as React from "react";

  interface PlayerProps {
    audio: string;
    transcript: string;
  }

  export const Player: React.FC<PlayerProps>;
}
