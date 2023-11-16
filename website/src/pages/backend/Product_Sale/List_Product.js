import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productServices from "../../../services/ProductServices";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";
import saleproductservices from "../../../services/SaleProductServices";

function List_Product({tamp2,updateTamp2}) {

    const handleTamp2 = (value) => {
        const newData = value;
        updateTamp2(newData);
      };

    const [productAll, setProductAll] = useState([]);
    const [end_page, setEnd] = useState(1);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {
            await productServices.getProducts(4, page).then((res) => {
                setProductAll(res.data.products);
                setEnd(res.data.end_page);
            })
        })();
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
    };

    // xu ly them 
    // xu ly ngay
    const [date_begin, setDateBegin] = useState('');
    const [date_end, setDateEnd] = useState('');
    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setDateBegin(formattedDate);
        setDateEnd(formattedDate);
    }, []);

    const handleDateBeginChange = (event) => {
        setDateBegin(event.target.value);
    };
    const handleDateEndChange = (event) => {
        setDateEnd(event.target.value);
    };
    // 
    const [agrPro, setProList] = useState([]);
    const addProSale = (event) => {
        if (event.target.checked === true) {
            setProList([...agrPro, event.target.value]);
        }
        else {
            const index = agrPro.indexOf(event.target.value);
            const updatedItems = agrPro.filter((item) => item !== event.target.value);
            const updatedDates = [...dates];
            const updatedDatesEnd = [...datesEnd];
            const updatedQty = [...qty];
            const updatedPrice = [...price];

            updatedDates.splice(index, 1);
            updatedDatesEnd.splice(index, 1);
            updatedQty.splice(index, 1);
            updatedPrice.splice(index, 1);
            //const updatedDatesWithoutNull = updatedDates.filter((item) => item !== null);
            setProList(updatedItems);
            setDates(updatedDates);
            setDatesEnd(updatedDatesEnd);
            setQty(updatedQty);
            setPrice(updatedPrice);
        }
    }


    // ngay
    const [dates, setDates] = useState([]);
    const handleDateChange = (value) => {
        const updatedDates = [...dates, value];
        //updatedDates[index] = value;
        setDates(updatedDates);
    };

    const [datesEnd, setDatesEnd] = useState([]);
    const handleDateChangeEnd = (value) => {
        const updatedDates = [...datesEnd, value];
        //updatedDates[index] = value;
        setDatesEnd(updatedDates);
    };
    // qty
    const [qty, setQty] = useState([]);
    const handleChangeQty = (value) => {
        const newValue = value.trim(); // Loại bỏ khoảng trắng ở đầu và cuối giá trị nhập vào
        if (newValue !== '' && !qty.includes(newValue)) {
            const updatedQty = [...qty, newValue];
            setQty(updatedQty);
        }
    }

    // price
    const [price, setPrice] = useState([]);
    const handleChangePrice = (value) => {
        const newValue = value.trim(); // Loại bỏ khoảng trắng ở đầu và cuối giá trị nhập vào
        if (newValue !== '' && !price.includes(newValue)) {
            const updatePrice = [...price, newValue];
            setPrice(updatePrice);
        }
    }

    // them sale
    async function appSale(event) {
        event.preventDefault();
        var sale = new FormData();
        agrPro.forEach((value,key)=>{
            sale.append(`product[${key}]`,value);
        })
        price.forEach((price,key)=>{
            sale.append(`price_sale[${key}]`,price);
        })
        qty.forEach((value,key)=>{
            sale.append(`qty[${key}]`,value);
        });
        dates.forEach((value,key)=>{
            sale.append(`date_begin[${key}]`,value);
        });
        datesEnd.forEach((value,key)=>{
            sale.append(`date_end[${key}]`,value);
        });
        sale.append("status", 1);

        await saleproductservices.store(sale).then(function (res) {
            if(res.data.success === true){
                alert(res.data.message);
                handleTamp2(1);
            }
            //navigate('/admin/sale', { replace: true });
        })
    }

    return (
        <div class="new-element">
            {console.log(agrPro)}
            {console.log(dates)}
            {console.log(datesEnd)}
            {console.log(price)}
            {console.log(qty)}

            <div className="" id="hiddenElement">
                <form onSubmit={appSale}>
                    <div class="card bg-info ms-5 mt-4">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-8 d-flex">
                                    <h4>Tất cả sản phẩm</h4>
                                </div>
                                <div class="col-4">
                                    <div className="d-flex float-right">
                                        <input type="text" class="form-control" style={{ width: "100%", height: "70%" }} />
                                        <button className="btn"><i class="fa fa-search "></i></button>
                                        {/* <div>
                                        <button onClick={handleButtonClick}><i className="fa fa-exit"></i>Thoát</button>
                                    </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered" id="mytable">
                                <thead>
                                    <tr>
                                        <th class="text-center" style={{ width: "30px" }}>
                                            <input type="checkbox" />
                                        </th>
                                        <th class="text-center" style={{ width: "130px" }}>Hình ảnh</th>
                                        <th style={{ width: "250px" }}>Tên sản phẩm</th>
                                        <th>Giá bán</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc</th>
                                        <th style={{ width: "150px" }}>Số lượng</th>
                                        <th style={{ width: "150px" }}>Giá sale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productAll.map((pro, index) => {
                                        return (
                                            <tr class="datarow" key={index} >
                                                <td>
                                                    <input type="checkbox" value={pro.id} onChange={addProSale} />
                                                </td>
                                                <td>

                                                    <img src={urlImage + "Product/" + pro.image} alt="product.jpg" style={{ width: "100%" }} />
                                                </td>
                                                <td>
                                                    <div class="name">
                                                        {pro.name}
                                                    </div>
                                                    <div class="function_style d-flex">
                                                        {/* <a href="#">Hiện</a> | */}
                                                        <Link to={`/admin/product/sale/update/1`} style={{ fontSize: "14px", paddingTop: "3px" }}><i className="fa fa-edit"></i>Chỉnh sửa</Link> |
                                                        <Link to={`/admin/product/sale/show/1}`} style={{ fontSize: "14px", paddingTop: "3px" }}><i className="fa fa-eye me-1"></i>Chi tiết</Link> |
                                                        {/* <button onClick={() => productTrash(1)} style={{ fontSize: "14px" }}><i className="fa fa-trash me-1"></i>Xoá</button> */}
                                                    </div>
                                                </td>
                                                <td>{pro.price}</td>
                                                <td>
                                                    <input
                                                        type="date"
                                                        // value={date_begin}
                                                        // onChange={handleDateBeginChange}
                                                        onChange={(event) => handleDateChange(event.target.value)}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="date"
                                                        // value={date_end}
                                                        onChange={(e) => handleDateChangeEnd(e.target.value)}
                                                    />
                                                </td>
                                                <td>
                                                    <input onChange={(e) => handleChangeQty(e.target.value)} type="text" max={pro.qty} min="0" />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        max={pro.price}
                                                        min="0"
                                                        onChange={(e) => handleChangePrice(e.target.value)}
                                                    />
                                                </td>
                                            </tr>

                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination justify-content-center mb-2">
                            <Pagination page={page} count={end_page} onChange={handleChange} />
                        </div>
                        <div className="mt-2 mb-2">
                            <div className="text-right">
                                <button id="toggleButton" class="btn btn-sm btn-warning me-3 ">
                                    <i class="fa fa-plus me-1" aria-hidden="true"></i>
                                    Thiết lập
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>

    );
}

export default List_Product;