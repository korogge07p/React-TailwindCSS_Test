import Head from "./Head.jsx";
import Banner from "./components/Banner.jsx";
import Blogs from "./page/Blogs.jsx"
import Music from "./page/Music.jsx";
import Members from "./page/Members.jsx";
import Shop from "./page/Shop.jsx";
import Tidtor from "./page/Tidtor.jsx";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

const App = () => {
    return(
        <>
            <Head />
            <Routes>
              <Route path="/" element={<Banner />}/>
              <Route path="/blog" element={<Blogs />}/>
              <Route path="/music" element={<Music />}/>
              <Route path="/member" element={<Members />}/>
              <Route path="/shop" element={<Shop />}/>
              <Route path="*" element={<Error />} />
              <Route path="/contact" element={<Tidtor />}/>
            </Routes>
        </>
    )
}

export default App;
