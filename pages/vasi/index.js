import React from 'react';

import User from '../../components/User/User';

const VasiIndexPage = () =>(
    <div>
        <p>This is Vasi page</p>
        <User name={"Vasi"} age={21}/>
        <style jsx>
            {`
            div {
                padding:20px;
                text-align:center;
                box-shadow:2px 2px  #eee;
                box:0px 2px solid #ccc;
            }
            `}</style>
    </div>
);

export default VasiIndexPage;