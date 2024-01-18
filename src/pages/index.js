import Image from "next/image";
import { Inter } from "next/font/google";
import Categoria from "./categoria";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <Categoria />
        </main>
    );
}
