import contact from "../pages/frontend/contact";
import Cart from "../pages/frontend/Cart";
import Home from "../pages/frontend/Home";
import Login from "../pages/frontend/Login";
import Register from "../pages/frontend/Register";
import Product_All from "../pages/frontend/Products/Product_All";
import Product_Detail from "../pages/frontend/Products/Product_Detail";
// import GioiThieu from "../pages/frontend/GioiThieu";
import My_Profile from "../pages/frontend/Profile";
import Profile_Address from "../pages/frontend/Profile/Profile_Address";
import Profile_Setting from "../pages/frontend/Profile/Profile_Setting";
import Profile_Order from "../pages/frontend/Profile/Profile_Order";
import Policy from "../pages/frontend/Policy";
import News from "../pages/frontend/News";
import Product_Category from "../pages/frontend/Product_List/Product_Category";
import Product_Brand from "../pages/frontend/Product_List/Product_Brand";
import Search_Product from "../pages/frontend/Search_Product";
import New_Detail from "../pages/frontend/News/New_Detail";
import Post_Topic from "../pages/frontend/News/Post_Topic";
import Form_AddToCart from "../pages/frontend/Cart/Form_AddToCart";
// import Product_List from "../compoment/frontend/Product_List";
const RouterPublic = [
    {path:'/',component:Home},

    // Đăng kí, Đăng nhập
    {path:'/pages/login',component:Login},
    {path:'/pages/register',component:Register},


    // Sản phẩm
    {path:'/pages/san-pham',component:Product_All},
    {path:'/pages/tim-kiem/:key',component:Search_Product},
    {path:'/pages/san-pham/:slug/:sapxep',component:Product_Category},
    {path:'/pages/san-pham/:slug',component:Product_Category},
    {path:'/pages/san-pham/sap-xep/:slug',component:Product_All},
    {path:'/pages/thuong-hieu/:slug/:sapxep',component:Product_Brand},
    {path:'/pages/thuong-hieu/:slug',component:Product_Brand},
    {path:'/pages/san-pham/chi-tiet-san-pham/:slug',component:Product_Detail},


    // Trang con
    // {path:'/pages/gioi-thieu',component:GioiThieu},
    {path:'/pages/:slug',component:Policy},
    {path:'/pages/tin-tuc',component:News},
    {path:'/pages/tin-tuc/chi-tiet-bai-viet/:slug',component:New_Detail},
    {path:'/pages/tin-tuc/:slug',component:Post_Topic},
    {path:'/pages/cart/form-cart',component:Form_AddToCart},


    // Profile
    {path:'/pages/profile',component:My_Profile},
    {path:'/pages/profile/address-profile',component:Profile_Address},
    {path:'/pages/profile/setting-profile',component:Profile_Setting},
    {path:'/pages/profile/order-profile',component:Profile_Order},
    // {path:'/chi-tiet-san-pham/:slug',component:ProductDetail},
    // {path:'/danh-muc-san-pham/:slug',component:ProductCategory},
    // {path:'/thuong-hieu/:slug',component:ProductBrand},
    {path:'/pages/lien-he',component:contact},
    // {path:'/tin-tuc',component:News},
    // {path:'/:slug',component:Introduce},
    // {path:'/chi-tiet-bai-viet/:slug',component:NewsDetail},
    // {path:'/tin-tuc/:slug',component:PostTopic},
    // {path:'/tim-kiem/:keyword',component:SearchProduct},
    {path:'/cart',component:Cart},

];
export default RouterPublic;