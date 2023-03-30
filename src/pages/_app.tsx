import "@/styles/globals.css";
import SideBar from "components/SideBar";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Navbar from "../../components/Navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">

      <div style={{
        minHeight:'100vh',
      }}
      className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
          <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500  lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
            <SideBar />
          </div>
          <div className="flex flex-col col-span-12 bg-white dark:bg-dark-500  lg:col-span-9 rounded-2xl overflow-hidden shadow-custom-light dark:shadow-custom-dark">
            <Navbar />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
      
    </ThemeProvider>
  );
}
