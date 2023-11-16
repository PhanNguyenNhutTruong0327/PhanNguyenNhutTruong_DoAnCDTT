import Brand_List from "../pages/backend/Brand/Brand_List";
import Brand_Show from "../pages/backend/Brand/Brand_Show";
import Brand_Update from "../pages/backend/Brand/Brand_Update";
import Category_List from "../pages/backend/Category";
import Show_Category from "../pages/backend/Category/Show_Category";
import Trash_Category from "../pages/backend/Category/Trash_Category";
import Update_Category from "../pages/backend/Category/Update_Category";
import Config from "../pages/backend/Config";
import Contact_List from "../pages/backend/Contact";
import Contact_Show from "../pages/backend/Contact/Contact_Show";
import Contact_Trash from "../pages/backend/Contact/Contact_Trash";
import Customer_List from "../pages/backend/Customer";
import Customer_Create from "../pages/backend/Customer/Customer_Create";
import Customer_Show from "../pages/backend/Customer/Customer_Show";
import Customer_Trash from "../pages/backend/Customer/Customer_Trash";
import Customer_Update from "../pages/backend/Customer/Customer_Update";
import Dashboard from "../pages/backend/Dashboard";
import Export from "../pages/backend/Export";
import Import_Product from "../pages/backend/Import_Product";
import Menu_List from "../pages/backend/Menu";
import Menu_Create from "../pages/backend/Menu/Menu_Create";
import Menu_Show from "../pages/backend/Menu/Menu_Show";
import Menu_Trash from "../pages/backend/Menu/Menu_Trash";
import Menu_Update from "../pages/backend/Menu/Menu_Update";
import Order_List from "../pages/backend/Order";
import Order_Show from "../pages/backend/Order/Order_Show";
import Order_Trash from "../pages/backend/Order/Order_Trash";
import Order_Update from "../pages/backend/Order/Order_Update";
import Page from "../pages/backend/Page";
import Page_Create from "../pages/backend/Page/Page_Create";
import Page_Show from "../pages/backend/Page/Page_Show";
import Page_Trash from "../pages/backend/Page/Page_Trash";
import Page_Update from "../pages/backend/Page/Page_Update";
import List_Post from "../pages/backend/Post";
import Create from "../pages/backend/Post/Create";
import Show from "../pages/backend/Post/Show";
import Trash_Post from "../pages/backend/Post/Trash_Post";
import Update from "../pages/backend/Post/Update";
import Product_Create from "../pages/backend/Product/Product_Create";
import Product_List from "../pages/backend/Product/Product_List";
import Product_Show from "../pages/backend/Product/Product_Show";
import Product_Trash from "../pages/backend/Product/Product_Trash";
import Product_Update from "../pages/backend/Product/Product_Update";
import Product_Sale from "../pages/backend/Product_Sale";
import Sale_Show from "../pages/backend/Product_Sale/Sale_Show";
import Sale_Trash from "../pages/backend/Product_Sale/Sale_Trash";
import Sale_Update from "../pages/backend/Product_Sale/Sale_Update";
import Slider_List from "../pages/backend/Slider";
import Slider_Create from "../pages/backend/Slider/Slider_Create";
import Slider_Show from "../pages/backend/Slider/Slider_Show";
import Slider_Trash from "../pages/backend/Slider/Slider_Trash";
import Slider_Update from "../pages/backend/Slider/Slider_Update";
import Topic_List from "../pages/backend/Topic";
import List_Trash from "../pages/backend/Topic/List_Trash";
import Show_Topic from "../pages/backend/Topic/Show_Topic";
import Update_Topic from "../pages/backend/Topic/Update_Topic";
import Trash from "../pages/backend/Trash";
import User_List from "../pages/backend/User";
import User_Create from "../pages/backend/User/User_Create";
import User_Show from "../pages/backend/User/User_Show";
import User_Trash from "../pages/backend/User/User_Trash";
import User_Update from "../pages/backend/User/User_Update";


