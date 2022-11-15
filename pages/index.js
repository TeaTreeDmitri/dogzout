import Link from "next/link";
import Anchor from "../components/Anchor"
import Head from "next/head"

export default function Home() {
  return (
  <>
  <Head>
    <title>Henry's Homepage</title>
    </Head>
  <Anchor href="/dogs/henry">Where's Henry??</Anchor>
  </>
  );
} 







