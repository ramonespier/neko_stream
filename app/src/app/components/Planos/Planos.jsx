import Card from "../Card/CardVip1";
import CardVip2 from "../Card/CardVip2";
import CardVip3 from "../Card/CardVip3";

export default function Planos () {
    return (
        <>
        <div className="flex justify-center gap-7">
        <Card/>
        <CardVip2/>
        <CardVip3/>
        </div>
        </>
    )
}