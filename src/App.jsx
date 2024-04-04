import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import HeadPhones from "./pages/headPhones";
import Speakers from "./pages/speakers";
import EarPhones from "./pages/earPhones";
import BlackHead from "./products/blackHead";
import BorderHead from "./products/borderHead";
import WhiteHead from "./products/whiteHead";
import BlackSpeaker from "./products/blackSpeaker";
import GreySpeaker from "./products/greySpeaker";
import EarPhone from "./products/earPhone";
import CheckOut from "./products/checkOut";
import { useState } from "react";
import Login from "./login/login";
import NotFound from "./products/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/"
          element={isLoggedIn ? <Layout /> : <Navigate to="/login" />}
        >
          <Route index element={<Home />} />
          <Route path="/headPhones" element={<HeadPhones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<EarPhones />} />
          <Route path="/blackHead" element={<BlackHead />} />
          <Route path="/borderHead" element={<BorderHead />} />
          <Route path="/whiteHead" element={<WhiteHead />} />
          <Route path="/blackSpeaker" element={<BlackSpeaker />} />
          <Route path="/greySpeaker" element={<GreySpeaker />} />
          <Route path="/earPhone" element={<EarPhone />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/headPhones' element={<HeadPhones/>}/>
          <Route path='/speakers' element={<Speakers/>}/>
          <Route path='/earphones' element={<EarPhones/>}/>
          <Route path='/blackHead' element={<BlackHead/>}/>
          <Route path='/borderHead' element={<BorderHead/>}/>
          <Route path='/whiteHead' element={<WhiteHead/>}/>
          <Route path='/blackSpeaker' element={<BlackSpeaker/>}/>
          <Route path='/greySpeaker' element={<GreySpeaker/>}/>
          <Route path='/earPhone' element={<EarPhone/>}/>
          <Route path='/checkOut' element={<CheckOut/>}/>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
