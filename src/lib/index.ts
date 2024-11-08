import type { AnchorOps } from "../app";

// place files you want to import through the `$lib` alias in this folder.
export const scrollToAnchor = (anchorOps: AnchorOps): void => {
    const anchor: HTMLAnchorElement = document.getElementById(
        anchorOps.id
    ) as HTMLAnchorElement;
    const offsety = anchorOps.offset || 0;
    const position = anchor.getBoundingClientRect().top + window.scrollY + offsety;
    // section2.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    window.scrollTo({ top: position, behavior: "smooth" });
};