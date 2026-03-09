import { useQuery } from "@tanstack/react-query"

export default function Products() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://benihbibit-api.bandomega.com/products").then(
        (res) => res.json
      ),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  console.log(data.name)

  return <div>{data.length}</div>
}
