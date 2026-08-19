import { Pause, Play, RotateCcw, RotateCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SPEEDS = [1, 1.25, 1.5, 1.75, 2] as const;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState<(typeof SPEEDS)[number]>(1);

  const cycleSpeed = () => {
    const audio = audioRef.current;
    const next = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length] ?? SPEEDS[0];
    setSpeed(next);
    if (audio) audio.playbackRate = next;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrent(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const skip = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(audio.currentTime + delta, 0), duration || Infinity);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrent(value);
  };

  return (
    <div className="w-full">
      <audio ref={audioRef} src={src} preload="metadata">
        <track kind="captions" />
      </audio>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => skip(-15)}
          aria-label="Back 15 seconds"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : `Play ${title}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
        </button>
        <button
          type="button"
          onClick={() => skip(15)}
          aria-label="Forward 15 seconds"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <RotateCw className="h-4 w-4" />
        </button>
        <span className="ledger w-10 shrink-0 text-right">{formatTime(current)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={current}
          onChange={seek}
          className="h-1.5 w-full flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
        />
        <span className="ledger w-10 shrink-0">{formatTime(duration)}</span>
        <button
          type="button"
          onClick={cycleSpeed}
          aria-label={`Playback speed, currently ${speed}x. Tap to change.`}
          className="ledger flex h-8 w-11 shrink-0 items-center justify-center rounded-full border border-border !text-[11px] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {speed}x
        </button>
      </div>
    </div>
  );
}
