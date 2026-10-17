import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets:["latin"], variable:"--font-display", display:"swap" });
const body = Manrope({ subsets:["latin"], variable:"--font-body", display:"swap" });
export const metadata:Metadata={title:"DB Design | Sua marca, no papel — demonstração",description:"Prévia independente de site para a DB Design, gráfica em Santa Rosa, Niterói. Cartões, tags e etiquetas personalizadas.",robots:{index:false,follow:false}};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-BR"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>}
