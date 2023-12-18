import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}





export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}