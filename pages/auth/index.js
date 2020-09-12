import React from 'react';

import User from '../../components/User/User';

const authIndexPage = () =>(
    <div>
        <p>This is another page</p>
        <User name={"Manu"} age={21}/>
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

export default authIndexPage;