const RouterPrivate = [
    {path:'/admin',component:Dashboard},

    // brand 
    {path:'/admin/brand',component:Brand_List},
    {path:'/admin/brand/update/:id',component:Brand_Update},
    {path:'/admin/brand/show/:id',component:Brand_Show},
    {path:'/admin/brand/trash',component:Trash},

    // product
    {path:'/admin/product',component:Product_List},
    {path:'/admin/product/show/:id',component:Product_Show},
    {path:'/admin/product/create',component:Product_Create},
    {path:'/admin/product/update/:id',component:Product_Update},
    {path:'/admin/product/trash',component:Product_Trash},

    // category
    {path:'/admin/category',component:Category_List},
    {path:'/admin/category/update/:id',component:Update_Category},
    {path:'/admin/category/show/:id',component:Show_Category},
    {path:'/admin/category/trash',component:Trash_Category},

    // topic
    {path:'/admin/topic',component:Topic_List},
    {path:'/admin/topic/trash',component:List_Trash},
    {path:'/admin/topic/update/:id',component:Update_Topic},
    {path:'/admin/topic/show/:id',component:Show_Topic},

    // post
    {path:'/admin/post',component:List_Post},
    {path:'/admin/post/create',component:Create},
    {path:'/admin/post/update/:id',component:Update},
    {path:'/admin/post/show/:id',component:Show},
    {path:'/admin/post/trash',component:Trash_Post},

    // page
    {path:'/admin/page',component:Page},
    {path:'/admin/page/create',component:Page_Create},
    {path:'/admin/page/update/:id',component:Page_Update},
    {path:'/admin/page/show/:id',component:Page_Show},
    {path:'/admin/page/trash',component:Page_Trash},
    
    // banner (slider)
    {path:'/admin/slider',component:Slider_List},
    {path:'/admin/slider/create',component:Slider_Create},
    {path:'/admin/slider/update/:id',component:Slider_Update},
    {path:'/admin/slider/show/:id',component:Slider_Show},
    {path:'/admin/slider/trash',component:Slider_Trash},
    
    // contact
    {path:'/admin/contact',component:Contact_List},
    {path:'/admin/contact/show/:id',component:Contact_Show},
    {path:'/admin/contact/trash',component:Contact_Trash},


    // customer
    {path:'/admin/customer',component:Customer_List},
    {path:'/admin/customer/create',component:Customer_Create},
    {path:'/admin/customer/update/:id',component:Customer_Update},
    {path:'/admin/customer/show/:id',component:Customer_Show},
    {path:'/admin/customer/trash',component:Customer_Trash},

    // user
    {path:'/admin/user',component:User_List},
    {path:'/admin/user/create',component:User_Create},
    {path:'/admin/user/update/:id',component:User_Update},
    {path:'/admin/user/show/:id',component:User_Show},
    {path:'/admin/user/trash',component:User_Trash},

    // menu
    {path:'/admin/menu',component:Menu_List},
    {path:'/admin/menu/create',component:Menu_Create},
    {path:'/admin/menu/update/:id',component:Menu_Update},
    {path:'/admin/menu/show/:id',component:Menu_Show},
    {path:'/admin/menu/trash',component:Menu_Trash},

    // product sale
    {path:'/admin/product/sale',component:Product_Sale},
    {path:'/admin/product/sale/show/:id',component:Sale_Show},
    {path:'/admin/product/sale/update/:id',component:Sale_Update},
    {path:'/admin/product/sale/trash',component:Sale_Trash},

    // order
    {path:'/admin/order',component:Order_List},
    {path:'/admin/order/show/:id',component:Order_Show},
    {path:'/admin/order/update/:id',component:Order_Update},
    {path:'/admin/order/trash',component:Order_Trash},

    // import product
    {path:'/admin/product/import',component:Import_Product},

    //export product
    {path:'/admin/product/export',component:Export},


    // config
    {path:'/admin/config',component:Config}



];
export default RouterPrivate;