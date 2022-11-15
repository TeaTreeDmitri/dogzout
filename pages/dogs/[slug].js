import Image from "next/image";
import Head from "next/head"
import React from "react"

export default function Henry({data}) {
   return  (
   <>
   <Head>{data.title}</Head>
   <h1>{data.content.heading}</h1>
      <p>{data.content.text}</p>

   <Image
        src={data.content.image.src}
        alt = {data.content.text}
        width = {data.content.image.width}
        height = {data.content.image.height}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        priority
    />
   </>
   );
}

export async function getStaticProps(context) {
   const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/" + context.params.slug);

   if (res.status != 200) {
      return {
         notFound: true
      }
   }

   const data = await res.json();

   return {
      props: {
         data,
      }
   }
}

export async function getStaticPaths() {
   const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/");
   const data = await res.json();

const paths = data.map((entry)=> {
   console.log(entry);
   return { params: {slug: entry.slug }}
})

   return {
      paths: [
         {params: {slug: "steve" }}, {params: {slug: "henry"}}
      ],

      fallback: false,
   }
}