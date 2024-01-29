import ArtExhibitForm from '@components/artExhibitForm'
import { getToken, getListOfBranches } from '@utils/actions'

export default async function  ArtExhibitPage() {
  let locations
  const token = await getToken()
  if (token){
    locations = await getListOfBranches(token)
  }

  return (<ArtExhibitForm locations={locations} />)
}