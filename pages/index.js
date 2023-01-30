import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const markers = [
  {
    id: "7c5qktU8",
    name: "Roßmarkt Frankfurt",
    lat: 50.1123904,
    long: 8.6753527,
  },
  {
    id: "2F11t82g",
    name: "Currywurst Wagen Hamburg",
    lat: 53.5450717,
    long: 10.0267705,
  },
];

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>;
      <Map markers={markers} />
    </>
  );
}
