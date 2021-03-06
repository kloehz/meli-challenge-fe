import { useEffect, useState, } from "react";
import { useLocation } from "react-router-dom";
import { apiGetItemDetails } from "../api/itemDetail";
import { IGetItemDetail, Item, Price } from "../types/getItemDetail";
import { Spinner } from "../components/loader/Spinner";
import { ItemDetailContainer } from "../components/item-detail/ItemDetailContainer";
import { NotFound } from "./NotFound";

export const ItemDetail =  () => {

    const location = useLocation<IGetItemDetail>();
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState<Item>();

    useEffect(() => {
        apiGetItemDetails(location.pathname.slice(7, location.pathname.length)).then((res) => {
            setItem(res.data.item);
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false);
        });
    }, []);

    return (
            (
                isLoading
                ? <Spinner />
                : item
                    ? <div className="item-detail-page">
                        <ItemDetailContainer {...item} />
                        </div>
                    : <NotFound />
            )
    )
}