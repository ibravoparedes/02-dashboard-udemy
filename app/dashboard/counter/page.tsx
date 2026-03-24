import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
    title: 'Pagina Contadora',
    description: 'Un simple contador'
}

export default function CounterPage() {

    /*
    function sumar() {
        setCounter(counter + 1);
    }
    function restar() {
        setCounter(counter - 1);
    }
    */

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <span>Productos en el Carrito</span>
            <CartCounter/>
        </div>
    );
}