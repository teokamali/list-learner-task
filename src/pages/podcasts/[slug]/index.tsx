const SinglePodcast = (
   //data
) => {
   return <div>SinglePodcast</div>;
};

export default SinglePodcast;

//* Fetch data from external API on server with every client request and render HTML ON Server (SSR)
export async function getServerSideProps() {
   // const res = await fetch(`https://.../data`)
   // const data = await res.json()

   // Pass data to the page via props
   return {
      props: {
         // data
      },
   };
}
