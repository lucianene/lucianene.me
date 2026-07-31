import "../app/main.scss";
import { useEffect, useRef, useState } from "react";

const SECTIONS = ["about", "skills", "projects"] as const;

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState<string>("about");
  const clickingRef = useRef(false);
  const clickTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveFromScroll = () => {
      if (clickingRef.current) return;

      const marker = window.innerHeight * 0.28;
      let crossed = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) {
          crossed = id;
        }
      }
      setActive(crossed);
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
      if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current);
    };
  }, []);

  const onNavClick = (id: string) => {
    setActive(id);
    clickingRef.current = true;
    if (clickTimerRef.current) window.clearTimeout(clickTimerRef.current);
    clickTimerRef.current = window.setTimeout(() => {
      clickingRef.current = false;
    }, 700);
  };

  return (
  <div lang="en" className="grey-text:200">
    <div className="container pv-20">
      <div className="row">
        <div className="md:col-2 xs:hidden md:show p-0 relative">
          <div className="side_menu">
            <ul className="text-right list-none">
              {SECTIONS.map((item) => {
                return <li key={item}>
                  <a
                    className={"grey-text:400 hover:grey-text:100 block pt-5 pb-10" + (active === item ? " is-active" : "")}
                    href={"#" + item}
                    onClick={() => onNavClick(item)}
                  >
                    #{item}
                  </a>
                </li>
              })}
            </ul>
          </div>
        </div>
        <div className="md:col-10 xs:col-12">
          {children}
          <div className="mv-50 pt-20 bt-1 grey-border:900 fs-xs">
            <div><span className="mb-5">@2026 Lucian Ene</span> <br /><small>made with nextjs and fastcss</small></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
