import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://github.com/Podter/pimp-my-readme-next");
  });

  return (
    <div>
      <p>Redirecting you to GitHub</p>
      <Link href={"https://github.com/Podter/pimp-my-readme-next"}>
        <a>Podter/pimp-my-readme-next</a>
      </Link>
    </div>
  );
}
