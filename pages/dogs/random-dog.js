
export default function randomDog({data}) {

  return <img src={data.message} alt=""/>
};

//this function runs on the server
export async function getServerSideProps() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    return {
        props: {
            data,
        }
    }
}
