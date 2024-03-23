import axios from "axios";

export default axios.create({
  baseURL:
    "https://api.unsplash.com/photos/?client_id=G-lWS70H68LJIo-FK0_XYfn1-lXeRurqiCpY2p3SCNw",
  headers: {
    Authorization: "Client-ID G-lWS70H68LJIo-FK0_XYfn1-lXeRurqiCpY2p3SCNw",
  },
});
