"use client";

import Container from "@/components/ui/container";
import { useEffect, useState } from "react";

const CartPage = () => {
    const [ isMounted, setIsMounted ] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1>Shopping Cart</h1>
                </div>
            </Container>
        </div>
    )
}

export default CartPage;