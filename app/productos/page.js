import { redirect } from "next/navigation";
import { products } from "@/data/products";

export default function ProductosPage() {
  redirect(`/productos/${products[0].id}`);
}
