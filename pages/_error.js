import React from 'react';
import Link from 'next/link';
 

const errorPage = () =>(
    <div>
        <h1>Opps Something went wrong...</h1>
        <p>Go to <Link href="/"><a>Back</a></Link></p>
    
    </div>
);

export default errorPage;