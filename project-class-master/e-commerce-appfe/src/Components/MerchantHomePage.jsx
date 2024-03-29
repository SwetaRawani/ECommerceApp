import { Route, Routes } from "react-router-dom";
import MerchantNavabr from "./MerchantNavabr";
import ProductView from "./ProductView";
import UpdateMerchant from "./UpdateMerchant";
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";

const MechantHomePage = () => {
    return (
        <div className="mhp">
            <MerchantNavabr />
            <Routes>
                <Route path="/productview" element={<ProductView />} />
                <Route path="/updatemerchant" element={<UpdateMerchant />} />
                <Route path="/addproduct" element={<AddProducts />} />
                <Route path="/editproduct" element={<EditProduct />} />

            </Routes>
        </div>
    );
}

export default MechantHomePage;