import Practice5 from './practice5/components';
import Practice6 from './practice6/components';
import Practice7 from './practice7/components';

import './App.scss';

function App() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <a className="logo" href="https://aptech-danang.edu.vn/">
                        <img src="https://aptech-danang.edu.vn/Content/ace/images/banner-sm.jpg" alt="" />
                    </a>
                    <div className="content">
                        <h5>HỆ THỐNG ĐÀO TẠO CNTT QUỐC TẾ</h5>
                        <h6>A: 38 Yên Bái, Quận Hải Châu, Thành phố Đà Nẵng</h6>
                        <h6>
                            T: 0236.3.779.779 | F: 0236.3.779.555 | W: aptech-danang.edu.vn | E: tuyensinh@softech.vn
                        </h6>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <h1>5. Block UI</h1>
                <Practice5 />
                <h1>6. Block UI</h1>
                <Practice6 />
                <h1>7. Block UI</h1>
                <Practice7 />
            </div>
        </>
    );
}

export default App;
