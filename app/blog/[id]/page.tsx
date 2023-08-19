export default function Blog({ params }: { params: { id: string } }) {
  return <p>I'm blog page with id {params.id}</p>;
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const dynamicParams = false;
