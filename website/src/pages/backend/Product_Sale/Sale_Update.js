import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import saleproductservices from "../../../services/SaleProductServices";

function Sale_Update() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [date_beginSQL,setBeginSQL] = useState('');
    const [date_begin,setBegin] = useState('');

    const [date_endSQL,setEndSQL] = useState('');
    const [date_end,setEnd] = useState('');

    const [price_sale,setSale] = useState(0);
    const [status,setStatus] = useState(0);
    const [qty,setQty] = useState(0);


    try{
        useEffect(()=>{
            (async ()=>{
                await saleproductservices.getSaleById(id).then((res)=>{
                    setBeginSQL(res.data.product.date_begin);
                    setStatus(res.data.product.status);
                    setSale(res.data.product.price_sale);
                    setEndSQL(res.data.product.date_end);
                    setQty(res.data.product.qty);
                })
            })()
        },[])

    }catch(e){ console.log(e); }

    async function SaleUpdate(event) {
        event.preventDefault();
        var product = new FormData();
        product.append("date_begin", date_begin);
        product.append("date_end", date_end);
        product.append("price_sale", price_sale);
        product.append("qty", qty);
        product.append("status", status);

        await saleproductservices.update(id,product).then(function (res) {
            alert(res.data.message);
            navigate('/admin/product/sale', { replace: true });
        })
    }


    useEffect(() => {
        // Chuyển đổi định dạng datetime sang ngày tháng
        const formattedDate = date_beginSQL ? date_beginSQL.substr(0, 10) : '';
        const formattedDate1 = date_endSQL ? date_endSQL.substr(0, 10) : '';
        setBegin(formattedDate);
        setEnd(formattedDate1);
      }, [date_beginSQL,date_endSQL]);


    return (
        <form action="" method="post" onSubmit={SaleUpdate}>
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-12">
                                <h1 class="d-inline">Cập nhật sản phẩm sale</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="card">
                        <div class="card-header text-right">
                            <Link to="/admin/product/sale" class="btn btn-sm btn-info me-2">
                                <i class="fa fa-reply me-1" aria-hidden="true"></i>
                                Quay lại
                            </Link>
                            <button type="submit" class="btn btn-sm btn-success" name="CHANGEADD">
                                <i class="fa fa-save me-1" aria-hidden="true"></i>
                                Lưu
                            </button>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label>Ngày bắt đầu (*)</label>
                                        <input value={date_begin} onChange={(e) => setBegin(e.target.value)} type="date"  name="price" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Ngày kết thúc (*)</label>
                                        <input value={date_end} onChange={(e) => setEnd(e.target.value)} type="date"  name="price" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Giá khuyến mãi (*)</label>
                                        <input value={price_sale} onChange={(e) => setSale(e.target.value)} type="number" min="1" name="price" class="form-control" />
                                    </div>                                    

                                </div>
                                <div class="col-md-2">
                                    <div class="mb-3">
                                        <label>Số lượng (*)</label>
                                        <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" min="1" name="price" class="form-control" />
                                    </div>
                                    <div class="mb-3">
                                        <label>Trạng thái</label>
                                        <select name="status" class="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="1">Xuất bản</option>
                                            <option value="2">Chưa xuất bản</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </form>

    );
}

export default Sale_Update;