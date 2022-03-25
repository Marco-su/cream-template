import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Info from "../views/Info";
import Error404 from "../views/Error404";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cream-template" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RoutesComponent;
