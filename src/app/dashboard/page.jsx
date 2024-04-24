import Link from "next/link";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Dashboard() {
  const data = await getData();
  const products = data.products;
  // const [products, setProduct] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setProduct(response.data))
  //     .then((err) => console.log(err));
  // }, []);
  return (
    <>
      <div className="px-6 my-20">
        <h1 className="text-5xl font-bold">Products Page</h1>
        <button className="bg-slate-900 rounded-lg p-2 text-white">
          Add Product
        </button>
      </div>
      <table className="">
        <thead className="">
          <tr className="">
            <th className="border border-gray-700 p-1">Id</th>
            <th className="border border-gray-700 px-20">Title</th>

            <th className="border border-gray-700 px-20">Options</th>
          </tr>
        </thead>
        <tbody className="">
          {products.map((product) => (
            <tr className="" key={product.id}>
              <td className="border border-gray-700 p-1">{product.id}</td>
              <td className="border border-gray-700 px-20">{product.title}</td>
              <td className="border border-gray-700 px-20 flex gap-1 text-white">
                <button className="bg-red-950 rounded-lg p-1">Delete</button>
                <Link href={`/dashboard/${product.id}`}>
                  <button className="bg-blue-950 rounded-lg p-1">View</button>
                </Link>
                <button className="bg-green-950 rounded-lg p-1">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
