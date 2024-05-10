import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  RouterProvider,
} from "react-router-dom";
import { Programs, Services } from "./pages";
import { Footer, NavBar } from "@components/organisms";
import { AppRoutes } from "@routes/Routes";
import { Provider, useDispatch } from "react-redux";
import store, { clearUser, setUser } from "./store/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       dispatch(
  //         setUser({
  //           uid: user.uid,
  //           email: user.email,
  //         })
  //       );
  //     } else {
  //       dispatch(clearUser());
  //     }
  //   });

  //   return unsubscribe; // Clean up the subscription
  // }, [dispatch]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={AppRoutes} />
      </Provider>
    </>
    // <BrowserRouter>
    //   <div className="flex flex-col min-h-screen">
    //     <NavBar isScrolled={isScrolled} />
    //     {/* Adjust padding to account for fixed navbar */}
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <div className="flex flex-col gap-y-6">
    //             <Home />
    //             <section className="flex flex-col gap-y-5" id="services">
    //               <FreeServices />
    //               <Services />
    //             </section>
    //             <section className="flex flex-col mb-8" id="about">
    //               <AboutOne />
    //               <AboutTwo />
    //             </section>
    //             <BlogsBrief />
    //             <ContactUs />
    //           </div>
    //         }
    //       />
    //       <Route path="/programs" element={<Programs />} />
    //       {/* <Route path="/services" element={<Services />} /> */}
    //       {/* <Route
    //           path="/about"
    //           element={
    //             <>
    //               <AboutOne />
    //               <AboutTwo />
    //             </>
    //           }
    //         />
    //         <Route path="/contact" element={<ContactUs />} />
    //         <Route path="/blogs" element={<BlogsBrief />} /> */}
    //       {/* Add other routes as needed */}
    //     </Routes>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
